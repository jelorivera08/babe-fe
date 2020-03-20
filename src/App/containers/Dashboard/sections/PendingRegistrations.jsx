/* eslint-disable react/prop-types */
import React from 'react';


export default ({ users }) => {
  const handleStatusChange = () => {};

  return (
    <div className="w-full">
      <div className="m-8 pt-4 text-lg">Review registered accounts</div>
      <div className="w-full h-full p-6">


        {
        users.map(({
          firstName, username, surname, accountType, facebookURL, status, instagramURL,
        }) => (


          <div key={username} className="mb-8 w-full border border-gray-400 border-solid rounded p-4">
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
                <div className="inline-block relative w-32 ml-2">
                  <select
                    value={status}
                    onChange={handleStatusChange}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="ACTIVE">Active</option>
                    <option value="PENDING">Pending</option>
                    <option value="DISABLE">Disable</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>


              </div>
            </div>


          </div>


        ))
      }
      </div>
    </div>
  );
};
