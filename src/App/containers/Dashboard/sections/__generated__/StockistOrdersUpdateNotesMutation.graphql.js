/**
 * @flow
 * @relayHash a6f2f6c52565cded8cabc3de4df56b49
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StockistOrdersUpdateNotesMutationVariables = {|
  dateOrdered: string,
  note: string,
  user: string,
|};
export type StockistOrdersUpdateNotesMutationResponse = {|
  +updateOrderNote: ?{|
    +notes: ?string
  |}
|};
export type StockistOrdersUpdateNotesMutation = {|
  variables: StockistOrdersUpdateNotesMutationVariables,
  response: StockistOrdersUpdateNotesMutationResponse,
|};
*/


/*
mutation StockistOrdersUpdateNotesMutation(
  $dateOrdered: String!
  $note: String!
  $user: String!
) {
  updateOrderNote(dateOrdered: $dateOrdered, note: $note, user: $user) {
    notes
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "dateOrdered",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "note",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "user",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateOrderNote",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "dateOrdered",
        "variableName": "dateOrdered"
      },
      {
        "kind": "Variable",
        "name": "note",
        "variableName": "note"
      },
      {
        "kind": "Variable",
        "name": "user",
        "variableName": "user"
      }
    ],
    "concreteType": "orderType",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "notes",
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
    "name": "StockistOrdersUpdateNotesMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "StockistOrdersUpdateNotesMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "StockistOrdersUpdateNotesMutation",
    "id": null,
    "text": "mutation StockistOrdersUpdateNotesMutation(\n  $dateOrdered: String!\n  $note: String!\n  $user: String!\n) {\n  updateOrderNote(dateOrdered: $dateOrdered, note: $note, user: $user) {\n    notes\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '126f95bfa5314b91cc75d5025507318c';

module.exports = node;
