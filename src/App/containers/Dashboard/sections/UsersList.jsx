/* eslint-disable react/prop-types */
import React from "react";
import { graphql, commitMutation } from "react-relay";
import styled from "styled-components";
import { Select, Table } from "semantic-ui-react";
import environment from "../../../../environment";

const { preloadQuery, usePreloadedQuery } = require("react-relay/hooks");

const query = graphql`
  query UsersListQuery {
    users {
      username
      firstName
      facebookURL
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

export default () => {
  const { users } = usePreloadedQuery(query, result);

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
    <div className="w-full">
      <div className="m-8 pt-4 text-xl">Review registered accounts</div>
      <UsersContainer className="w-full p-6">
        <Table celled selectable striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Account Type</Table.HeaderCell>
              <Table.HeaderCell>Username</Table.HeaderCell>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Surname</Table.HeaderCell>
              <Table.HeaderCell>Region</Table.HeaderCell>
              <Table.HeaderCell>Instagram</Table.HeaderCell>
              <Table.HeaderCell>Facebook</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users.map(
              (
                {
                  firstName,
                  username,
                  surname,
                  accountType,
                  facebookURL,
                  status,
                  instagramURL,
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
                    <Select
                      className="ml-2"
                      onChange={(e, { value }) =>
                        handleStatusChange({ username, status: value }, i)
                      }
                      value={status}
                      placeholder="Select Status"
                      options={options}
                    />
                  </Table.Cell>
                </Table.Row>
              )
            )}
          </Table.Body>
        </Table>
      </UsersContainer>
    </div>
  );
};
