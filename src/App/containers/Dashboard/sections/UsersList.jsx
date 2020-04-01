/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, commitMutation } from 'react-relay';
import styled from 'styled-components';
import { Select } from 'semantic-ui-react';
import environment from '../../../../environment';


const { preloadQuery, usePreloadedQuery } = require('react-relay/hooks');

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
    }
  }
`;

const result = preloadQuery(
  environment,
  query,
);


const mutation = graphql`
  mutation UsersListMutation($username: String! $status: String!)  {
    changeUserStatus(username: $username status: $status) {
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
  { key: 'ACTIVE', value: 'ACTIVE', text: 'Active' },
  { key: 'PENDING', value: 'PENDING', text: 'Pending' },
  { key: 'INACTIVE', value: 'INACTIVE', text: 'Inactive' },
];


export default () => {
  const { users } = usePreloadedQuery(query, result);

  const handleStatusChange = (values, i) => {
    commitMutation(environment, {
      mutation,
      variables: { ...values },
      updater: (store) => {
        const payload = store.getRootField('changeUserStatus');
        const root = store.getRoot();
        const usersProxy = root.getLinkedRecords('users');
        const userProxy = usersProxy[i];

        userProxy.setValue(payload.getValue('status'), 'status');
      },
      onError: (err) => console.log(err),
    });
  };

  return (
    <div className="w-full">
      <div className="m-8 pt-4 text-xl">Review registered accounts</div>
      <UsersContainer className="w-full p-6">


        {
        users.map(({
          firstName, username, surname, accountType, facebookURL, status, instagramURL,
        }, i) => (


          <div key={username} className="mb-8 w-full  border bg-gray-200 border-gray-400 border-solid rounded p-4">
            <div className="flex mb-2">
              <div className="font-semibold">Username: </div>
              <div className="ml-2">{username}</div>
            </div>

            <div className="flex mb-2">

              <div className="flex w-1/2">
                <div className="font-semibold">First Name:</div>
                <div className="ml-2">{firstName}</div>

              </div>

              <div className="flex w-1/2">
                <div className="font-semibold">Surname:</div>
                <div className="ml-2">{surname}</div>

              </div>

            </div>

            <div className="flex  mb-2">


              <div className="flex w-1/2">
                <div className="font-semibold">Instagram URL:</div>
                <div className="ml-2">{instagramURL}</div>
              </div>


              <div className="flex w-1/2">
                <div className="font-semibold">Facebook URL:</div>
                <div className="ml-2">{facebookURL}</div>

              </div>

            </div>

            <div className="flex mb-2">

              <div className="flex w-1/2">
                <div className="font-semibold">Account Type:</div>
                <div className="ml-2">{accountType}</div>

              </div>

              <div className="flex w-1/2">
                <div className="font-semibold">Status:</div>
                <Select
                  className="ml-2"
                  onChange={(e, { value }) => handleStatusChange({ username, status: value }, i)}
                  value={status}
                  placeholder="Select Status"
                  options={options}
                />


              </div>
            </div>


          </div>


        ))
      }
      </UsersContainer>
    </div>
  );
};
