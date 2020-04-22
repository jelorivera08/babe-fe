/**
 * @flow
 * @relayHash 8c7229d61a31329c67f02be16c00d206
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OrderTrackerQueryVariables = {|
  accountType: string,
  region?: ?string,
|};
export type OrderTrackerQueryResponse = {|
  +stockists: ?$ReadOnlyArray<?{|
    +firstName: ?string,
    +surname: ?string,
    +region: ?string,
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
  $region: String
) {
  stockists(accountType: $accountType, region: $region) {
    firstName
    surname
    region
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
  },
  {
    "kind": "LocalArgument",
    "name": "region",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "accountType",
    "variableName": "accountType"
  },
  {
    "kind": "Variable",
    "name": "region",
    "variableName": "region"
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
  "name": "region",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "accountType",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v7 = {
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
          (v6/*: any*/),
          (v7/*: any*/)
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
          (v7/*: any*/),
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
    "text": "query OrderTrackerQuery(\n  $accountType: String!\n  $region: String\n) {\n  stockists(accountType: $accountType, region: $region) {\n    firstName\n    surname\n    region\n    accountType\n    username\n    orders {\n      user\n      notes\n      dateOrdered\n      products {\n        name\n        amount\n        quantity\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '092e4188b455ff387375bd38f7382e68';

module.exports = node;
