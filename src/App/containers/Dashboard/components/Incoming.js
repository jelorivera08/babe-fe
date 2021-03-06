import React, { useState } from "react";
import { graphql, QueryRenderer, commitMutation } from "react-relay";
import { Select, Button, Table, Tab, Modal } from "semantic-ui-react";
import dayjs from "dayjs";
import environment from "../../../../environment";

export const formatNumber = (num) =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

const mutation = graphql`
  mutation IncomingUpdateOrderRequestMutation(
    $orderedBy: String!
    $status: String!
    $dateOrdered: String!
  ) {
    updateRequestOrder(
      orderedBy: $orderedBy
      status: $status
      dateOrdered: $dateOrdered
    ) {
      status
      orderedBy
      dateOrdered
      orders {
        name
        amount
        quantity
      }
    }
  }
`;

export default () => {
  const [incomingRequestOrderModal, setIncomingRequestOrderModal] = useState({
    orders: [],
    orderedBy: "",
    status: "",
  });

  const [orderStatusChange, setOrderStatusChange] = useState(null);

  const handleConfirmClick = () => {
    const variables = {
      ...incomingRequestOrderModal,
      status: orderStatusChange,
    };

    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        setIncomingRequestOrderModal({
          orders: [],
          orderedBy: "",
          status: "",
        });

        setOrderStatusChange(null);
      },
      onError: (err) => console.error(err),
      updater: (store) => {
        const payload = store.getRootField("updateRequestOrder");

        const root = store.getRoot();
        const incomingRequestOrders = root.getLinkedRecords(
          "incomingRequestOrders"
        );

        const payloadProxyIndex = incomingRequestOrders.findIndex(
          (val) =>
            val.getValue("orderedBy") === payload.getValue("orderedBy") &&
            val.getValue("dateOrdered") === payload.getValue("dateOrdered")
        );

        const newRequestOrders = [...incomingRequestOrders];
        newRequestOrders[payloadProxyIndex] = payload;

        payload.getValue("status");

        root.setLinkedRecords(newRequestOrders, "incomingRequestOrders");
      },
    });
  };

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
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
      `}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          const { incomingRequestOrders } = props;

          return (
            <>
              <Tab.Pane>
                <div className="p-1">
                  <Table selectable celled>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Date Ordered</Table.HeaderCell>
                        <Table.HeaderCell>Ordered By</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      {incomingRequestOrders.map((requestOrders) => {
                        const {
                          dateOrdered,
                          status,
                          orderedBy,
                        } = requestOrders;

                        return (
                          <Table.Row
                            key={JSON.stringify(requestOrders)}
                            className="cursor-pointer"
                            onClick={() =>
                              setIncomingRequestOrderModal({ ...requestOrders })
                            }
                          >
                            <Table.Cell>
                              {" "}
                              {dayjs(dateOrdered).format(
                                "MMMM DD, YYYY (h:mm:ss A)"
                              )}
                            </Table.Cell>
                            <Table.Cell>{orderedBy}</Table.Cell>
                            <Table.Cell>{status}</Table.Cell>
                          </Table.Row>
                        );
                      })}
                    </Table.Body>
                  </Table>
                </div>
              </Tab.Pane>

              <Modal
                open={incomingRequestOrderModal.orders.length > 0}
                onClose={() => {
                  setIncomingRequestOrderModal({
                    orders: [],
                    orderedBy: "",
                    status: "",
                  });

                  setOrderStatusChange(null);
                }}
                dimmer="inverted"
                size="small"
              >
                <Modal.Header>Order details</Modal.Header>
                <Modal.Content>
                  <Table>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Product</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      {incomingRequestOrderModal.orders.map((order) => (
                        <Table.Row key={order.name}>
                          <Table.Cell>{order.name}</Table.Cell>
                          <Table.Cell>
                            <div>{order.quantity}</div>
                          </Table.Cell>
                          <Table.Cell>
                            {`₱  ${formatNumber(
                              (order.quantity * order.amount).toFixed(2)
                            )}`}
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                    <Table.Footer>
                      <Table.Row>
                        <Table.HeaderCell colSpan="2">
                          Order Status
                        </Table.HeaderCell>
                        <Table.HeaderCell colSpan="1">
                          <Select
                            options={[
                              {
                                key: "PENDING",
                                value: "PENDING",
                                text: "PENDING",
                              },
                              {
                                key: "CONFIRMED",
                                value: "CONFIRMED",
                                text: "CONFIRMED",
                              },
                            ]}
                            onChange={(e, { value }) =>
                              setOrderStatusChange(value)
                            }
                            value={
                              orderStatusChange ||
                              incomingRequestOrderModal.status
                            }
                          />
                        </Table.HeaderCell>
                      </Table.Row>
                    </Table.Footer>
                  </Table>
                </Modal.Content>

                <Modal.Actions>
                  <Button
                    onClick={handleConfirmClick}
                    disabled={!orderStatusChange}
                    positive
                  >
                    Confirm
                  </Button>
                </Modal.Actions>
              </Modal>
            </>
          );
        }
        return <div>Loading</div>;
      }}
    />
  );
};
