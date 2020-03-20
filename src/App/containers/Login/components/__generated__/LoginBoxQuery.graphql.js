/**
 * @flow
 * @relayHash eb9bf1c0d8d45f430317a8462f682a54
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
  +authenticateUser: ?{|
    +id: ?string,
    +isAuthenticated: ?string,
    +accountType: ?string,
  |}
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
  authenticateUser(username: $username, password: $password) {
    id
    isAuthenticated
    accountType
  }
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
    "kind": "LinkedField",
    "alias": null,
    "name": "authenticateUser",
    "storageKey": null,
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
    "concreteType": "UserAuthenticated",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "isAuthenticated",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "accountType",
        "args": null,
        "storageKey": null
      }
    ]
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
    "text": "query LoginBoxQuery(\n  $username: String\n  $password: String\n) {\n  authenticateUser(username: $username, password: $password) {\n    id\n    isAuthenticated\n    accountType\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd502fcb3bacc9add1862a0ec82ac91aa';

module.exports = node;
