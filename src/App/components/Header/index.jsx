/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import logo1 from "../../../assets/images/logo1.PNG";

const HeaderContainer = ({ history }) => (
  <div className='fixed w-full bg-transparent h-12 flex justify-between items-center pr-8 top-0'>
    <div>
      <img
        role='button'
        onClick={() => history.push("/")}
        className='h-12 ml-2 cursor-pointer'
        src={logo1}
        alt='logo1'
      />
    </div>

    <div className='flex '>
      {/* <div

        role="button"
        tabIndex="0"
        onClick={
      () => { history.push('/aboutUs'); }
      }
        className="mr-4 hover:underline cursor-pointer"
      >
        About us

      </div> */}
      <div
        role='button'
        tabIndex='0'
        onClick={() => {
          history.push("/resellers");
        }}
        className='hover:underline cursor-pointer mr-4'
      >
        Resellers
      </div>

      <div
        role='button'
        tabIndex='0'
        onClick={() => {
          history.push("/signup");
        }}
        className='hover:underline cursor-pointer'
      >
        Sign up
      </div>
    </div>
  </div>
);

export default HeaderContainer;
