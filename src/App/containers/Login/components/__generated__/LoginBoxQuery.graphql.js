/**
 * @flow
 * @relayHash d670b453ec6400092ddd3c4e789aef81
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
    +_id: ?string,
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
    _id
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
        "name": "_id",
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
    "text": "query LoginBoxQuery(\n  $username: String\n  $password: String\n) {\n  authenticateUser(username: $username, password: $password) {\n    _id\n    isAuthenticated\n    accountType\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2a788208cd9e72bfbb9cb1cb8140cbcc';

module.exports = node;
