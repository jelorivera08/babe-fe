/**
 * @flow
 * @relayHash 17c5a2533f837794ed1351fe19c13007
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductsListMutationVariables = {|
  name: string,
  amount: number,
|};
export type ProductsListMutationResponse = {|
  +createProduct: ?$ReadOnlyArray<?{|
    +name: ?string,
    +amount: ?number,
  |}>
|};
export type ProductsListMutation = {|
  variables: ProductsListMutationVariables,
  response: ProductsListMutationResponse,
|};
*/


/*
mutation ProductsListMutation(
  $name: String!
  $amount: Int!
) {
  createProduct(name: $name, amount: $amount) {
    name
    amount
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "amount",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createProduct",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "amount",
        "variableName": "amount"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
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
    "name": "ProductsListMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductsListMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProductsListMutation",
    "id": null,
    "text": "mutation ProductsListMutation(\n  $name: String!\n  $amount: Int!\n) {\n  createProduct(name: $name, amount: $amount) {\n    name\n    amount\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c1b960db53b7a4b7e421ada3daa50f87';

module.exports = node;
