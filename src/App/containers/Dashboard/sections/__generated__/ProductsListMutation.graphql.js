/**
 * @flow
 * @relayHash b6e075d459f65012b0a885ee2bf5088b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductsListMutationVariables = {|
  name: string,
  regionalAmount: number,
  provincialAmount: number,
  resellerAmount: number,
|};
export type ProductsListMutationResponse = {|
  +createProduct: ?$ReadOnlyArray<?{|
    +name: ?string,
    +regionalAmount: ?number,
    +provincialAmount: ?number,
    +resellerAmount: ?number,
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
  $regionalAmount: Int!
  $provincialAmount: Int!
  $resellerAmount: Int!
) {
  createProduct(name: $name, regionalAmount: $regionalAmount, provincialAmount: $provincialAmount, resellerAmount: $resellerAmount) {
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
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "regionalAmount",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "provincialAmount",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "resellerAmount",
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
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "provincialAmount",
        "variableName": "provincialAmount"
      },
      {
        "kind": "Variable",
        "name": "regionalAmount",
        "variableName": "regionalAmount"
      },
      {
        "kind": "Variable",
        "name": "resellerAmount",
        "variableName": "resellerAmount"
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
    "text": "mutation ProductsListMutation(\n  $name: String!\n  $regionalAmount: Int!\n  $provincialAmount: Int!\n  $resellerAmount: Int!\n) {\n  createProduct(name: $name, regionalAmount: $regionalAmount, provincialAmount: $provincialAmount, resellerAmount: $resellerAmount) {\n    name\n    regionalAmount\n    provincialAmount\n    resellerAmount\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8fb5e219b7311275949b6088a646a9cb';

module.exports = node;
