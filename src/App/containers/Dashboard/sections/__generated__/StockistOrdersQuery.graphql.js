/**
 * @flow
 * @relayHash 25035975f09b057bb10abbb50bb194ae
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StockistOrdersQueryVariables = {||};
export type StockistOrdersQueryResponse = {|
  +products: ?$ReadOnlyArray<?{|
    +name: ?string,
    +amount: ?number,
  |}>
|};
export type StockistOrdersQuery = {|
  variables: StockistOrdersQueryVariables,
  response: StockistOrdersQueryResponse,
|};
*/


/*
query StockistOrdersQuery {
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
    "name": "StockistOrdersQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "StockistOrdersQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "StockistOrdersQuery",
    "id": null,
    "text": "query StockistOrdersQuery {\n  products {\n    name\n    amount\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5985946af1c65636273f336c02e012a9';

module.exports = node;
