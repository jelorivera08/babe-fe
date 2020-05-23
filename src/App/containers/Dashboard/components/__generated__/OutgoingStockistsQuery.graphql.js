/**
 * @flow
 * @relayHash a10111abb8d9ab4aacbc9ed78b55e6da
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
      (v1/*: any*/)
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
      (v1/*: any*/)
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "OutgoingStockistsQuery",
    "id": null,
    "text": "query OutgoingStockistsQuery {\n  requestOrderStockists {\n    username\n    id\n  }\n  products {\n    name\n    amount\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6b62359d46263a39e1ab44fed0eb9011';

module.exports = node;
