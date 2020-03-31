/**
 * @flow
 * @relayHash fa084a35b0dbfdbfab400138810a09b9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateOrderContainerQueryVariables = {||};
export type CreateOrderContainerQueryResponse = {|
  +products: ?$ReadOnlyArray<?{|
    +name: ?string,
    +amount: ?number,
  |}>
|};
export type CreateOrderContainerQuery = {|
  variables: CreateOrderContainerQueryVariables,
  response: CreateOrderContainerQueryResponse,
|};
*/


/*
query CreateOrderContainerQuery {
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
    "name": "CreateOrderContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateOrderContainerQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CreateOrderContainerQuery",
    "id": null,
    "text": "query CreateOrderContainerQuery {\n  products {\n    name\n    amount\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bec649ca9e3316d56c95e743e793ed5f';

module.exports = node;
