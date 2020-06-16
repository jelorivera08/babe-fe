/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { graphql, commitMutation } from "react-relay";
import { useHistory } from "react-router-dom";
import { Select, Card, Button } from "semantic-ui-react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import environment from "../../../environment";
import axios from "axios";

import { API } from "../../../constants";

import { options, regionOptions } from "./constants";

const mutation = graphql`
  mutation SignupMutation(
    $username: String!
    $password: String!
    $firstName: String!
    $surname: String!
    $accountType: String!
    $facebookURL: String!
    $instagramURL: String!
    $areaOfDistribution: String!
    $address: String!
    $region: String!
  ) {
    userCreate(
      username: $username
      password: $password
      firstName: $firstName
      surname: $surname
      accountType: $accountType
      facebookURL: $facebookURL
      instagramURL: $instagramURL
      address: $address
      areaOfDistribution: $areaOfDistribution
      region: $region
    ) {
      username
    }
  }
`;

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    firstName: "",
    surname: "",
    accountType: "",
    facebookURL: "",
    region: "",
    instagramURL: "",
    areaOfDistribution: "",
    address: "",
  });
  const [error, setError] = useState("");
  const [registrationSucess, setRegistrationSucess] = useState(false);
  const [imgFile, setImgFile] = useState("");

  const history = useHistory();

  const handleSubmit = async (values) => {
    setError("");
    let hasIncompleteCredentials = false;

    Object.values(credentials).forEach((v) => {
      if (v === "") {
        hasIncompleteCredentials = true;
      }
    });

    if (credentials.password !== credentials.confirmPassword) {
      return setError("Password does not match.");
    }

    if (hasIncompleteCredentials) {
      return setError("Incomplete form details.");
    }

    return commitMutation(environment, {
      mutation,
      variables: { ...values },
      onCompleted: (response, errors) => {
        if (response && response.userCreate && response.userCreate.username) {
          if (imgFile === "") return null;
          const formData = new FormData();
          formData.append("file", imgFile);
          formData.append("username", credentials.username);

          axios
            .post(`${API}/upload`, formData, {})
            .then(() => {
              setRegistrationSucess(true);
            })
            .catch((err) => setError(err));
        }

        if (errors) {
          setError(errors[0].message);
        }
      },
      onError: (err) => setError("Unable to process. Please try again."),
    });
  };

  return (
    <Background>
      <Header history={history} />

      {registrationSucess ? (
        <Card
          style={{
            width: "40rem",
            height: "12rem",
          }}
        >
          <Card.Content>
            <Card.Header>Registration Success!</Card.Header>
            <Card.Description>
              <div className="mb-1">
                Please wait until your account is reviewed by our staff.
              </div>
              <div> You will be contacted accordingly.</div>
            </Card.Description>
          </Card.Content>
          <Card.Content extra className="flex justify-end">
            <Button
              primary
              onClick={() => {
                setRegistrationSucess(false);
                history.push("/");
              }}
            >
              Okay
            </Button>
          </Card.Content>
        </Card>
      ) : (
        <div className="w-full max-w-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(credentials);
            }}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="flex">
              <div className="mb-4 w-1/2 mr-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={credentials.username}
                  onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })
                  }
                />
              </div>
              <div className="mb-4 w-1/2 mr-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="photo"
                >
                  Upload your photo
                </label>
                <input
                  className="appearance-none w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                  name="userPhoto"
                  type="file"
                  onChange={(e) => {
                    setImgFile(e.target.files[0]);
                  }}
                />
              </div>
            </div>

            <div className="flex">
              <div className="mb-6 mr-2 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="********"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                />
              </div>

              <div className="mb-4 ml-2 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Confirm password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  placeholder="********"
                  value={credentials.confirmPassword}
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="flex">
              <div className="mb-4 mr-2 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstname"
                >
                  First name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstname"
                  type="text"
                  placeholder="Babe"
                  value={credentials.firstName}
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      firstName: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-4 ml-2 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="surname"
                >
                  Surname
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="surname"
                  type="text"
                  placeholder="Dela Cruz"
                  value={credentials.surname}
                  onChange={(e) =>
                    setCredentials({ ...credentials, surname: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex">
              <div className="mb-4 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="accountType"
                >
                  Account type
                </label>

                <Select
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e, { value }) =>
                    setCredentials({ ...credentials, accountType: value })
                  }
                  value={credentials.accountType}
                  placeholder="Account type"
                  options={options}
                />
              </div>

              <div className="mb-4 ml-2 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="region"
                >
                  Region
                </label>

                <Select
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e, { value }) =>
                    setCredentials({ ...credentials, region: value })
                  }
                  value={credentials.region}
                  placeholder="Region"
                  options={regionOptions}
                />
              </div>
            </div>

            <div className="flex">
              <div className="mb-6 mr-2 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Facebook URL
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="facebookURL"
                  type="text"
                  placeholder="BabeDelaCruzFB"
                  value={credentials.facebookURL}
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      facebookURL: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-4 ml-2 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Instagram URL
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="instagramURL"
                  type="text"
                  placeholder="BabeDelaCruzIG"
                  value={credentials.instagramURL}
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      instagramURL: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="mb-6 mr-2 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Area of Distribution
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="facebookURL"
                type="text"
                placeholder="Maginhawa, Quezon City"
                value={credentials.areaOfDistribution}
                onChange={(e) => {
                  if (credentials.areaOfDistribution.length >= 100) return null;

                  return setCredentials({
                    ...credentials,
                    areaOfDistribution: e.target.value,
                  });
                }}
              />
            </div>

            <div className="mb-6 mr-2 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="facebookURL"
                type="text"
                placeholder="Complete Address"
                value={credentials.address}
                onChange={(e) => {
                  if (credentials.address.length >= 100) return null;

                  return setCredentials({
                    ...credentials,
                    address: e.target.value,
                  });
                }}
              />
            </div>

            <div className="flex justify-between mt-4">
              {error ? (
                <p className="text-red-500 text-m italic">
                  {JSON.stringify(error)}
                </p>
              ) : (
                <div />
              )}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="text-center text-gray-200 text-xs">
            &copy;2020 Babe Inc. All rights reserved.
          </p>
        </div>
      )}
    </Background>
  );
};

export default SignUp;
