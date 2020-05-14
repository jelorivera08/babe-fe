/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { graphql, commitMutation } from "react-relay";
import axios from "axios";
import { API } from "../../../../constants";
import styled from "styled-components";
import {
  Select,
  Table,
  Input,
  Button,
  Icon,
  Modal,
  Image,
} from "semantic-ui-react";
import environment from "../../../../environment";

const { preloadQuery, usePreloadedQuery } = require("react-relay/hooks");

const query = graphql`
  query UsersListQuery {
    users {
      username
      firstName
      facebookURL
      imageUrl
      instagramURL
      surname
      accountType
      address
      areaOfDistribution
      status
      region
    }
  }
`;

const result = preloadQuery(environment, query);

const mutation = graphql`
  mutation UsersListMutation($username: String!, $status: String!) {
    changeUserStatus(username: $username, status: $status) {
      username
      status
    }
  }
`;

const deleteUserMutation = graphql`
  mutation UsersListDeleteMutation($username: String!) {
    deleteUser(username: $username) {
      username
    }
  }
`;

const UsersContainer = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 94px);
`;

const options = [
  { key: "ACTIVE", value: "ACTIVE", text: "Active" },
  { key: "PENDING", value: "PENDING", text: "Pending" },
  { key: "INACTIVE", value: "INACTIVE", text: "Inactive" },
];

const tableHeaders = [
  { key: "Account Type", value: "accountType", text: "Account Type" },
  { key: "Username", value: "username", text: "Username" },
  { key: "First Name", value: "firstName", text: "First Name" },
  { key: "Surname", value: "surname", text: "Surname" },
  { key: "Region", value: "region", text: "Region" },
  { key: "Status", value: "status", text: "Status" },
  { key: "Actions", value: "Actions", text: "Actions" },
];

export default () => {
  const { users } = usePreloadedQuery(query, result);
  const [searchType, setSearchType] = useState("accountType");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [modalInfo, setModalInfo] = useState({});
  const [deleteUser, setDeleteUser] = useState({ username: null });

  const deleteUserCommit = (username) => {
    commitMutation(environment, {
      mutation: deleteUserMutation,
      variables: { username },
      updater: (store) => {
        const payload = store.getRootField("deleteUser");
        const root = store.getRoot();
        const usersProxy = root.getLinkedRecords("users");

        const newUsers = usersProxy.filter(
          (user) => user.getValue("username") !== payload.getValue("username")
        );

        root.setLinkedRecords(newUsers, "users");

        setDeleteUser({ username: null });
      },
      onError: (err) => console.log(err),
    });
  };

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user[searchType].toLowerCase().includes(searchKeyword.toLowerCase())
      )
    );
  }, [searchKeyword, users, searchType]);

  const handleStatusChange = (values) => {
    commitMutation(environment, {
      mutation,
      variables: { ...values },
      updater: (store) => {
        const payload = store.getRootField("changeUserStatus");
        const root = store.getRoot();
        const usersProxy = root.getLinkedRecords("users");
        const userProxy = usersProxy.find(
          (val) => val.getValue("username") === payload.getValue("username")
        );

        userProxy.setValue(payload.getValue("status"), "status");
      },
      onError: (err) => console.log(err),
    });
  };

  const handlePhotoUpload = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("username", modalInfo.username);

    axios
      .post(`${API}/upload`, formData, {})
      .then(() => window.location.reload(false))
      .catch((err) => console.error(err));
  };

  return (
    <div className='w-full'>
      <div className='m-8 pt-4 text-xl flex justify-between items-center'>
        <div>Review registered accounts</div>

        <div>
          <Select
            className='mr-1'
            placeholder='Select Search Type'
            style={{
              minWidth: "10rem",
              fontSize: "1rem",
              minHeight: "2.5rem",
            }}
            value={searchType}
            onChange={(e, { value }) => setSearchType(value)}
            options={tableHeaders}
          />
          <Input
            onChange={(e) => setSearchKeyword(e.target.value)}
            icon='search'
            size='mini'
            placeholder='Search...'
          />
        </div>
      </div>
      <UsersContainer className='w-full p-6'>
        <Table celled selectable striped>
          <Table.Header>
            <Table.Row>
              {tableHeaders.map((v) => (
                <Table.HeaderCell key={v.key}>{v.text}</Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {filteredUsers.map((user, i) => {
              const {
                firstName,
                username,
                surname,
                accountType,
                status,
                region,
              } = user;
              return (
                <Table.Row
                  key={username}
                  onClick={() => setModalInfo(user)}
                  className='cursor-pointer'
                >
                  <Table.Cell>{accountType}</Table.Cell>
                  <Table.Cell>{username}</Table.Cell>
                  <Table.Cell>{firstName}</Table.Cell>
                  <Table.Cell>{surname}</Table.Cell>
                  <Table.Cell>{region || "NA"}</Table.Cell>
                  <Table.Cell>
                    <Select
                      className='ml-2'
                      onChange={(e, { value }) =>
                        handleStatusChange({ username, status: value }, i)
                      }
                      value={status}
                      placeholder='Select Status'
                      options={options}
                    />
                  </Table.Cell>

                  <Table.Cell>
                    <Icon
                      onClick={(e) => {
                        e.stopPropagation();

                        setDeleteUser({ username });
                      }}
                      name='trash'
                    />
                  </Table.Cell>
                </Table.Row>
              );
            })}
            {filteredUsers.length <= 0 ? (
              <Table.Row className='cursor-pointer'>
                <Table.Cell colSpan={7}>No results found</Table.Cell>
              </Table.Row>
            ) : null}
          </Table.Body>
        </Table>
      </UsersContainer>

      <Modal
        dimmer='inverted'
        onClose={() => setModalInfo({})}
        open={modalInfo.hasOwnProperty("username")}
      >
        <Modal.Header>User details</Modal.Header>
        <Modal.Content image>
          <div className='w-1/2'>
            {modalInfo.imageUrl ? (
              <Image
                wrapped
                style={{
                  width: "100%",
                  padding: "1rem",
                }}
                src={modalInfo.imageUrl}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                }}
                className='p-4'
              >
                No Image Available
              </div>
            )}

            <div className='px-4'>
              <div className='mt-8 font-bold '>Upload new photo</div>
              <div className='mb-2 text-xs text-gray-500 '>
                Uploading a photo will refresh the page
              </div>
              <input
                className='appearance-none w-1/2 py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline'
                name='userPhoto'
                type='file'
                placeholder='Change User Photo'
                onChange={handlePhotoUpload}
              />
            </div>
          </div>
          <Modal.Description
            className='overflow-auto'
            style={{ maxWidth: "50%" }}
          >
            <div className='font-bold py-4'>Username</div>
            <div>{modalInfo.username}</div>
            <div className='text-xl font-bold py-4'>Name</div>
            <div className='flex'>
              <div>{`${modalInfo.firstName} ${modalInfo.surname}`}</div>
            </div>
            <div className='text-xl font-bold py-4'>Account Type</div>
            <div>{modalInfo.accountType}</div>

            <div className='text-xl font-bold py-4'>Region</div>
            <div>{modalInfo.region}</div>

            <div className='text-xl font-bold py-4'>Status</div>
            <div>{modalInfo.status}</div>

            <div className='text-xl font-bold py-4'>Area of Distribution</div>
            <div>{modalInfo.areaOfDistribution || "NA"}</div>

            <div className='text-xl font-bold py-4'>Address</div>
            <div>{modalInfo.address || "NA"}</div>

            <div className='text-xl font-bold py-4'>Facebook</div>
            <div>{modalInfo.facebookURL || "NA"}</div>

            <div className='text-xl font-bold py-4'>Instagram</div>
            <div>{modalInfo.instagramURL || "NA"}</div>
          </Modal.Description>
        </Modal.Content>
      </Modal>

      <Modal
        dimmer='inverted'
        size='tiny'
        onClose={() => setDeleteUser({ username: null })}
        open={deleteUser.username !== null}
      >
        <Modal.Header>Delete This Account</Modal.Header>
        <Modal.Content>
          <p>{`Are you sure you want to delete ${deleteUser.username}'s account`}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setDeleteUser({ username: null })} negative>
            No
          </Button>
          <Button
            onClick={() => deleteUserCommit(deleteUser.username)}
            positive
            icon='checkmark'
            labelPosition='right'
            content='Yes'
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};
