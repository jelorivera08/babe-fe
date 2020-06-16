/**
 * @flow
 * @relayHash 764c10667621a906c4f0388aef06fecc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SubresellerDashboardHasStockUpdateMutationVariables = {|
  hasStockStatus: boolean
|};
export type SubresellerDashboardHasStockUpdateMutationResponse = {|
  +updateResellerStock: ?{|
    +username: ?string,
    +hasStock: ?boolean,
  |}
|};
export type SubresellerDashboardHasStockUpdateMutation = {|
  variables: SubresellerDashboardHasStockUpdateMutationVariables,
  response: SubresellerDashboardHasStockUpdateMutationResponse,
|};
*/


/*
mutation SubresellerDashboardHasStockUpdateMutation(
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
    "name": "SubresellerDashboardHasStockUpdateMutation",
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
    "name": "SubresellerDashboardHasStockUpdateMutation",
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
    "name": "SubresellerDashboardHasStockUpdateMutation",
    "id": null,
    "text": "mutation SubresellerDashboardHasStockUpdateMutation(\n  $hasStockStatus: Boolean!\n) {\n  updateResellerStock(hasStockStatus: $hasStockStatus) {\n    username\n    hasStock\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '124a5c6de562873f42435427c46714ac';

module.exports = node;
