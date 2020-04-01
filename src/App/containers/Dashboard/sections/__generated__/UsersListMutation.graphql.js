/**
 * @flow
 * @relayHash 2e39905f2def8f4268f73809d2fbf50d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UsersListMutationVariables = {|
  username: string,
  status: string,
|};
export type UsersListMutationResponse = {|
  +changeUserStatus: ?{|
    +username: ?string,
    +status: ?string,
  |}
|};
export type UsersListMutation = {|
  variables: UsersListMutationVariables,
  response: UsersListMutationResponse,
|};
*/


/*
mutation UsersListMutation(
  $username: String!
  $status: String!
) {
  changeUserStatus(username: $username, status: $status) {
    username
    status
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "status",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "status",
    "variableName": "status"
  },
  {
    "kind": "Variable",
    "name": "username",
    "variableName": "username"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UsersListMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "changeUserStatus",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "userType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UsersListMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "changeUserStatus",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "userType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UsersListMutation",
    "id": null,
    "text": "mutation UsersListMutation(\n  $username: String!\n  $status: String!\n) {\n  changeUserStatus(username: $username, status: $status) {\n    username\n    status\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd21971c2aac066e8b997beb2c4b43c98';

module.exports = node;
