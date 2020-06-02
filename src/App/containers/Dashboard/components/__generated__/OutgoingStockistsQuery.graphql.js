/**
 * @flow
 * @relayHash 7ec10000d24eedc43638bf21b8a93ef5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OutgoingStockistsQueryVariables = {||};
export type OutgoingStockistsQueryResponse = {|
  +requestOrderStockists: ?$ReadOnlyArray<?{|
    +username: ?string
  |}>,
  +products: ?$ReadOnlyArray<?{|
    +name: ?string,
    +amount: ?number,
  |}>,
  +requestOrders: ?$ReadOnlyArray<?{|
    +dateOrdered: ?string,
    +stockist: ?string,
    +notes: ?string,
    +status: ?string,
    +orders: ?$ReadOnlyArray<?{|
      +name: ?string,
      +amount: ?number,
      +quantity: ?number,
    |}>,
  |}>,
|};
export type OutgoingStockistsQuery = {|
  variables: OutgoingStockistsQueryVariables,
  response: OutgoingStockistsQueryResponse,
|};
*/


/*
query OutgoingStockistsQuery {
  requestOrderStockists {
    username
    id
  }
  products {
    name
    amount
  }
  requestOrders {
    dateOrdered
    stockist
    notes
    status
    orders {
      name
      amount
      quantity
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "amount",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "products",
  "storageKey": null,
  "args": null,
  "concreteType": "productType",
  "plural": true,
  "selections": [
    (v1/*: any*/),
    (v2/*: any*/)
  ]
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "requestOrders",
  "storageKey": null,
  "args": null,
  "concreteType": "RequestOrderType",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "stockist",
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
      "name": "status",
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
        (v1/*: any*/),
        (v2/*: any*/),
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
    "name": "OutgoingStockistsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "requestOrderStockists",
        "storageKey": null,
        "args": null,
        "concreteType": "userType",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ]
      },
      (v3/*: any*/),
      (v4/*: any*/)
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OutgoingStockistsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "requestOrderStockists",
        "storageKey": null,
        "args": null,
        "concreteType": "userType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      },
      (v3/*: any*/),
      (v4/*: any*/)
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "OutgoingStockistsQuery",
    "id": null,
    "text": "query OutgoingStockistsQuery {\n  requestOrderStockists {\n    username\n    id\n  }\n  products {\n    name\n    amount\n  }\n  requestOrders {\n    dateOrdered\n    stockist\n    notes\n    status\n    orders {\n      name\n      amount\n      quantity\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b52fb51d5a9bdc0a6a15fc4900badc43';

module.exports = node;
