/**
 * @flow
 * @relayHash f0a2efad9f2bfe69a0dee51fc4417e11
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ResellerDashboardUserInfoQueryVariables = {||};
export type ResellerDashboardUserInfoQueryResponse = {|
  +userInfo: ?{|
    +hasStock: ?boolean
  |}
|};
export type ResellerDashboardUserInfoQuery = {|
  variables: ResellerDashboardUserInfoQueryVariables,
  response: ResellerDashboardUserInfoQueryResponse,
|};
*/


/*
query ResellerDashboardUserInfoQuery {
  userInfo {
    hasStock
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hasStock",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ResellerDashboardUserInfoQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userInfo",
        "storageKey": null,
        "args": null,
        "concreteType": "userType",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ResellerDashboardUserInfoQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userInfo",
        "storageKey": null,
        "args": null,
        "concreteType": "userType",
        "plural": false,
        "selections": [
          (v0/*: any*/),
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
    "operationKind": "query",
    "name": "ResellerDashboardUserInfoQuery",
    "id": null,
    "text": "query ResellerDashboardUserInfoQuery {\n  userInfo {\n    hasStock\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f62959944a44aa3e05f6be621637e4c8';

module.exports = node;
