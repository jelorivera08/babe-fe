/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import {
  useHistory,
  Switch,
  Route,
} from 'react-router-dom';
import { graphql, preloadQuery, usePreloadedQuery } from 'react-relay/hooks';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import StockistOrders from './StockistOrders';
import CreateOrderContainer from './CreateOrderContainer';

import environment from '../../../../environment';

const RegionalStockistsContainer = styled.div`
  height: calc(100% - 5rem);
`;


const query = graphql`
  query RegionalStockistsQuery {
    regionalStockists {
      firstName
      surname
      username
      orders {
        user
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

const result = preloadQuery(
  environment,
  query,
);


export default () => {
  const { regionalStockists } = usePreloadedQuery(query, result);
  const history = useHistory();

  const headerTitle = history.location.pathname.split('/').filter((v, i) => i > 2);

  const [createOrderOpen, setCreateOrderOpen] = useState(false);


  return (
    <div className="w-full h-screen">
      <div className="mt-8 mx-6 pt-4 text-xl flex">
        <div>Regional Stockists</div>
        {headerTitle.map((title) => (
          <div key={title} className="flex items-center">
            <IoIosArrowForward className="ml-2" />
            <div className="ml-2">{title}</div>
          </div>
        ))}
      </div>


      <RegionalStockistsContainer className="w-full h-full p-6">
        <Switch>
          <Route exact path="/dashboard/orders">
            {
            regionalStockists.map((stockist) => (
              <div
                key={stockist.username}
                tabIndex="0"
                role="button"
                onClick={() => history.push(`/dashboard/orders/${stockist.username}`)}
                className="mb-4 w-full border bg-gray-200 border-gray-400 border-solid rounded p-4 cursor-pointer"
              >
                <div className="flex">
                  <div>
                    {stockist.firstName}
                  </div>
                  <div className="ml-2">{stockist.surname}</div>

                </div>

                <div className="flex justify-end items-center text-gray-600">
                  <div>See orders</div>
                  <IoIosArrowForward className="ml-2" />
                </div>

              </div>
            ))
          }
          </Route>
          {
            regionalStockists.map((stockist) => (
              <Route key={stockist.username} path={`/dashboard/orders/${stockist.username}`}>
                <CreateOrderContainer
                  open={createOrderOpen}
                  handleClose={setCreateOrderOpen}
                  user={stockist.username}
                />
                <div className="flex justify-end mb-4 mr-6">
                  <Button onClick={() => setCreateOrderOpen(true)}>Create Order</Button>
                </div>
                <StockistOrders orders={stockist.orders} user={stockist.username} />
              </Route>
            ))
          }
        </Switch>


      </RegionalStockistsContainer>
    </div>
  );
};
