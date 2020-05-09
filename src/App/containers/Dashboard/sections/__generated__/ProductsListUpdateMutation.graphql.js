/**
 * @flow
 * @relayHash af779f53b6db79a0b374444c6dc0a67b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductsListUpdateMutationVariables = {|
  name: string,
  regionalAmount: number,
  resellerAmount: number,
  provincialAmount: number,
|};
export type ProductsListUpdateMutationResponse = {|
  +updateProduct: ?{|
    +name: ?string,
    +regionalAmount: ?number,
    +resellerAmount: ?number,
    +provincialAmount: ?number,
  |}
|};
export type ProductsListUpdateMutation = {|
  variables: ProductsListUpdateMutationVariables,
  response: ProductsListUpdateMutationResponse,
|};
*/


/*
mutation ProductsListUpdateMutation(
  $name: String!
  $regionalAmount: Int!
  $resellerAmount: Int!
  $provincialAmount: Int!
) {
  updateProduct(name: $name, regionalAmount: $regionalAmount, resellerAmount: $resellerAmount, provincialAmount: $provincialAmount) {
    name
    regionalAmount
    resellerAmount
    provincialAmount
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
    "name": "resellerAmount",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "provincialAmount",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateProduct",
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
    "plural": false,
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
        "name": "resellerAmount",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "provincialAmount",
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
    "name": "ProductsListUpdateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductsListUpdateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProductsListUpdateMutation",
    "id": null,
    "text": "mutation ProductsListUpdateMutation(\n  $name: String!\n  $regionalAmount: Int!\n  $resellerAmount: Int!\n  $provincialAmount: Int!\n) {\n  updateProduct(name: $name, regionalAmount: $regionalAmount, resellerAmount: $resellerAmount, provincialAmount: $provincialAmount) {\n    name\n    regionalAmount\n    resellerAmount\n    provincialAmount\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4d543c981796c851c7eab5fd54e3def5';

module.exports = node;
