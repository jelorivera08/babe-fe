/**
 * @flow
 * @relayHash 66f856f7c7c6e3e9a8164a99b00a182d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UsersListDeleteMutationVariables = {|
  username: string
|};
export type UsersListDeleteMutationResponse = {|
  +deleteUser: ?{|
    +username: ?string
  |}
|};
export type UsersListDeleteMutation = {|
  variables: UsersListDeleteMutationVariables,
  response: UsersListDeleteMutationResponse,
|};
*/


/*
mutation UsersListDeleteMutation(
  $username: String!
) {
  deleteUser(username: $username) {
    username
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
  }
],
v1 = [
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UsersListDeleteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "userType",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UsersListDeleteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "userType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "name": "UsersListDeleteMutation",
    "id": null,
    "text": "mutation UsersListDeleteMutation(\n  $username: String!\n) {\n  deleteUser(username: $username) {\n    username\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c2e9fc2b128fef9c7530e92812ec8271';

module.exports = node;
