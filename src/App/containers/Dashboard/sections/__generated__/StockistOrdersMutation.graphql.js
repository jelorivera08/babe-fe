/**
 * @flow
 * @relayHash f84dd0a421b48bfdd41ddacbd4b6e8f9
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
export type StockistOrdersMutationVariables = {|
  user: string,
  dateOrdered: string,
  productInput: productInputType,
|};
export type StockistOrdersMutationResponse = {|
  +addOrder: ?{|
    +name: ?string,
    +amount: ?number,
    +quantity: ?number,
  |}
|};
export type StockistOrdersMutation = {|
  variables: StockistOrdersMutationVariables,
  response: StockistOrdersMutationResponse,
|};
*/


/*
mutation StockistOrdersMutation(
  $user: String!
  $dateOrdered: String!
  $productInput: productInputType!
) {
  addOrder(user: $user, dateOrdered: $dateOrdered, product: $productInput) {
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
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addOrder",
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
    "name": "StockistOrdersMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "StockistOrdersMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "StockistOrdersMutation",
    "id": null,
    "text": "mutation StockistOrdersMutation(\n  $user: String!\n  $dateOrdered: String!\n  $productInput: productInputType!\n) {\n  addOrder(user: $user, dateOrdered: $dateOrdered, product: $productInput) {\n    name\n    amount\n    quantity\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'df2178071db1e99d55e7e3ce11d0fbf2';

module.exports = node;
