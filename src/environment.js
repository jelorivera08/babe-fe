import { Environment, Network, RecordSource, Store } from "relay-runtime";

import { history } from "./App/App";

export function fetchQuery(operation, variables) {
  const noAuthNeeded =
    operation.text.includes("authenticateUser") ||
    operation.text.includes("userCreate") ||
    operation.text.includes("activeResellers");

  return fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: window.localStorage.getItem("accessToken"),
      noAuthNeeded,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(async (response) => {
    const jsonResponse = await response.json();

    if (jsonResponse.invalidToken) {
      history.push("/");
    }

    return jsonResponse;
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
