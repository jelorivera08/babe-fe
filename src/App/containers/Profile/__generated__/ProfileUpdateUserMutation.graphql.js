/**
 * @flow
 * @relayHash 59951aa04ff9f92de645dc6c1c3c557a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProfileUpdateUserMutationVariables = {|
  username: string,
  firstName?: ?string,
  surname?: ?string,
  accountType?: ?string,
  facebookURL?: ?string,
  instagramURL?: ?string,
  areaOfDistribution?: ?string,
  address?: ?string,
  region?: ?string,
|};
export type ProfileUpdateUserMutationResponse = {|
  +updateUser: ?{|
    +firstName: ?string,
    +surname: ?string,
    +accountType: ?string,
    +imageUrl: ?string,
    +facebookURL: ?string,
    +instagramURL: ?string,
    +address: ?string,
    +areaOfDistribution: ?string,
    +region: ?string,
  |}
|};
export type ProfileUpdateUserMutation = {|
  variables: ProfileUpdateUserMutationVariables,
  response: ProfileUpdateUserMutationResponse,
|};
*/


/*
mutation ProfileUpdateUserMutation(
  $username: String!
  $firstName: String
  $surname: String
  $accountType: String
  $facebookURL: String
  $instagramURL: String
  $areaOfDistribution: String
  $address: String
  $region: String
) {
  updateUser(username: $username, firstName: $firstName, surname: $surname, accountType: $accountType, facebookURL: $facebookURL, instagramURL: $instagramURL, address: $address, areaOfDistribution: $areaOfDistribution, region: $region) {
    firstName
    surname
    accountType
    imageUrl
    facebookURL
    instagramURL
    address
    areaOfDistribution
    region
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
    "name": "firstName",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "surname",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "accountType",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "facebookURL",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "instagramURL",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "areaOfDistribution",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "address",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "region",
    "type": "String",
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
    "name": "address",
    "variableName": "address"
  },
  {
    "kind": "Variable",
    "name": "areaOfDistribution",
    "variableName": "areaOfDistribution"
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
    "name": "region",
    "variableName": "region"
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
  "name": "firstName",
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
  "name": "accountType",
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
  "name": "facebookURL",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "instagramURL",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "address",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "areaOfDistribution",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "region",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProfileUpdateUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "userType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProfileUpdateUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "userType",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
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
    "name": "ProfileUpdateUserMutation",
    "id": null,
    "text": "mutation ProfileUpdateUserMutation(\n  $username: String!\n  $firstName: String\n  $surname: String\n  $accountType: String\n  $facebookURL: String\n  $instagramURL: String\n  $areaOfDistribution: String\n  $address: String\n  $region: String\n) {\n  updateUser(username: $username, firstName: $firstName, surname: $surname, accountType: $accountType, facebookURL: $facebookURL, instagramURL: $instagramURL, address: $address, areaOfDistribution: $areaOfDistribution, region: $region) {\n    firstName\n    surname\n    accountType\n    imageUrl\n    facebookURL\n    instagramURL\n    address\n    areaOfDistribution\n    region\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fca15f8bcd9d84c2cc9ee8281097f1b5';

module.exports = node;
