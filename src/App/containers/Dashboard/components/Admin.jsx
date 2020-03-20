/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { MdMenu } from 'react-icons/md';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import PendingRegistrations from '../sections/PendingRegistrations';
import logo1 from '../../../../assets/images/logo1.PNG';

const PrimaryBar = styled.div`
  background-color : #94c7c9;
`;

const SecondaryBar = styled.div`
  box-shadow: 9px 4px 8px -7px rgba(138,128,138,1);
`;


const Admin = () => {
  const [selectedMenu, setSelectedMenu] = useState('Regional Stockists');
  const history = useHistory();


  return (
    <div className="w-full flex">
      <PrimaryBar className="h-screen w-16 p-2">
        <img src={logo1} alt="logo1" />
      </PrimaryBar>
      <SecondaryBar className="h-screen w-56 bg-gray-200 p-4">
        <div className="flex items-center">
          <MdMenu size="1.5em" />
          <p className="text-xl ml-2 text-center">  Menu</p>
        </div>

        <div className="mt-8">
          <div
            tabIndex="0"
            role="button"
            onClick={() => {
              setSelectedMenu('Regional Stockists');
              history.push('/dashboard/regionalStockists');
            }}
            className={cx('m-2 p-2 text-base rounded cursor-pointer outline-none', { 'bg-gray-400': selectedMenu === 'Regional Stockists' })}
          >
            Regional Stockists

          </div>
          <div
            tabIndex="-1"
            role="button"
            onClick={() => {
              setSelectedMenu('Order Tracker');
              history.push('/dashboard/orderTracker');
            }}
            className={cx('m-2 p-2 text-base rounded cursor-pointer outline-none', { 'bg-gray-400': selectedMenu === 'Order Tracker' })}
          >
            Order Tracker
          </div>
          <div
            tabIndex="-1"
            role="button"
            onClick={() => {
              setSelectedMenu('Reseller Directory');
              history.push('/dashboard/resellerDirectory');
            }}
            className={cx('m-2 p-2 text-base rounded cursor-pointer outline-none', { 'bg-gray-400': selectedMenu === 'Reseller Directory' })}
          >
            Reseller Directory

          </div>
          <div
            tabIndex="-1"
            role="button"
            onClick={() => {
              setSelectedMenu('Pending Registrations');
              history.push('/dashboard/pendingRegistrations');
            }}
            className={cx('m-2 p-2 text-base rounded cursor-pointer outline-none', { 'bg-gray-400': selectedMenu === 'Pending Registrations' })}
          >
            Pending Registrations

          </div>
        </div>

      </SecondaryBar>

      <Switch>
        <Route path="/dashboard/regionalStockists">
          <div>regional stockists</div>
        </Route>
        <Route path="/dashboard/orderTracker">
          <div>Order Tracker</div>
        </Route>
        <Route path="/dashboard/resellerDIrectory">
          <div>Reseller Directory</div>
        </Route>
        <Route path="/dashboard/pendingRegistrations">
          <PendingRegistrations />
        </Route>
      </Switch>
    </div>
  );
};


export default Admin;
