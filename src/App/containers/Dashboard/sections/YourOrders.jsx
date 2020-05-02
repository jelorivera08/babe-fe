/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-named-as-default */
import React from "react";
import { graphql } from "react-relay/hooks";
import { Radio } from "semantic-ui-react";
import { QueryRenderer } from "react-relay";
import styled from "styled-components";
import dayjs from "dayjs";
import { formatNumber } from "./CreateOrderContainer";

import environment from "../../../../environment";

const RegionalStockistsContainer = styled.div`
  height: calc(100% - 7rem);
`;

const query = graphql`
  query YourOrdersQuery($username: String) {
    yourOrders(username: $username) {
      dateOrdered
      products {
        name
        quantity
        amount
      }
    }
  }
`;

export default ({ username, hasStock, toggleHasStock }) => {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{
        username,
      }}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          const { yourOrders } = props;

          if (!yourOrders) {
            return null;
          }

          return (
            <div className='w-full h-screen'>
              <div className='mt-8 mx-6 pt-4 text-xl flex'>
                <div>Your orders</div>
              </div>

              {hasStock !== undefined ? (
                <div className='mt-2 mx-6 pt-2 flex'>
                  <div className='mr-2'>Available stock</div>
                  <div>
                    <Radio
                      onChange={() => toggleHasStock(!hasStock)}
                      toggle
                      checked={hasStock}
                      color='green'
                    />
                  </div>
                </div>
              ) : null}

              <RegionalStockistsContainer className='w-full h-full p-6'>
                {yourOrders.length <= 0 ? (
                  <div className='mb-8 w-full rounded p-4'>
                    You have no orders yet.
                  </div>
                ) : null}
                {yourOrders.map((yourOrder) => {
                  let totalAmount = 0;
                  return (
                    <div
                      key={yourOrder.dateOrdered}
                      className='mb-8 w-full border bg-gray-200 border-gray-400 border-solid rounded p-4'
                    >
                      <div className='flex justify-between'>
                        <div className='flex'>
                          <div>Order Date:</div>
                          <div className='ml-2'>
                            {dayjs(yourOrder.dateOrdered).format(
                              "MMMM DD, YYYY (h:mm:ss A)"
                            )}
                          </div>
                        </div>
                        <div className='w-1/2 flex justify-end'>
                          <table className='table-auto w-full'>
                            <thead>
                              <tr>
                                <th className='border border-black  px-4 py-2'>
                                  Product
                                </th>
                                <th className='border border-black px-4 py-2'>
                                  Quantity
                                </th>
                                <th className='border border-black px-4 py-2'>
                                  Amount
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {yourOrder.products.map((product, i) => {
                                totalAmount +=
                                  product.amount * product.quantity;

                                return (
                                  <tr
                                    key={product.name}
                                    className='cursor-pointer hover:bg-gray-400'
                                  >
                                    <td className='border border-black px-4 py-2 text-center'>
                                      <div>{product.name}</div>
                                    </td>

                                    <td className='border border-black px-4 py-2 text-center cursor-text'>
                                      <div>{product.quantity}</div>
                                    </td>

                                    <td className='border border-black px-4 py-2 text-center'>
                                      {`₱ ${formatNumber(
                                        (
                                          product.amount * product.quantity
                                        ).toFixed(2)
                                      )}`}
                                    </td>
                                  </tr>
                                );
                              })}
                              <tr>
                                <td
                                  colSpan='2'
                                  className='border border-black px-4 py-2'
                                >
                                  Total Amount
                                </td>
                                <td className='border border-black px-4 py-2 text-center'>
                                  {`₱ ${formatNumber(totalAmount.toFixed(2))}`}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </RegionalStockistsContainer>
            </div>
          );
        }

        return <div>Loading</div>;
      }}
    />
  );
};
