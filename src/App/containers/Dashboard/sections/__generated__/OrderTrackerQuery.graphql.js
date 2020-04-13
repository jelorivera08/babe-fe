/**
 * @flow
 * @relayHash 95f00d453162af1a510f927aea4de576
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
    +accountType: ?string,
    +username: ?string,
    +orders: ?$ReadOnlyArray<?{|
      +user: ?string,
      +notes: ?string,
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
    accountType
    username
    orders {
      user
      notes
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
  "name": "accountType",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v6 = {
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
          (v5/*: any*/),
          (v6/*: any*/)
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
          (v6/*: any*/),
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
    "text": "query OrderTrackerQuery(\n  $accountType: String!\n) {\n  stockists(accountType: $accountType) {\n    firstName\n    surname\n    accountType\n    username\n    orders {\n      user\n      notes\n      dateOrdered\n      products {\n        name\n        amount\n        quantity\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b50eaca9a57fc5fb9f0b7b81d315a2f4';

module.exports = node;
