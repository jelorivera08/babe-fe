/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-named-as-default */
import React, { useState, useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useHistory, Switch, Route } from "react-router-dom";
import { graphql } from "react-relay/hooks";
import { Table, Select, Input } from "semantic-ui-react";

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
      region
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

const tableHeaders = [
  { key: "Account Type", value: "accountType", text: "Account Type" },
  { key: "Username", value: "username", text: "Username" },
  { key: "First Name", value: "firstName", text: "First Name" },
  { key: "Surname", value: "surname", text: "Surname" },
  { key: "Region", value: "region", text: "Region" },
];

export default ({ accountType }) => {
  const history = useHistory();
  const { region } = useContext(AppContext);
  const [searchType, setSearchType] = useState("username");
  const [searchKeyword, setSearchKeyword] = useState("");

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

          let filteredStockists = stockists.filter((stockist) =>
            stockist[searchType]
              .toLowerCase()
              .includes(searchKeyword.toLocaleLowerCase())
          );

          return (
            <div className='w-full h-screen'>
              <div className='mt-8 mx-6 pt-4 text-xl flex justify-between items-center'>
                <div className='flex'>
                  <div>Stockists</div>

                  {headerTitle.map((title) => (
                    <div key={title} className='flex items-center'>
                      <IoIosArrowForward className='ml-2' />
                      <div className='ml-2'>{title}</div>
                    </div>
                  ))}
                </div>

                <div className='mb-4'>
                  <Select
                    className='mr-1'
                    placeholder='Select Search Type'
                    style={{
                      minWidth: "10rem",
                      fontSize: "1rem",
                      minHeight: "2.5rem",
                    }}
                    value={searchType}
                    onChange={(e, { value }) => setSearchType(value)}
                    options={tableHeaders}
                  />
                  <Input
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    icon='search'
                    size='mini'
                    placeholder='Search...'
                  />
                </div>
              </div>

              <CreateOrderContainer
                open={createOrderOpen}
                handleClose={setCreateOrderOpen}
                users={stockists.map((stockist) => ({
                  username: stockist.username,
                  name: `${stockist.firstName} ${stockist.surname}`,
                  accountType: stockist.accountType,
                }))}
                accountType={accountType}
                region={region}
              />
              <div className='flex justify-end mr-6'>
                <Button onClick={() => setCreateOrderOpen(true)}>
                  Create Order
                </Button>
              </div>

              <RegionalStockistsContainer className='w-full h-full p-6'>
                <Switch>
                  <Route exact path='/dashboard/orders'>
                    <Table celled selectable striped>
                      <Table.Header>
                        <Table.Row>
                          {tableHeaders.map((theader) => (
                            <Table.HeaderCell key={theader.key}>
                              {theader.text}
                            </Table.HeaderCell>
                          ))}
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {filteredStockists.map((stockist) => (
                          <Table.Row
                            key={stockist.username}
                            onClick={() =>
                              history.push(
                                `/dashboard/orders/${stockist.username}`
                              )
                            }
                            className='cursor-pointer'
                          >
                            <Table.Cell>{stockist.accountType}</Table.Cell>
                            <Table.Cell>{stockist.username}</Table.Cell>
                            <Table.Cell>{stockist.firstName}</Table.Cell>
                            <Table.Cell>{stockist.surname}</Table.Cell>
                            <Table.Cell>{stockist.region}</Table.Cell>
                          </Table.Row>
                        ))}
                        {filteredStockists.length <= 0 ? (
                          <Table.Row className='cursor-pointer'>
                            <Table.Cell colSpan={5}>
                              No results found
                            </Table.Cell>
                          </Table.Row>
                        ) : null}
                      </Table.Body>
                    </Table>
                  </Route>
                  {filteredStockists.map((stockist) => (
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
