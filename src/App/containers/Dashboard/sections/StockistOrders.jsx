/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import dayjs from 'dayjs';


function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}


const StockistOrders = ({ orders }) => {
  const [additionalOrder, setAdditionalOrder] = useState({
    name: '', quantity: 5, amount: 155, editIndex: 0,
  });

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
                            additionalOrder.editIndex === 1
                              ? (
                                <input
                                  tabIndex="0"
                                  ref={inputEl}
                                  className="bg-transparent outline-none"
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
                                    (e) => {
                                      setAdditionalOrder({
                                        ...additionalOrder, name: e.target.value,
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
                                  className="bg-transparent outline-none"
                                  value={additionalOrder.quantity}
                                  onKeyDown={({ keyCode }) => {
                                    if (keyCode === 9) {
                                      setAdditionalOrder({
                                        ...additionalOrder,
                                        editIndex: 0,
                                      });
                                    }
                                  }}
                                  onChange={
                                    (e) => {
                                      setAdditionalOrder({
                                        ...additionalOrder, quantity: e.target.value,
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

                <button
                  tabIndex="-1"
                  onClick={() => {
                    setAdditionalOrder({
                      ...additionalOrder,
                      editIndex: 1,
                      currentOrder: order.dateOrdered,
                    });
                  }}
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add Order
                </button>


              </div>


            </div>
          );
        })
      }
    </div>
  );
};


export default StockistOrders;
