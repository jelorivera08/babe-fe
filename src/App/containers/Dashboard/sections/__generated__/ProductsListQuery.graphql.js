/**
 * @flow
 * @relayHash 160602e6995ce1ef5292cf73cbf6bc39
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductsListQueryVariables = {||};
export type ProductsListQueryResponse = {|
  +products: ?$ReadOnlyArray<?{|
    +name: ?string,
    +amount: ?number,
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
    amount
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
        "name": "amount",
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
    "text": "query ProductsListQuery {\n  products {\n    name\n    amount\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a1ba0626de47dc53e5009b1578f63f87';

module.exports = node;
