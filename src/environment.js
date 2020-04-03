import { Environment, Network, RecordSource, Store } from "relay-runtime";

export function fetchQuery(operation, variables) {
  const isLoggingIn = operation.text.includes("authenticateUser");
  return fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      isLoggingIn: isLoggingIn
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => response.json());
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;
