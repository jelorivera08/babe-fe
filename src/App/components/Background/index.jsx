/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/images/logo3.png';


const BackgroundContainer = styled.div`
  background-color : #EEDDF0;
`;

const ImageLogo = styled.img`
  bottom: 0.5rem;
  right: 0.5rem;
`;

const Background = ({ children }) => (
  <BackgroundContainer className="w-full bg-teal-600 h-screen flex justify-center items-center">
    {children}
    <ImageLogo
      className="fixed h-12"
      src={logo}
      alt="logo"
    />
  </BackgroundContainer>
);

export default Background;
