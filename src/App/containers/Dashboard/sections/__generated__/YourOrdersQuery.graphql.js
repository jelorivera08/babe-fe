/**
 * @flow
 * @relayHash fc0d5db43706a85e6d33abab5ee2a74a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type YourOrdersQueryVariables = {|
  username?: ?string
|};
export type YourOrdersQueryResponse = {|
  +yourOrders: ?$ReadOnlyArray<?{|
    +dateOrdered: ?string,
    +products: ?$ReadOnlyArray<?{|
      +name: ?string,
      +quantity: ?number,
      +amount: ?number,
    |}>,
  |}>
|};
export type YourOrdersQuery = {|
  variables: YourOrdersQueryVariables,
  response: YourOrdersQueryResponse,
|};
*/


/*
query YourOrdersQuery(
  $username: String
) {
  yourOrders(username: $username) {
    dateOrdered
    products {
      name
      quantity
      amount
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "yourOrders",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "concreteType": "orderType",
    "plural": true,
    "selections": [
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
            "name": "quantity",
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "YourOrdersQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "YourOrdersQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "YourOrdersQuery",
    "id": null,
    "text": "query YourOrdersQuery(\n  $username: String\n) {\n  yourOrders(username: $username) {\n    dateOrdered\n    products {\n      name\n      quantity\n      amount\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec0d12f91a1b9312e2f0624ef68865d3';

module.exports = node;
