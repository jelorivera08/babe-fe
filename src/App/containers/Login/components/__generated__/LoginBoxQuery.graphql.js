/**
 * @flow
 * @relayHash 2c9a3f8e13838aa8f899894d9e26a1bd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginBoxQueryVariables = {|
  username?: ?string,
  password?: ?string,
|};
export type LoginBoxQueryResponse = {|
  +authenticateUser: ?string
|};
export type LoginBoxQuery = {|
  variables: LoginBoxQueryVariables,
  response: LoginBoxQueryResponse,
|};
*/


/*
query LoginBoxQuery(
  $username: String
  $password: String
) {
  authenticateUser(username: $username, password: $password)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "authenticateUser",
    "args": [
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      },
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LoginBoxQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginBoxQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "LoginBoxQuery",
    "id": null,
    "text": "query LoginBoxQuery(\n  $username: String\n  $password: String\n) {\n  authenticateUser(username: $username, password: $password)\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4da4f33bdb81178f8215bf1689e8a2bb';

module.exports = node;
