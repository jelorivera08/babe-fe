import React, { useState, useContext, Suspense, useEffect } from "react";
import styled from "styled-components";
import cx from "classnames";
import { MdMenu } from "react-icons/md";
import { Switch, Route, useHistory } from "react-router-dom";
import { Icon, Dropdown } from "semantic-ui-react";

import RequestOrder from "../sections/RequestOrder";

import YourOrders from "../sections/YourOrders";
import environment from "../../../../environment";

import { fetchQuery, graphql } from "relay-runtime";

import { commitMutation } from "react-relay";

import logo1 from "../../../../assets/images/logo1.PNG";
import AppContext from "../../../context";

const query = graphql`
  query ResellerDashboardUserInfoQuery {
    userInfo {
      hasStock
    }
  }
`;

const mutation = graphql`
  mutation ResellerDashboardHasStockUpdateMutation($hasStockStatus: Boolean!) {
    updateResellerStock(hasStockStatus: $hasStockStatus) {
      username
      hasStock
    }
  }
`;

const PrimaryBar = styled.div`
  background-color: #f9c5d1;
  background-image: linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%);

  min-width: 4rem;
`;

const SecondaryBar = styled.div`
  box-shadow: 9px 4px 8px -7px rgba(138, 128, 138, 1);
  width: 4rem;
  transition: width 1s;
  max-width: 13rem;

  &.show-menu {
    width: 16rem;
  }
`;

const BreadText = styled.div`
  color: #f6e7ea;
  animation: mymove 5s infinite ease;

  @keyframes mymove {
    0% {
      color: #d5dcec;
    }
    50% {
      color: #96c7c9;
    }
    100% {
      color: #eedef2;
    }
  }
`;

const Provincial = () => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(true);
  const { username } = useContext(AppContext);
  const [hasStock, setHasStock] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState(
    history.location.pathname.split("/")[2]
  );

  useEffect(() => {
    fetchQuery(environment, query, {}).then((data) => {
      if (data) {
        setHasStock(data.userInfo.hasStock);
      }
    });
  }, []);

  const toggleHasStock = (hasStock) => {
    commitMutation(environment, {
      mutation,
      variables: {
        hasStockStatus: hasStock,
      },
      updater: (store) => {
        const hasStockPayload = store
          .getRootField("updateResellerStock")
          .getValue("hasStock");

        const userInfo = store.getRoot().getLinkedRecord("userInfo");

        userInfo.setValue(hasStockPayload, "hasStock");
        setHasStock(hasStockPayload);
      },
      optimisticUpdater: () => {
        setHasStock(hasStock);
      },
      onError: (err) => console.error(err),
    });
  };

  return (
    <div className='w-full flex'>
      <PrimaryBar className='h-screen w-16 p-2 flex flex-col justify-between'>
        <img
          className='cursor-pointer'
          src={logo1}
          alt='logo1'
          onClick={() => {
            setSelectedMenu("");
            history.push("/dashboard");
          }}
        />
        <div
          role='button'
          tabIndex='0'
          className='flex justify-center items-center mt-1 mb-2'
        >
          <Dropdown pointing='left' icon='user circle'>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  history.push("/dashboard");
                }}
                text='Dashboard'
              />

              <Dropdown.Item
                onClick={() => {
                  history.push("/profile");
                }}
                text='Profile'
              />
              <Dropdown.Item
                onClick={() => {
                  window.localStorage.removeItem("accessToken");
                  history.push("/");
                  window.location.reload();
                }}
                text='Log out'
              />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </PrimaryBar>
      <SecondaryBar
        className={cx("h-screen bg-gray-200 p-4", { "show-menu": showMenu })}
      >
        <div className='flex items-center cursor-pointer'>
          <MdMenu
            size='1.5em'
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
          {showMenu ? <p className='text-xl ml-2 text-center'> Menu</p> : null}
        </div>

        <div className='mt-8'>
          <div
            tabIndex='0'
            role='button'
            onClick={() => {
              setSelectedMenu("yourOrders");
              history.push("/dashboard/yourOrders");
            }}
            className={cx(
              "m-2 text-base rounded cursor-pointer outline-none",
              { "p-2": showMenu },
              { "pb-2": !showMenu },
              { "bg-gray-400": selectedMenu === "yourOrders" }
            )}
          >
            {showMenu ? "Your Orders" : <Icon name='shopping cart' />}
          </div>
        </div>

        <div
          tabIndex='0'
          role='button'
          onClick={() => {
            setSelectedMenu("requestOrder");
            history.push("/dashboard/requestOrder");
          }}
          className={cx(
            "m-2 text-base rounded cursor-pointer outline-none",
            { "p-2": showMenu },
            { "pb-2": !showMenu },
            { "bg-gray-400": selectedMenu === "requestOrder" }
          )}
        >
          {showMenu ? "Request Order" : <Icon name='plus cart' />}
        </div>
      </SecondaryBar>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path='/dashboard/yourOrders'>
            <YourOrders
              username={username}
              hasStock={hasStock}
              toggleHasStock={toggleHasStock}
            />
          </Route>

          <Route path='/dashboard/requestOrder'>
            <RequestOrder />
          </Route>

          <Route>
            <div className='body-gradient w-full h-screen flex justify-center items-center'>
              <BreadText className='text-2xl'>Let's get this bread.</BreadText>
            </div>
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default Provincial;
