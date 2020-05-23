/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, Modal, Table, Select } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import { graphql, preloadQuery, usePreloadedQuery } from "react-relay/hooks";

import "react-datepicker/dist/react-datepicker.css";
import { commitMutation } from "react-relay";

import AppEnvironment from "../../../../environment";

export const formatNumber = (num) =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

const query = graphql`
  query CreateOrderContainerQuery {
    products {
      name
      amount
    }
  }
`;

const createOrderMutation = graphql`
  mutation CreateOrderContainerMutation(
    $user: String!
    $productInput: [productInputType]!
    $dateOrdered: String!
    $notes: String!
  ) {
    createOrder(
      user: $user
      products: $productInput
      dateOrdered: $dateOrdered
      notes: $notes
    ) {
      user
      notes
      dateOrdered
      products {
        name
        amount
        quantity
      }
    }
  }
`;

const result = preloadQuery(AppEnvironment, query);

const CreateOrderContainer = ({
  open,
  handleClose,
  users,
  accountType,
  region,
}) => {
  const [orderDate, setOrderDate] = useState(new Date());
  const [selectedUser, setSelectedUser] = useState("");
  const [orderProducts, setOrderProducts] = useState({});
  const [orderNotes, setOrderNotes] = useState("");

  let totalAmount = 0;

  const { products } = usePreloadedQuery(query, result);

  const handleConfirmClick = (values) => {
    const variables = {
      user: selectedUser,
      dateOrdered: values.orderDate,
      notes: orderNotes,
      productInput: Object.values(values.products)
        .filter((v) => parseInt(v.quantity, 10) > 0)
        .map((v) => ({ ...v, quantity: parseInt(v.quantity, 10) })),
    };

    commitMutation(AppEnvironment, {
      mutation: createOrderMutation,
      variables,
      updater: (store) => {
        const payload = store.getPluralRootField("createOrder");
        const root = store.getRoot();

        let stockistsProxy = {};

        if (region === null) {
          stockistsProxy = root.getLinkedRecords(
            `stockists(accountType:"${accountType}")`
          );
        } else {
          stockistsProxy = root.getLinkedRecords(
            `stockists(accountType:"${accountType}",region:"${region}")`
          );
        }

        const stockistProxy = stockistsProxy.find(
          (val) => val.getValue("username") === selectedUser
        );

        stockistProxy.setLinkedRecords([...payload], "orders");
      },
      onCompleted: () => {
        setOrderProducts({});
        handleClose(false);
      },
      onError: (err) => console.error(err),
    });
  };

  return (
    <Modal dimmer='inverted' open={open} onClose={() => {}}>
      <Modal.Header>{`Create an Order`}</Modal.Header>
      <Modal.Content>
        <div className='flex items-center justify-between'>
          <div className='w-1/2'>
            <div>
              <div className='mb-1'>Select Stockist</div>
              <div className='mb-2'>
                <Select
                  search
                  options={users.map((user) => ({
                    key: user.name,
                    text: user.name,
                    value: user.username,
                  }))}
                  value={selectedUser}
                  onChange={(e, { value }) => {
                    setSelectedUser(value);
                  }}
                />
              </div>

              <div className='mb-1'>Select Order Date</div>
              <DatePicker
                className='outline-none border border-gray-700 p-2 rounded'
                selected={orderDate}
                onChange={setOrderDate}
                dateFormat='MMMM d, yyyy'
              />

              <div className='w-full pt-8 pr-20 h-full'>
                <div className='bg-white h-full border border-gray-600 rounded'>
                  <div className='mt-2 ml-2 mb-1 relative'>Notes</div>
                  <textarea
                    className='pl-2 outline-none resize-none w-full overflow-hidden'
                    rows={5}
                    cols={5}
                    onChange={(e) => {
                      setOrderNotes(e.target.value);
                    }}
                    value={orderNotes}
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
                  if (orderProducts[product.name]) {
                    totalAmount +=
                      orderProducts[product.name].amount *
                      orderProducts[product.name].quantity;
                  }

                  return (
                    <Table.Row key={product.name}>
                      <Table.Cell>{product.name}</Table.Cell>
                      <Table.Cell>
                        <input
                          tabIndex='0'
                          className='bg-transparent outline-none'
                          value={
                            orderProducts[product.name]
                              ? orderProducts[product.name].quantity
                              : 0
                          }
                          onChange={(e) => {
                            setOrderProducts({
                              ...orderProducts,
                              [product.name]: {
                                name: product.name,
                                quantity: e.target.value,
                                amount: product.amount,
                              },
                            });
                          }}
                        />
                      </Table.Cell>
                      <Table.Cell>
                        {orderProducts[product.name]
                          ? `₱ ${formatNumber(
                              (
                                orderProducts[product.name].quantity *
                                orderProducts[product.name].amount
                              ).toFixed(2)
                            )}`
                          : 0}
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='2'>Total</Table.HeaderCell>
                  <Table.HeaderCell>{`₱ ${formatNumber(
                    totalAmount.toFixed(2)
                  )}`}</Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color='red'
          onClick={() => {
            setOrderProducts({});
            handleClose(false);
          }}
        >
          Cancel
        </Button>
        <Button
          positive
          disabled={
            selectedUser === "" ||
            Object.values(orderProducts).length <= 0 ||
            Object.values(orderProducts).filter(
              (v) =>
                Number.parseInt(v.quantity, 10) <= 0 ||
                Number.isNaN(Number.parseInt(v.quantity, 10))
            ).length > 0
          }
          icon='checkmark'
          labelPosition='right'
          content='Confirm Order'
          onClick={() =>
            handleConfirmClick({
              products: orderProducts,
              orderDate,
            })
          }
        />
      </Modal.Actions>
    </Modal>
  );
};

export default CreateOrderContainer;
