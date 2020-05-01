/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { graphql, commitMutation } from "react-relay";
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
  { key: "Instagram", value: "instagramURL", text: "Instagram" },
  { key: "Facebook", value: "facebookURL", text: "Facebook" },
  { key: "imageUrl", value: "imageUrl", text: "Image" },
  { key: "Status", value: "status", text: "Status" },
];

export default () => {
  const { users } = usePreloadedQuery(query, result);
  const [searchType, setSearchType] = useState("accountType");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [imageModal, setImageModal] = useState("");

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user[searchType].toLowerCase().includes(searchKeyword.toLowerCase())
      )
    );
  }, [searchKeyword, users, searchType]);

  const handleStatusChange = (values, i) => {
    commitMutation(environment, {
      mutation,
      variables: { ...values },
      updater: (store) => {
        const payload = store.getRootField("changeUserStatus");
        const root = store.getRoot();
        const usersProxy = root.getLinkedRecords("users");
        const userProxy = usersProxy[i];

        userProxy.setValue(payload.getValue("status"), "status");
      },
      onError: (err) => console.log(err),
    });
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
            {filteredUsers.map(
              (
                {
                  firstName,
                  username,
                  surname,
                  accountType,
                  facebookURL,
                  status,
                  instagramURL,
                  imageUrl,
                  region,
                },
                i
              ) => (
                <Table.Row key={username}>
                  <Table.Cell>{accountType}</Table.Cell>
                  <Table.Cell>{username}</Table.Cell>
                  <Table.Cell>{firstName}</Table.Cell>
                  <Table.Cell>{surname}</Table.Cell>
                  <Table.Cell>{region || "NA"}</Table.Cell>
                  <Table.Cell>{instagramURL}</Table.Cell>
                  <Table.Cell>{facebookURL}</Table.Cell>
                  <Table.Cell>
                    <Button size='mini' onClick={() => setImageModal(imageUrl)}>
                      <Button.Content>
                        <Icon name='picture' />
                      </Button.Content>
                    </Button>
                  </Table.Cell>
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
                </Table.Row>
              )
            )}
            {filteredUsers.length <= 0 ? (
              <Table.Row className='cursor-pointer'>
                <Table.Cell colSpan={7}>No results found</Table.Cell>
              </Table.Row>
            ) : null}
          </Table.Body>
        </Table>
      </UsersContainer>

      <Modal
        size='mini'
        dimmer='inverted'
        onClose={() => setImageModal("")}
        open={imageModal !== ""}
      >
        <Modal.Header>User Photo</Modal.Header>
        <Modal.Content>
          {imageModal === null ? (
            <div>This user has no uploaded photo.</div>
          ) : (
            <Image
              style={{
                margin: "auto",
              }}
              wrapped
              size='medium'
              src={imageModal}
            />
          )}
        </Modal.Content>
      </Modal>
    </div>
  );
};
