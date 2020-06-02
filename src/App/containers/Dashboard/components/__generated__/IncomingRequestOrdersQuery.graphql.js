/**
 * @flow
 * @relayHash 1d884cd884a93c9314eb241fbec489eb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IncomingRequestOrdersQueryVariables = {||};
export type IncomingRequestOrdersQueryResponse = {|
  +incomingRequestOrders: ?$ReadOnlyArray<?{|
    +orderedBy: ?string,
    +status: ?string,
    +dateOrdered: ?string,
    +orders: ?$ReadOnlyArray<?{|
      +name: ?string,
      +amount: ?number,
      +quantity: ?number,
    |}>,
  |}>
|};
export type IncomingRequestOrdersQuery = {|
  variables: IncomingRequestOrdersQueryVariables,
  response: IncomingRequestOrdersQueryResponse,
|};
*/


/*
query IncomingRequestOrdersQuery {
  incomingRequestOrders {
    orderedBy
    status
    dateOrdered
    orders {
      name
      amount
      quantity
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "incomingRequestOrders",
    "storageKey": null,
    "args": null,
    "concreteType": "RequestOrderType",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "orderedBy",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "status",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "dateOrdered",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "orders",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "quantity",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "IncomingRequestOrdersQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "IncomingRequestOrdersQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "IncomingRequestOrdersQuery",
    "id": null,
    "text": "query IncomingRequestOrdersQuery {\n  incomingRequestOrders {\n    orderedBy\n    status\n    dateOrdered\n    orders {\n      name\n      amount\n      quantity\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b1867ef393224a15ad8aa06a413006ca';

module.exports = node;
