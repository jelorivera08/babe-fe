/**
 * @flow
 * @relayHash 63a5e571f5249ad948b9d0f9b1718534
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ResellerDashboardHasStockUpdateMutationVariables = {|
  hasStockStatus: boolean
|};
export type ResellerDashboardHasStockUpdateMutationResponse = {|
  +updateResellerStock: ?{|
    +username: ?string,
    +hasStock: ?boolean,
  |}
|};
export type ResellerDashboardHasStockUpdateMutation = {|
  variables: ResellerDashboardHasStockUpdateMutationVariables,
  response: ResellerDashboardHasStockUpdateMutationResponse,
|};
*/


/*
mutation ResellerDashboardHasStockUpdateMutation(
  $hasStockStatus: Boolean!
) {
  updateResellerStock(hasStockStatus: $hasStockStatus) {
    username
    hasStock
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "hasStockStatus",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "hasStockStatus",
    "variableName": "hasStockStatus"
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
  "name": "hasStock",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ResellerDashboardHasStockUpdateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateResellerStock",
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
    "name": "ResellerDashboardHasStockUpdateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateResellerStock",
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
    "name": "ResellerDashboardHasStockUpdateMutation",
    "id": null,
    "text": "mutation ResellerDashboardHasStockUpdateMutation(\n  $hasStockStatus: Boolean!\n) {\n  updateResellerStock(hasStockStatus: $hasStockStatus) {\n    username\n    hasStock\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '861c8a09163f071f4292e145e36d66ad';

module.exports = node;
