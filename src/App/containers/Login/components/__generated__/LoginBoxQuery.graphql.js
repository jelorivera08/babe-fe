/**
 * @flow
 * @relayHash ff1927c3ee15fe640699a80cf3d9cd79
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
    +userType: ?string,
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
    userType
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
        "name": "userType",
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
    "text": "query LoginBoxQuery(\n  $username: String\n  $password: String\n) {\n  authenticateUser(username: $username, password: $password) {\n    _id\n    isAuthenticated\n    userType\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5e49c48750a94b5e3ac405da5f1bf090';

module.exports = node;
