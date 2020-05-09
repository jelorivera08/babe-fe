/**
 * @flow
 * @relayHash 8d250ffd71b2aab9bde6bb91bc6d4a34
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductsListDeleteMutationVariables = {|
  name: string
|};
export type ProductsListDeleteMutationResponse = {|
  +deleteProduct: ?{|
    +name: ?string
  |}
|};
export type ProductsListDeleteMutation = {|
  variables: ProductsListDeleteMutationVariables,
  response: ProductsListDeleteMutationResponse,
|};
*/


/*
mutation ProductsListDeleteMutation(
  $name: String!
) {
  deleteProduct(name: $name) {
    name
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
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteProduct",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProductsListDeleteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductsListDeleteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ProductsListDeleteMutation",
    "id": null,
    "text": "mutation ProductsListDeleteMutation(\n  $name: String!\n) {\n  deleteProduct(name: $name) {\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f1d17aab34c8718d96142075aa80f934';

module.exports = node;
