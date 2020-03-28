/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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

const updateMutation = graphql`
  mutation StockistOrdersUpdateOrderMutation(
    $user: String!
    $dateOrdered: String!
    $productInput: productInputType!
    $productIndex: Int!
  )  {
    updateOrder (
      user: $user
      dateOrdered: $dateOrdered
      product : $productInput
      productIndex: $productIndex
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

  const [editOrder, setEditOrder] = useState({
    name: '', quantity: '', amount: 0, editIndex: 0, currentOrder: '', productIndex: -1,
  });

  const updateOrder = (values) => {
    const variables = {
      user: values.user,
      dateOrdered: values.dateOrdered,
      productInput: values.productInput,
      productIndex: values.productIndex,
    };

    commitMutation(
      AppEnvironment,
      {
        mutation: updateMutation,
        variables,
        updater: (store) => {
          const payload = store.getRootField('updateOrder');
          const root = store.getRoot();
          const regionalStockistsProxy = root.getLinkedRecords('regionalStockists');
          const regionalStockistProxy = regionalStockistsProxy.find((val) => val.getValue('username') === values.user);


          const ordersProxy = regionalStockistProxy.getLinkedRecords('orders');
          const orderProxy = ordersProxy.find((val) => val.getValue('dateOrdered') === values.dateOrdered);

          const productsProxy = orderProxy.getLinkedRecords('products');

          const updatedProduct = productsProxy[values.productIndex];

          if (payload.getValue('quantity') === 0) {
            orderProxy.setLinkedRecords([...productsProxy.filter((v, i) => i !== values.productIndex)], 'products');
          } else {
            updatedProduct.setValue(payload.getValue('name'), 'name');
            updatedProduct.setValue(payload.getValue('quantity'), 'quantity');
            updatedProduct.setValue(payload.getValue('amount'), 'amount');
          }
        },
        onError: (err) => console.error(err),
      },
    );
  };

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
        onCompleted: () => console.log('ok'),
        onError: (err) => console.error(err),
      },
    );
  };


  const { products } = usePreloadedQuery(query, result);


  const inputEl = useRef();

  useEffect(() => {
    inputEl && inputEl.current && inputEl.current.focus();
  }, [additionalOrder.editIndex, editOrder.editIndex]);

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
                      {order.products.map((product, i) => {
                        totalAmount += product.amount * product.quantity;

                        return (
                          <tr
                            key={product.name}
                            className="cursor-pointer hover:bg-gray-400"
                          >
                            <td
                              onClick={() => {
                                setEditOrder({
                                  ...editOrder,
                                  editIndex: 1,
                                  currentOrder: order.dateOrdered,
                                  productIndex: i,
                                  quantity: product.quantity,
                                  amount: product.amount,
                                  name: product.name,
                                });
                              }}
                              className="border border-black px-4 py-2 text-center"
                            >
                              {
                                (editOrder.currentOrder === order.dateOrdered
                                  && editOrder.productIndex === i
                                  && editOrder.editIndex > 0)
                                  ? (
                                    <Select
                                      placeholder="Select Product"
                                      options={products.map((prod) => {
                                        if (order.products.find(
                                          (orderProduct) => (orderProduct.name === prod.name)
                                          && (orderProduct.name !== product.name),
                                        )
                                        ) {
                                          return null;
                                        }
                                        return {
                                          key: prod.name,
                                          value: prod.name,
                                          text: prod.name,
                                        };
                                      }).filter((v) => v !== null)}
                                      value={editOrder.name}
                                      onKeyDown={({ keyCode }) => {
                                        if (keyCode === 9) {
                                          setEditOrder({
                                            ...editOrder,
                                            editIndex: editOrder.editIndex + 1,
                                          });
                                        }
                                      }}
                                      onChange={
                                        (e, { value }) => {
                                          setEditOrder({
                                            ...editOrder,
                                            name: value,
                                            amount: products.find(
                                              (prod) => prod.name === value,
                                            ).amount,
                                          });
                                        }
                                      }
                                    />
                                  )
                                  : <div>{product.name}</div>
                              }
                            </td>

                            <td
                              className="border border-black px-4 py-2 text-center cursor-text"
                              onClick={() => {
                                setEditOrder({
                                  ...editOrder,
                                  editIndex: 2,
                                  currentOrder: order.dateOrdered,
                                  productIndex: i,
                                  quantity: product.quantity,
                                  name: product.name,
                                  amount: product.amount,
                                });
                              }}
                            >
                              {
                            (editOrder.currentOrder === order.dateOrdered
                              && editOrder.productIndex === i
                              && editOrder.editIndex > 0)
                              ? (
                                <input
                                  tabIndex="0"
                                  ref={inputEl}
                                  className="bg-transparent outline-none w-4"
                                  value={editOrder.quantity}
                                  onKeyDown={({ keyCode }) => {
                                    if (keyCode === 9) {
                                      return null;
                                    }

                                    return null;
                                  }}
                                  onChange={
                                    (e) => {
                                      if (Number.isNaN(parseInt(e.target.value, 10)) && e.target.value !== '') return;
                                      setEditOrder({
                                        ...editOrder,
                                        quantity: e.target.value ? parseInt(e.target.value, 10) : '',
                                      });
                                    }
                                  }
                                />
                              ) : (
                                <div>
                                  {product.quantity}
                                </div>
                              )
                            }

                            </td>

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
                            <td
                              className="border border-black px-4 py-2 text-center cursor-text"
                              onClick={() => {
                                setAdditionalOrder({
                                  ...additionalOrder,
                                  editIndex: 2,
                                });
                              }}
                            >
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
                                      if (Number.isNaN(parseInt(e.target.value, 10)) && e.target.value !== '') return;
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

                { (additionalOrder.editIndex > 0
                 && order.dateOrdered === additionalOrder.currentOrder)
                 || (editOrder.editIndex > 0 && order.dateOrdered === editOrder.currentOrder)
                  ? (
                    <Button
                      onClick={
                        () => {
                          if ((editOrder.editIndex > 0
                            && order.dateOrdered === editOrder.currentOrder)) {
                            setEditOrder({
                              name: '', quantity: '', amount: 0, editIndex: 0, currentOrder: '',
                            });
                          } else {
                            setAdditionalOrder({
                              name: '', quantity: '', amount: 0, editIndex: 0, currentOrder: '',
                            });
                          }
                        }
                      }
                      color="red"
                    >
                    Cancel

                    </Button>
                  ) : null}

                <Button
                  tabIndex="-1"
                  onClick={() => {
                    if (editOrder.editIndex > 0 && order.dateOrdered === editOrder.currentOrder) {
                      updateOrder({
                        user,
                        dateOrdered: order.dateOrdered,
                        productInput: {
                          name: editOrder.name,
                          quantity: editOrder.quantity,
                          amount: editOrder.amount,
                        },
                        productIndex: editOrder.productIndex,
                      });

                      return setEditOrder({
                        name: '', quantity: '', amount: 0, editIndex: 0, currentOrder: '', productIndex: -1,
                      });
                    }

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
                    return null;
                  }}
                  color={(additionalOrder.editIndex > 0
                    && order.dateOrdered === additionalOrder.currentOrder)
                  || (editOrder.editIndex > 0 && order.dateOrdered === editOrder.currentOrder) ? 'green' : 'teal'}
                  disabled={
                    (additionalOrder.editIndex > 0
                    && order.dateOrdered === additionalOrder.currentOrder)
                     && (additionalOrder.quantity === '' || additionalOrder.quantity <= 0
                      || additionalOrder.name === '')
}
                >
                  { (additionalOrder.editIndex > 0
                  && order.dateOrdered === additionalOrder.currentOrder)
                  || (editOrder.editIndex > 0 && order.dateOrdered === editOrder.currentOrder) ? 'Confirm' : 'Add Product'}
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
