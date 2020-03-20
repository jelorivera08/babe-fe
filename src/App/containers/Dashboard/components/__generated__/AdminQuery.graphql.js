/**
 * @flow
 * @relayHash d78efa0aa22642d3766b9329c7a85367
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AdminQueryVariables = {||};
export type AdminQueryResponse = {|
  +users: ?$ReadOnlyArray<?{|
    +username: ?string,
    +firstName: ?string,
    +facebookURL: ?string,
    +instagramURL: ?string,
    +surname: ?string,
    +accountType: ?string,
    +status: ?string,
  |}>
|};
export type AdminQuery = {|
  variables: AdminQueryVariables,
  response: AdminQueryResponse,
|};
*/


/*
query AdminQuery {
  users {
    username
    firstName
    facebookURL
    instagramURL
    surname
    accountType
    status
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": null,
    "concreteType": "userType",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "username",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "firstName",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "facebookURL",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "instagramURL",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "surname",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "accountType",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "status",
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
    "name": "AdminQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AdminQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AdminQuery",
    "id": null,
    "text": "query AdminQuery {\n  users {\n    username\n    firstName\n    facebookURL\n    instagramURL\n    surname\n    accountType\n    status\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bfd36c28c4a6d5b8c48ea4bdab605e69';

module.exports = node;
