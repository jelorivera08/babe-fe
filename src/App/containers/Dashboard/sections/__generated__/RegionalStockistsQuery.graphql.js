/**
 * @flow
 * @relayHash 1750540fd2b412713a60c211f1aa593c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RegionalStockistsQueryVariables = {||};
export type RegionalStockistsQueryResponse = {|
  +regionalStockists: ?$ReadOnlyArray<?{|
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
export type RegionalStockistsQuery = {|
  variables: RegionalStockistsQueryVariables,
  response: RegionalStockistsQueryResponse,
|};
*/


/*
query RegionalStockistsQuery {
  regionalStockists {
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "surname",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v3 = {
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
    "name": "RegionalStockistsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "regionalStockists",
        "storageKey": null,
        "args": null,
        "concreteType": "userType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RegionalStockistsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "regionalStockists",
        "storageKey": null,
        "args": null,
        "concreteType": "userType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
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
    "operationKind": "query",
    "name": "RegionalStockistsQuery",
    "id": null,
    "text": "query RegionalStockistsQuery {\n  regionalStockists {\n    firstName\n    surname\n    username\n    orders {\n      user\n      dateOrdered\n      products {\n        name\n        amount\n        quantity\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ca0b3c25d1fd1319c49059326f163d1b';

module.exports = node;
