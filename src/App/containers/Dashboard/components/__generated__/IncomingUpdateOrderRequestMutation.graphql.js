/**
 * @flow
 * @relayHash 902a467461f1f44c2f93d9bbb69fbd04
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IncomingUpdateOrderRequestMutationVariables = {|
  orderedBy: string,
  status: string,
  dateOrdered: string,
|};
export type IncomingUpdateOrderRequestMutationResponse = {|
  +updateRequestOrder: ?{|
    +status: ?string,
    +orderedBy: ?string,
    +dateOrdered: ?string,
    +orders: ?$ReadOnlyArray<?{|
      +name: ?string,
      +amount: ?number,
      +quantity: ?number,
    |}>,
  |}
|};
export type IncomingUpdateOrderRequestMutation = {|
  variables: IncomingUpdateOrderRequestMutationVariables,
  response: IncomingUpdateOrderRequestMutationResponse,
|};
*/


/*
mutation IncomingUpdateOrderRequestMutation(
  $orderedBy: String!
  $status: String!
  $dateOrdered: String!
) {
  updateRequestOrder(orderedBy: $orderedBy, status: $status, dateOrdered: $dateOrdered) {
    status
    orderedBy
    dateOrdered
    orders {
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
    "name": "orderedBy",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "status",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "dateOrdered",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateRequestOrder",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "dateOrdered",
        "variableName": "dateOrdered"
      },
      {
        "kind": "Variable",
        "name": "orderedBy",
        "variableName": "orderedBy"
      },
      {
        "kind": "Variable",
        "name": "status",
        "variableName": "status"
      }
    ],
    "concreteType": "RequestOrderType",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "status",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "orderedBy",
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
    "name": "IncomingUpdateOrderRequestMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "IncomingUpdateOrderRequestMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "IncomingUpdateOrderRequestMutation",
    "id": null,
    "text": "mutation IncomingUpdateOrderRequestMutation(\n  $orderedBy: String!\n  $status: String!\n  $dateOrdered: String!\n) {\n  updateRequestOrder(orderedBy: $orderedBy, status: $status, dateOrdered: $dateOrdered) {\n    status\n    orderedBy\n    dateOrdered\n    orders {\n      name\n      amount\n      quantity\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '86e801415930994ef5326fa31b601b48';

module.exports = node;
