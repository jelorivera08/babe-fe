/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import cx from "classnames";
import { graphql } from "react-relay";
import { fetchQuery } from "relay-runtime";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import environment from "../../../../environment";

const loginQuery = graphql`
  query LoginBoxQuery($username: String, $password: String) {
    authenticateUser(username: $username, password: $password)
  }
`;

const LoginBox = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = async (values) => {
    const loginRes = await fetchQuery(environment, loginQuery, {
      ...values,
    });

    if (loginRes && loginRes.authenticateUser) {
      setError(false);
      const dataFromToken = jwtDecode(loginRes.authenticateUser);
      const accountType = dataFromToken.accountType;

      window.localStorage.setItem("accessToken", loginRes.authenticateUser);

      window.localStorage.setItem("accountType", accountType);

      history.push("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(credentials);
        }}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
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
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className={cx(
              "shadow",
              "appearance-none",
              "border",
              "rounded",
              "w-full",
              "py-2",
              "px-3",
              "text-gray-700",
              "mb-3",
              "leading-tight",
              "focus:outline-none",
              "focus:shadow-outline"
            )}
            id="password"
            type="password"
            placeholder="********"
          />
          {error && (
            <p className="text-red-500 text-xs italic">
              Please enter valid credentials.
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            href="/signup"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Not a babe yet? Sign up.
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Babe Inc. All rights reserved.
      </p>
    </div>
  );
};

export default LoginBox;
