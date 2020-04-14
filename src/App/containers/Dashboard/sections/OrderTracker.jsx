/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-named-as-default */
import React, { useState, useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useHistory, Switch, Route } from "react-router-dom";
import { graphql } from "react-relay/hooks";

import { QueryRenderer } from "react-relay";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

import StockistOrders from "./StockistOrders";
import CreateOrderContainer from "./CreateOrderContainer";

import AppContext from "../../../context";
import environment from "../../../../environment";

const RegionalStockistsContainer = styled.div`
  height: calc(100% - 7rem);
`;

const query = graphql`
  query OrderTrackerQuery($accountType: String!, $region: String) {
    stockists(accountType: $accountType, region: $region) {
      firstName
      surname
      accountType
      username
      orders {
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
  }
`;

export default ({ accountType }) => {
  const history = useHistory();
  const { region } = useContext(AppContext);

  const headerTitle = history.location.pathname
    .split("/")
    .filter((v, i) => i > 2);

  const [createOrderOpen, setCreateOrderOpen] = useState(false);

  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{
        accountType,
        region,
      }}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          const { stockists } = props;
          return (
            <div className="w-full h-screen">
              <div className="mt-8 mx-6 pt-4 text-xl flex">
                <div>Stockists</div>
                {headerTitle.map((title) => (
                  <div key={title} className="flex items-center">
                    <IoIosArrowForward className="ml-2" />
                    <div className="ml-2">{title}</div>
                  </div>
                ))}
              </div>

              <CreateOrderContainer
                open={createOrderOpen}
                handleClose={setCreateOrderOpen}
                users={stockists.map((stockist) => ({
                  name: stockist.username,
                  accountType: stockist.accountType,
                }))}
                accountType={accountType}
                region={region}
              />
              <div className="flex justify-end mr-6">
                <Button onClick={() => setCreateOrderOpen(true)}>
                  Create Order
                </Button>
              </div>

              <RegionalStockistsContainer className="w-full h-full p-6">
                <Switch>
                  <Route exact path="/dashboard/orders">
                    {stockists.map((stockist) => (
                      <div
                        key={stockist.username}
                        tabIndex="0"
                        role="button"
                        onClick={() =>
                          history.push(`/dashboard/orders/${stockist.username}`)
                        }
                        className="mb-4 w-full border bg-gray-200 border-gray-400 border-solid rounded p-4 cursor-pointer"
                      >
                        <div className="flex">
                          <div>{stockist.firstName}</div>
                          <div className="ml-2">{stockist.surname}</div>
                        </div>

                        <div className="flex justify-end items-center text-gray-600">
                          <div>See orders</div>
                          <IoIosArrowForward className="ml-2" />
                        </div>
                      </div>
                    ))}
                  </Route>
                  {stockists.map((stockist) => (
                    <Route
                      key={stockist.username}
                      path={`/dashboard/orders/${stockist.username}`}
                    >
                      <StockistOrders
                        orders={stockist.orders}
                        user={stockist.username}
                        region={region}
                        accountType={accountType}
                      />
                    </Route>
                  ))}
                </Switch>
              </RegionalStockistsContainer>
            </div>
          );
        }
        return <div>Loading</div>;
      }}
    />
  );
};
