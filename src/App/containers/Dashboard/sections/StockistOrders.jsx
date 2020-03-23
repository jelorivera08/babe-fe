/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import dayjs from 'dayjs';

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}


const StockistOrders = ({ orders }) => (
  <div>
    {
        orders.map((order) => {
          const formattedDateOrdered = dayjs(order.dateOrdered).format('MMMM DD, YYYY');
          let totalAmount = 0;

          return (
            <div
              key={order.dateOrdered}
              className="mb-8 w-full border bg-gray-200 border-gray-400 border-solid rounded p-4 flex justify-between"
            >
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
          );
        })
      }
  </div>
);


export default StockistOrders;
