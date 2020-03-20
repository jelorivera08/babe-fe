/**
 * @flow
 * @relayHash f67850b52287256f6fb25900fa940206
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignupMutationVariables = {|
  username: string,
  password: string,
  firstName: string,
  surname: string,
  accountType: string,
  facebookURL: string,
  instagramURL: string,
|};
export type SignupMutationResponse = {|
  +userCreate: ?{|
    +username: ?string
  |}
|};
export type SignupMutation = {|
  variables: SignupMutationVariables,
  response: SignupMutationResponse,
|};
*/


/*
mutation SignupMutation(
  $username: String!
  $password: String!
  $firstName: String!
  $surname: String!
  $accountType: String!
  $facebookURL: String!
  $instagramURL: String!
) {
  userCreate(username: $username, password: $password, firstName: $firstName, surname: $surname, accountType: $accountType, facebookURL: $facebookURL, instagramURL: $instagramURL) {
    username
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "firstName",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "surname",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "accountType",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "facebookURL",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "instagramURL",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "accountType",
    "variableName": "accountType"
  },
  {
    "kind": "Variable",
    "name": "facebookURL",
    "variableName": "facebookURL"
  },
  {
    "kind": "Variable",
    "name": "firstName",
    "variableName": "firstName"
  },
  {
    "kind": "Variable",
    "name": "instagramURL",
    "variableName": "instagramURL"
  },
  {
    "kind": "Variable",
    "name": "password",
    "variableName": "password"
  },
  {
    "kind": "Variable",
    "name": "surname",
    "variableName": "surname"
  },
  {
    "kind": "Variable",
    "name": "username",
    "variableName": "username"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SignupMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userCreate",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UserRegistrationType",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SignupMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userCreate",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UserRegistrationType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "operationKind": "mutation",
    "name": "SignupMutation",
    "id": null,
    "text": "mutation SignupMutation(\n  $username: String!\n  $password: String!\n  $firstName: String!\n  $surname: String!\n  $accountType: String!\n  $facebookURL: String!\n  $instagramURL: String!\n) {\n  userCreate(username: $username, password: $password, firstName: $firstName, surname: $surname, accountType: $accountType, facebookURL: $facebookURL, instagramURL: $instagramURL) {\n    username\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c8cc905ac0c1af006ab0f581aa13f0f5';

module.exports = node;
