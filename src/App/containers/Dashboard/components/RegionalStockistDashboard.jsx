import React, { useState } from "react";
import styled from "styled-components";
import cx from "classnames";
import { MdMenu } from "react-icons/md";
import { Switch, Route, useHistory } from "react-router-dom";
import { Icon, Dropdown } from "semantic-ui-react";

import logo1 from "../../../../assets/images/logo1.PNG";

const OrderTracker = React.lazy(() => import("../sections/OrderTracker"));

const PrimaryBar = styled.div`
  background-color: #94c7c9;
  min-width: 4rem;
`;

const SecondaryBar = styled.div`
  box-shadow: 9px 4px 8px -7px rgba(138, 128, 138, 1);
  width: 4rem;
  transition: width 1s;

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
    \ 50% {
      color: #96c7c9;
    }
    100% {
      color: #eedef2;
    }
  }
`;

const Regional = () => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(true);

  const [selectedMenu, setSelectedMenu] = useState(
    history.location.pathname.split("/")[2]
  );

  return (
    <div className="w-full flex">
      <PrimaryBar className="h-screen w-16 p-2">
        <img
          className="cursor-pointer"
          src={logo1}
          alt="logo1"
          onClick={() => {
            setSelectedMenu("");
            history.push("/dashboard");
          }}
        />
        <div
          role="button"
          tabIndex="0"
          className="flex justify-center items-center mt-1"
        >
          <Dropdown pointing="left" icon="user circle">
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  window.localStorage.removeItem("accessToken");
                  history.push("/");
                }}
                text="Log out"
              />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </PrimaryBar>
      <SecondaryBar
        className={cx("h-screen bg-gray-200 p-4", { "show-menu": showMenu })}
      >
        <div className="flex items-center cursor-pointer">
          <MdMenu
            size="1.5em"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
          {showMenu ? <p className="text-xl ml-2 text-center"> Menu</p> : null}
        </div>

        <div className="mt-8">
          <div
            tabIndex="0"
            role="button"
            onClick={() => {
              setSelectedMenu("orders");
              history.push("/dashboard/orders");
            }}
            className={cx(
              "m-2 text-base rounded cursor-pointer outline-none",
              { "p-2": showMenu },
              { "pb-2": !showMenu },
              { "bg-gray-400": selectedMenu === "orders" }
            )}
          >
            {showMenu ? "Order Tracker" : <Icon name="address card" />}
          </div>
        </div>
      </SecondaryBar>

      <Switch>
        <Route path="/dashboard/orders">
          <OrderTracker accountType="Provincial Stockist" />
        </Route>

        <Route>
          <div className="body-gradient w-full h-screen flex justify-center items-center">
            <BreadText className="text-2xl">Let's get this bread.</BreadText>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default Regional;
