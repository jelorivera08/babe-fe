/**
 * @flow
 * @relayHash 433bd830ff8f1cc9915a9dd8a94a380f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductsListQueryVariables = {||};
export type ProductsListQueryResponse = {|
  +products: ?$ReadOnlyArray<?{|
    +name: ?string,
    +regionalAmount: ?number,
    +provincialAmount: ?number,
    +resellerAmount: ?number,
  |}>
|};
export type ProductsListQuery = {|
  variables: ProductsListQueryVariables,
  response: ProductsListQueryResponse,
|};
*/


/*
query ProductsListQuery {
  products {
    name
    regionalAmount
    provincialAmount
    resellerAmount
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
        "name": "regionalAmount",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "provincialAmount",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "resellerAmount",
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
    "name": "ProductsListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductsListQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ProductsListQuery",
    "id": null,
    "text": "query ProductsListQuery {\n  products {\n    name\n    regionalAmount\n    provincialAmount\n    resellerAmount\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '52e7ffb2200c7edafe51f26bb21b104a';

module.exports = node;
