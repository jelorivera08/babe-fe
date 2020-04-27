/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  background-color: #f9c5d1;
  background-image: linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%);
`;

const Background = ({ children }) => (
  <BackgroundContainer className='w-full bg-teal-600 h-screen flex justify-center items-center'>
    {children}
  </BackgroundContainer>
);

export default Background;
