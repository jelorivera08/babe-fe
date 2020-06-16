/**
 * @flow
 * @relayHash fbfbb928c3c565502af38062fddeba9e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SubresellerDashboardUserInfoQueryVariables = {||};
export type SubresellerDashboardUserInfoQueryResponse = {|
  +userInfo: ?{|
    +hasStock: ?boolean
  |}
|};
export type SubresellerDashboardUserInfoQuery = {|
  variables: SubresellerDashboardUserInfoQueryVariables,
  response: SubresellerDashboardUserInfoQueryResponse,
|};
*/


/*
query SubresellerDashboardUserInfoQuery {
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
    "name": "SubresellerDashboardUserInfoQuery",
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
    "name": "SubresellerDashboardUserInfoQuery",
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
    "name": "SubresellerDashboardUserInfoQuery",
    "id": null,
    "text": "query SubresellerDashboardUserInfoQuery {\n  userInfo {\n    hasStock\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4cbe0e5f974d16b3fe200a59aea51791';

module.exports = node;
