/**
 * @flow
 * @relayHash 4c2f4cfd9f66bc367fc1d2e7c496c22d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ResllerDirectoryQueryVariables = {||};
export type ResllerDirectoryQueryResponse = {|
  +activeResellers: ?$ReadOnlyArray<?{|
    +firstName: ?string,
    +facebookURL: ?string,
    +instagramURL: ?string,
    +surname: ?string,
    +description: ?string,
    +imageUrl: ?string,
    +hasStock: ?boolean,
  |}>
|};
export type ResllerDirectoryQuery = {|
  variables: ResllerDirectoryQueryVariables,
  response: ResllerDirectoryQueryResponse,
|};
*/


/*
query ResllerDirectoryQuery {
  activeResellers {
    firstName
    facebookURL
    instagramURL
    surname
    description
    imageUrl
    hasStock
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "facebookURL",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "instagramURL",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "surname",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "imageUrl",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hasStock",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ResllerDirectoryQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "activeResellers",
        "storageKey": null,
        "args": null,
        "concreteType": "userType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ResllerDirectoryQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "activeResellers",
        "storageKey": null,
        "args": null,
        "concreteType": "userType",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ResllerDirectoryQuery",
    "id": null,
    "text": "query ResllerDirectoryQuery {\n  activeResellers {\n    firstName\n    facebookURL\n    instagramURL\n    surname\n    description\n    imageUrl\n    hasStock\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '45d058f538db926d1da81d723b1d5b17';

module.exports = node;
