import React, { useState } from "react";
import { Button, Table, Tab, Modal, Select } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import { QueryRenderer, graphql, commitMutation } from "react-relay";

import environment from "../../../../environment";

export const formatNumber = (num) =>
  isNaN(num) ? 0 : num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

const mutation = graphql`
  mutation OutgoingAddRequestOrderMutation(
    $orders: [RequestOrderInputType]!
    $dateOrdered: String!
    $notes: String!
    $stockist: String!
  ) {
    addRequestOrder(
      stockist: $stockist
      orders: $orders
      dateOrdered: $dateOrdered
      notes: $notes
    ) {
      notes
      dateOrdered
      orders {
        name
        amount
      }
      stockist
    }
  }
`;

export default () => {
  const [openRequestOrder, setOpenRequestOrder] = useState(false);
  const [requestOrderVar, setRequestOrderVar] = useState({
    stockist: "",
    dateOrdered: "",
    notes: "",
    orders: [],
  });

  const handleConfirmOrder = (orderInfo) => {
    const newOrderInfo = { ...orderInfo };
    newOrderInfo.orders = newOrderInfo.orders.filter((v) => v.quantity !== "");

    commitMutation(environment, {
      mutation,
      variables: { ...newOrderInfo },
      updater: (store) => {
        // const payload = store.getPluralRootField("createOrder");
        // const root = store.getRoot();
        // let stockistsProxy = {};
        // if (region === null) {
        //   stockistsProxy = root.getLinkedRecords(
        //     `stockists(accountType:"${accountType}")`
        //   );
        // } else {
        //   stockistsProxy = root.getLinkedRecords(
        //     `stockists(accountType:"${accountType}",region:"${region}")`
        //   );
        // }
        // const stockistProxy = stockistsProxy.find(
        //   (val) => val.getValue("username") === selectedUser
        // );
        // stockistProxy.setLinkedRecords([...payload], "orders");
      },
      onCompleted: () => {
        setOpenRequestOrder(false);
        setRequestOrderVar({
          stockist: "",
          dateOrdered: "",
          notes: "",
          orders: [],
        });
      },
      onError: (err) => console.error(err),
    });
  };

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query OutgoingStockistsQuery {
          requestOrderStockists {
            username
          }

          products {
            name
            amount
          }

          requestOrders {
            dateOrdered
            stockist
            notes
            status
            orders {
              name
              amount
              quantity
            }
          }
        }
      `}
      render={({ error, props }) => {
        if (props) {
          const { requestOrderStockists, products, requestOrders } = props;

          return (
            <>
              <Tab.Pane>
                <div className='flex justify-end mb-4'>
                  <Button onClick={() => setOpenRequestOrder(true)}>
                    Request Order
                  </Button>
                </div>
                <div className='p-1'>
                  <Table selectable celled>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Date Ordered</Table.HeaderCell>
                        <Table.HeaderCell>Ordered From</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      {requestOrders.map(
                        ({ dateOrdered, stockist, status }, i) => (
                          <Table.Row
                            key={dateOrdered + i}
                            className='cursor-pointer'
                          >
                            <Table.Cell>{dateOrdered}</Table.Cell>
                            <Table.Cell>{stockist}</Table.Cell>
                            <Table.Cell>{status}</Table.Cell>
                          </Table.Row>
                        )
                      )}
                    </Table.Body>
                  </Table>
                </div>
              </Tab.Pane>

              <Modal
                dimmer='inverted'
                open={openRequestOrder}
                onClose={() => setOpenRequestOrder(false)}
              >
                <Modal.Header>{`Request an Order`}</Modal.Header>
                <Modal.Content>
                  <div className='flex items-center justify-between'>
                    <div className='w-1/2'>
                      <div>
                        <div className='mb-1'>Select Stockist</div>
                        <div className='mb-2'>
                          <Select
                            search
                            options={requestOrderStockists.map(
                              ({ username }) => ({
                                key: username,
                                value: username,
                                text: username,
                              })
                            )}
                            value={requestOrderVar.stockist}
                            onChange={(e, { value }) =>
                              setRequestOrderVar({
                                ...requestOrderVar,
                                stockist: value,
                              })
                            }
                          />
                        </div>

                        <div className='mb-1'>Select Order Date</div>
                        <DatePicker
                          className='outline-none border border-gray-700 p-2 rounded'
                          selected={requestOrderVar.dateOrdered}
                          onChange={(date) =>
                            setRequestOrderVar({
                              ...requestOrderVar,
                              dateOrdered: date,
                            })
                          }
                          dateFormat='MMMM d, yyyy'
                        />

                        <div className='w-full pt-8 pr-20 h-full'>
                          <div className='bg-white h-full border border-gray-600 rounded'>
                            <div className='mt-2 ml-2 mb-1 relative'>Notes</div>
                            <textarea
                              className='pl-2 outline-none resize-none w-full overflow-hidden'
                              rows={5}
                              cols={5}
                              onChange={(e) =>
                                setRequestOrderVar({
                                  ...requestOrderVar,
                                  notes: e.target.value,
                                })
                              }
                              value={requestOrderVar.notes}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='w-1/2'>
                      <Table celled>
                        <Table.Header>
                          <Table.Row>
                            <Table.HeaderCell>Product</Table.HeaderCell>
                            <Table.HeaderCell>Quantity</Table.HeaderCell>
                            <Table.HeaderCell>Amount</Table.HeaderCell>
                          </Table.Row>
                        </Table.Header>

                        <Table.Body>
                          {products.map((product) => {
                            const productValueIndex = requestOrderVar.orders.findIndex(
                              (v) => v.name === product.name
                            );

                            return (
                              <Table.Row key={product.name}>
                                <Table.Cell>{product.name}</Table.Cell>
                                <Table.Cell>
                                  <input
                                    tabIndex='0'
                                    className='bg-transparent outline-none'
                                    value={
                                      requestOrderVar.orders[productValueIndex]
                                        ? requestOrderVar.orders[
                                            productValueIndex
                                          ].quantity
                                        : ""
                                    }
                                    onChange={(e) => {
                                      if (
                                        !/^\d+$/.test(e.target.value) &&
                                        e.target.value !== ""
                                      ) {
                                        return null;
                                      }

                                      const newOrders = [
                                        ...requestOrderVar.orders,
                                      ];

                                      const existingOrder =
                                        newOrders[productValueIndex];
                                      if (existingOrder) {
                                        existingOrder.quantity = e.target.value;

                                        return setRequestOrderVar({
                                          ...requestOrderVar,
                                          orders: newOrders,
                                        });
                                      } else {
                                        return setRequestOrderVar({
                                          ...requestOrderVar,
                                          orders: [
                                            ...newOrders,
                                            {
                                              name: product.name,
                                              quantity: parseInt(
                                                e.target.value,
                                                10
                                              ),
                                              amount:
                                                parseInt(e.target.value, 10) *
                                                product.amount,
                                            },
                                          ],
                                        });
                                      }
                                    }}
                                  />
                                </Table.Cell>
                                <Table.Cell>
                                  {productValueIndex !== -1
                                    ? `₱ ${formatNumber(
                                        parseInt(
                                          requestOrderVar.orders[
                                            productValueIndex
                                          ].quantity,
                                          10
                                        ) * product.amount
                                      )}`
                                    : 0}
                                </Table.Cell>
                              </Table.Row>
                            );
                          })}
                        </Table.Body>
                        <Table.Footer>
                          <Table.Row>
                            <Table.HeaderCell colSpan='2'>
                              Total
                            </Table.HeaderCell>
                            <Table.HeaderCell>0</Table.HeaderCell>
                          </Table.Row>
                        </Table.Footer>
                      </Table>
                    </div>
                  </div>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    color='red'
                    onClose={() => setOpenRequestOrder(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    positive
                    icon='checkmark'
                    labelPosition='right'
                    content='Confirm Order'
                    disabled={
                      requestOrderVar.stockist === "" ||
                      requestOrderVar.dateOrdered === "" ||
                      requestOrderVar.orders.length <= 0
                    }
                    onClick={() => handleConfirmOrder(requestOrderVar)}
                  />
                </Modal.Actions>
              </Modal>
            </>
          );
        }
        return <Tab.Pane>Loading...</Tab.Pane>;
      }}
    />
  );
};
