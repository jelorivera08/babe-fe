/**
 * @flow
 * @relayHash 763e655522c9890f4ac7d6d1da98c055
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RequestOrderInputType = {|
  name?: ?string,
  amount?: ?number,
  quantity?: ?number,
|};
export type OutgoingAddRequestOrderMutationVariables = {|
  orders: $ReadOnlyArray<?RequestOrderInputType>,
  dateOrdered: string,
  notes: string,
  stockist: string,
|};
export type OutgoingAddRequestOrderMutationResponse = {|
  +addRequestOrder: ?{|
    +notes: ?string,
    +dateOrdered: ?string,
    +orders: ?$ReadOnlyArray<?{|
      +name: ?string,
      +amount: ?number,
    |}>,
    +stockist: ?string,
  |}
|};
export type OutgoingAddRequestOrderMutation = {|
  variables: OutgoingAddRequestOrderMutationVariables,
  response: OutgoingAddRequestOrderMutationResponse,
|};
*/


/*
mutation OutgoingAddRequestOrderMutation(
  $orders: [RequestOrderInputType]!
  $dateOrdered: String!
  $notes: String!
  $stockist: String!
) {
  addRequestOrder(stockist: $stockist, orders: $orders, dateOrdered: $dateOrdered, notes: $notes) {
    notes
    dateOrdered
    orders {
      name
      amount
    }
    stockist
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "orders",
    "type": "[RequestOrderInputType]!",
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
  },
  {
    "kind": "LocalArgument",
    "name": "stockist",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addRequestOrder",
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
        "name": "orders",
        "variableName": "orders"
      },
      {
        "kind": "Variable",
        "name": "stockist",
        "variableName": "stockist"
      }
    ],
    "concreteType": "RequestOrderType",
    "plural": false,
    "selections": [
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
        "name": "orders",
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
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "stockist",
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
    "name": "OutgoingAddRequestOrderMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "OutgoingAddRequestOrderMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "OutgoingAddRequestOrderMutation",
    "id": null,
    "text": "mutation OutgoingAddRequestOrderMutation(\n  $orders: [RequestOrderInputType]!\n  $dateOrdered: String!\n  $notes: String!\n  $stockist: String!\n) {\n  addRequestOrder(stockist: $stockist, orders: $orders, dateOrdered: $dateOrdered, notes: $notes) {\n    notes\n    dateOrdered\n    orders {\n      name\n      amount\n    }\n    stockist\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cf777eb72ca389b763060d0f604b28cc';

module.exports = node;
