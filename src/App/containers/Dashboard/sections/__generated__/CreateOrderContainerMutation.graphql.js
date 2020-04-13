/**
 * @flow
 * @relayHash 0cf90ef54a5cc45d6ed41dc20aa3635e
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
export type CreateOrderContainerMutationVariables = {|
  user: string,
  productInput: $ReadOnlyArray<?productInputType>,
  dateOrdered: string,
  notes: string,
|};
export type CreateOrderContainerMutationResponse = {|
  +createOrder: ?$ReadOnlyArray<?{|
    +user: ?string,
    +notes: ?string,
    +dateOrdered: ?string,
    +products: ?$ReadOnlyArray<?{|
      +name: ?string,
      +amount: ?number,
      +quantity: ?number,
    |}>,
  |}>
|};
export type CreateOrderContainerMutation = {|
  variables: CreateOrderContainerMutationVariables,
  response: CreateOrderContainerMutationResponse,
|};
*/


/*
mutation CreateOrderContainerMutation(
  $user: String!
  $productInput: [productInputType]!
  $dateOrdered: String!
  $notes: String!
) {
  createOrder(user: $user, products: $productInput, dateOrdered: $dateOrdered, notes: $notes) {
    user
    notes
    dateOrdered
    products {
      name
      amount
      quantity
    }
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
    "name": "productInput",
    "type": "[productInputType]!",
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
    "name": "notes",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createOrder",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "dateOrdered",
        "variableName": "dateOrdered"
      },
      {
        "kind": "Variable",
        "name": "notes",
        "variableName": "notes"
      },
      {
        "kind": "Variable",
        "name": "products",
        "variableName": "productInput"
      },
      {
        "kind": "Variable",
        "name": "user",
        "variableName": "user"
      }
    ],
    "concreteType": "orderType",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "user",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "notes",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "dateOrdered",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "products",
        "storageKey": null,
        "args": null,
        "concreteType": "productType",
        "plural": true,
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
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateOrderContainerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateOrderContainerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateOrderContainerMutation",
    "id": null,
    "text": "mutation CreateOrderContainerMutation(\n  $user: String!\n  $productInput: [productInputType]!\n  $dateOrdered: String!\n  $notes: String!\n) {\n  createOrder(user: $user, products: $productInput, dateOrdered: $dateOrdered, notes: $notes) {\n    user\n    notes\n    dateOrdered\n    products {\n      name\n      amount\n      quantity\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dbffe021d825a423e2195fabfad889e1';

module.exports = node;
