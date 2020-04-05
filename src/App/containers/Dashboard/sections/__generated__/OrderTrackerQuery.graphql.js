/**
 * @flow
 * @relayHash bb02f2dbe68aa5570228d937036da0ab
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OrderTrackerQueryVariables = {|
  accountType: string
|};
export type OrderTrackerQueryResponse = {|
  +stockists: ?$ReadOnlyArray<?{|
    +firstName: ?string,
    +surname: ?string,
    +username: ?string,
    +orders: ?$ReadOnlyArray<?{|
      +user: ?string,
      +dateOrdered: ?string,
      +products: ?$ReadOnlyArray<?{|
        +name: ?string,
        +amount: ?number,
        +quantity: ?number,
      |}>,
    |}>,
  |}>
|};
export type OrderTrackerQuery = {|
  variables: OrderTrackerQueryVariables,
  response: OrderTrackerQueryResponse,
|};
*/


/*
query OrderTrackerQuery(
  $accountType: String!
) {
  stockists(accountType: $accountType) {
    firstName
    surname
    username
    orders {
      user
      dateOrdered
      products {
        name
        amount
        quantity
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "accountType",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "accountType",
    "variableName": "accountType"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "surname",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "orders",
  "storageKey": null,
  "args": null,
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OrderTrackerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "stockists",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "userType",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OrderTrackerQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "stockists",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "userType",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
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
    "name": "OrderTrackerQuery",
    "id": null,
    "text": "query OrderTrackerQuery(\n  $accountType: String!\n) {\n  stockists(accountType: $accountType) {\n    firstName\n    surname\n    username\n    orders {\n      user\n      dateOrdered\n      products {\n        name\n        amount\n        quantity\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4544c76e5b9549b9a66163721c6223c2';

module.exports = node;
