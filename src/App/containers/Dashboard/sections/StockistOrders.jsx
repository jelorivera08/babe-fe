/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import dayjs from 'dayjs';
import { commitMutation } from 'react-relay';
import { graphql, preloadQuery, usePreloadedQuery } from 'react-relay/hooks';

import { Select, Button } from 'semantic-ui-react';


import AppEnvironment from '../../../../environment';


const query = graphql`
  query StockistOrdersQuery {
    products {
      name
      amount
    }
  }
`;

const mutation = graphql`
  mutation StockistOrdersMutation(
    $user: String!
    $dateOrdered: String!
    $productInput : productInputType!
  ) {
    addOrder(
      user: $user
      dateOrdered: $dateOrdered
      product : $productInput
    ) {
      name
      amount
      quantity
    }
  }
`;

// Note: call in an event-handler or similar, not during render
const result = preloadQuery(
  AppEnvironment,
  query,
);

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}


const StockistOrders = ({ orders, user }) => {
  const [additionalOrder, setAdditionalOrder] = useState({
    name: '', quantity: '', amount: 0, editIndex: 0, currentOrder: '',
  });

  const addOrder = (values) => {
    const variables = {
      user: values.user,
      dateOrdered: values.dateOrdered,
      productInput: values.productInput,
    };


    commitMutation(
      AppEnvironment,
      {
        mutation,
        variables,
        updater: (store) => {
          const payload = store.getRootField('addOrder');
          const root = store.getRoot();
          const regionalStockistsProxy = root.getLinkedRecords('regionalStockists');
          const regionalStockistProxy = regionalStockistsProxy.find((val) => val.getValue('username') === values.user);


          const ordersProxy = regionalStockistProxy.getLinkedRecords('orders');
          const orderProxy = ordersProxy.find((val) => val.getValue('dateOrdered') === values.dateOrdered);

          const productsProxy = orderProxy.getLinkedRecords('products');


          orderProxy.setLinkedRecords([...productsProxy, payload], 'products');
        },
        onError: (err) => console.error(err),
      },
    );
  };


  const { products } = usePreloadedQuery(query, result);


  const inputEl = useRef();

  useEffect(() => {
    inputEl && inputEl.current && inputEl.current.focus();
  }, [additionalOrder.editIndex]);

  return (
    <div>
      {
        orders.map((order) => {
          const formattedDateOrdered = dayjs(order.dateOrdered).format('MMMM DD, YYYY');
          let totalAmount = 0;

          return (
            <div
              key={order.dateOrdered}
              className="mb-8 w-full border bg-gray-200 border-gray-400 border-solid rounded p-4"
            >
              <div className="flex justify-between">
                <div className="flex">
                  <div>Order Date:</div>
                  <div className="ml-2">{formattedDateOrdered}</div>
                </div>

                <div className="w-1/2 flex justify-center">
                  <table className="table-auto">
                    <thead>
                      <tr>
                        <th className="border border-black  px-4 py-2">Product</th>
                        <th className="border border-black px-4 py-2">Quantity</th>
                        <th className="border border-black px-4 py-2">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.products.map((product) => {
                        totalAmount += product.amount * product.quantity;

                        return (
                          <tr key={product.name}>
                            <td className="border border-black px-4 py-2 text-center">{product.name}</td>
                            <td className="border border-black px-4 py-2 text-center">{product.quantity}</td>
                            <td className="border border-black px-4 py-2 text-center">

                              {`₱ ${formatNumber((product.amount * product.quantity).toFixed(2))}`}
                            </td>
                          </tr>
                        );
                      })}
                      {
                        (
                          additionalOrder.editIndex
                          && order.dateOrdered === additionalOrder.currentOrder
                        ) ? (
                          <tr>
                            <td className="border border-black px-4 py-2 text-center">
                              {
                                additionalOrder.editIndex
                                  ? (
                                    <Select
                                      placeholder="Select Product"
                                      options={products.map((product) => {
                                        if (order.products.find(
                                          (orderProduct) => orderProduct.name === product.name,
                                        )
                                        ) {
                                          return null;
                                        }


                                        return {
                                          key: product.name,
                                          value: product.name,
                                          text: product.name,
                                        };
                                      }).filter((v) => v !== null)}
                                      value={additionalOrder.name}
                                      onKeyDown={({ keyCode }) => {
                                        if (keyCode === 9) {
                                          setAdditionalOrder({
                                            ...additionalOrder,
                                            editIndex: additionalOrder.editIndex + 1,
                                          });
                                        }
                                      }}
                                      onChange={
                                        (e, { value }) => {
                                          setAdditionalOrder({
                                            ...additionalOrder,
                                            name: value,
                                            amount: products.find(
                                              (product) => product.name === value,
                                            ).amount,
                                          });
                                        }
                                      }
                                    />

                                  ) : (
                                    <div>
                                      {additionalOrder.name}
                                    </div>
                                  )
                            }
                            </td>
                            <td className="border border-black px-4 py-2 text-center">
                              {
                            additionalOrder.editIndex === 2
                              ? (
                                <input
                                  tabIndex="0"
                                  ref={inputEl}
                                  className="bg-transparent outline-none w-4"
                                  value={additionalOrder.quantity}
                                  onKeyDown={({ keyCode }) => {
                                    if (keyCode === 9) {
                                      return null;
                                    }

                                    return null;
                                  }}
                                  onChange={
                                    (e) => {
                                      setAdditionalOrder({
                                        ...additionalOrder, quantity: e.target.value ? parseInt(e.target.value, 10) : '',
                                      });
                                    }
                                  }
                                />
                              ) : (
                                <div>
                                  {additionalOrder.quantity}
                                </div>
                              )
                            }
                            </td>
                            <td className="border border-black px-4 py-2 text-center">

                              {`₱ ${formatNumber((additionalOrder.amount * additionalOrder.quantity).toFixed(2))}`}
                            </td>
                          </tr>
                          ) : null
                      }
                      <tr>
                        <td colSpan="2" className="border border-black px-4 py-2">Total Amount</td>
                        <td className="border border-black px-4 py-2">
                          {`₱ ${formatNumber(totalAmount.toFixed(2))}`}
                        </td>
                      </tr>
                    </tbody>
                  </table>


                </div>
              </div>

              <div className="flex justify-end mt-4 mr-3">

                <Button
                  tabIndex="-1"
                  onClick={() => {
                    if (additionalOrder.editIndex > 0) {
                      addOrder({
                        user,
                        dateOrdered: order.dateOrdered,
                        productInput: {
                          name: additionalOrder.name,
                          quantity: additionalOrder.quantity,
                          amount: additionalOrder.amount,
                        },
                      });

                      setAdditionalOrder({
                        name: '', quantity: '', amount: 0, editIndex: 0, currentOrder: '',
                      });
                    } else {
                      setAdditionalOrder({
                        ...additionalOrder,
                        editIndex: 1,
                        currentOrder: order.dateOrdered,
                      });
                    }
                  }}
                  color={additionalOrder.editIndex > 0 && order.dateOrdered === additionalOrder.currentOrder ? 'green' : 'teal'}
                >
                  { additionalOrder.editIndex > 0 && order.dateOrdered === additionalOrder.currentOrder ? 'Confirm' : 'Add Order'}
                </Button>


              </div>


            </div>
          );
        })
      }
    </div>
  );
};


export default StockistOrders;
