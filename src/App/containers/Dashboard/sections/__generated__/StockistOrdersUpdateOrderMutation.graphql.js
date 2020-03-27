/**
 * @flow
 * @relayHash 91f2f2804353d0cfc0d8a5845af7306c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type productInputType = {|
  name?: ?string,
  amount?: ?number,
  quantity?: ?number,
|};
export type StockistOrdersUpdateOrderMutationVariables = {|
  user: string,
  dateOrdered: string,
  productInput: productInputType,
  productIndex: number,
|};
export type StockistOrdersUpdateOrderMutationResponse = {|
  +updateOrder: ?{|
    +name: ?string,
    +amount: ?number,
    +quantity: ?number,
  |}
|};
export type StockistOrdersUpdateOrderMutation = {|
  variables: StockistOrdersUpdateOrderMutationVariables,
  response: StockistOrdersUpdateOrderMutationResponse,
|};
*/


/*
mutation StockistOrdersUpdateOrderMutation(
  $user: String!
  $dateOrdered: String!
  $productInput: productInputType!
  $productIndex: Int!
) {
  updateOrder(user: $user, dateOrdered: $dateOrdered, product: $productInput, productIndex: $productIndex) {
    name
    amount
    quantity
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "user",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "dateOrdered",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "productInput",
    "type": "productInputType!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "productIndex",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateOrder",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "dateOrdered",
        "variableName": "dateOrdered"
      },
      {
        "kind": "Variable",
        "name": "product",
        "variableName": "productInput"
      },
      {
        "kind": "Variable",
        "name": "productIndex",
        "variableName": "productIndex"
      },
      {
        "kind": "Variable",
        "name": "user",
        "variableName": "user"
      }
    ],
    "concreteType": "productType",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "amount",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "quantity",
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
    "name": "StockistOrdersUpdateOrderMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "StockistOrdersUpdateOrderMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "StockistOrdersUpdateOrderMutation",
    "id": null,
    "text": "mutation StockistOrdersUpdateOrderMutation(\n  $user: String!\n  $dateOrdered: String!\n  $productInput: productInputType!\n  $productIndex: Int!\n) {\n  updateOrder(user: $user, dateOrdered: $dateOrdered, product: $productInput, productIndex: $productIndex) {\n    name\n    amount\n    quantity\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1f7380a3d7b46acbc8193e2fec6260ac';

module.exports = node;
