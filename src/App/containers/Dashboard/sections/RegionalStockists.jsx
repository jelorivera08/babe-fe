/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import {
  useHistory,
  Switch,
  Route,
} from 'react-router-dom';
import { graphql, preloadQuery, usePreloadedQuery } from 'react-relay/hooks';
import StockistOrders from './StockistOrders';


import environment from '../../../../environment';


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


  return (
    <div className="w-full">
      <div className="m-8 pt-4 text-xl flex">
        <div>Regional Stockists</div>
        {headerTitle.map((title) => (
          <div key={title} className="flex items-center">
            <IoIosArrowForward className="ml-2" />
            <div className="ml-2">{title}</div>
          </div>
        ))}
      </div>
      <div className="w-full p-6">
        <Switch>
          <Route exact path="/dashboard/regionalStockists">
            {
            regionalStockists.map((stockist) => (
              <div
                key={stockist.username}
                tabIndex="0"
                role="button"
                onClick={() => history.push(`/dashboard/regionalStockists/${stockist.username}`)}
                className="mb-8 w-full border bg-gray-200 border-gray-400 border-solid rounded p-4 cursor-pointer"
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
              <Route key={stockist.username} path={`/dashboard/regionalStockists/${stockist.username}`}>
                <StockistOrders orders={stockist.orders} />
              </Route>
            ))
          }
        </Switch>


      </div>
    </div>
  );
};
