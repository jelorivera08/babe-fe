/**
 * @flow
 * @relayHash cb1c38f7bbabdb9b4eb7ff29dcabb556
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PendingRegistrationsMutationVariables = {|
  username: string,
  status: string,
|};
export type PendingRegistrationsMutationResponse = {|
  +changeUserStatus: ?{|
    +username: ?string,
    +status: ?string,
  |}
|};
export type PendingRegistrationsMutation = {|
  variables: PendingRegistrationsMutationVariables,
  response: PendingRegistrationsMutationResponse,
|};
*/


/*
mutation PendingRegistrationsMutation(
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
    "name": "PendingRegistrationsMutation",
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
    "name": "PendingRegistrationsMutation",
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
    "name": "PendingRegistrationsMutation",
    "id": null,
    "text": "mutation PendingRegistrationsMutation(\n  $username: String!\n  $status: String!\n) {\n  changeUserStatus(username: $username, status: $status) {\n    username\n    status\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f08dbf67482237299ad9e3709924940c';

module.exports = node;
