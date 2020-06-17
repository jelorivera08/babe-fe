import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Icon, Button } from "semantic-ui-react";
import Header from "../../components/Header";

const ContentContainer = styled.div`
  background-color: ${(props) => props.color};
  height: 40rem;
`;

export default () => {
  const history = useHistory();
  return (
    <div
      style={{
        backgroundColor: "#e8ecec",
      }}
      className="h-screen flex flex-col justify-center"
    >
      <ContentContainer
        height="screen"
        color="#e8ecec"
        className="flex flex-col justify-center items-center"
      >
        <div className="font-bold text-4xl">hey babe!</div>

        <div className="font-bold">
          send us a message so we can send you the details
        </div>

        <div className="my-4">
          <Icon color="teal" name="heart" />
        </div>
        <div>
          <div className="flex mt-4 justify-start">
            <div>
              <Icon
                onClick={() => {
                  window.location.replace(
                    "https://www.instagram.com/babe.formula"
                  );
                }}
                className="cursor-pointer"
                size="huge"
                name="facebook"
              />
            </div>
            <div className="flex items-center font-bold ml-4 text-lg">
              Babe formula
            </div>
          </div>

          <div className="flex mt-4 justify-start">
            <div>
              <Icon
                onClick={() => {
                  window.location.replace(
                    "https://www.instagram.com/babe.formula"
                  );
                }}
                className="cursor-pointer"
                size="huge"
                name="instagram"
              />
            </div>
            <div className="flex items-center font-bold ml-4 text-lg">
              @babe.formula
            </div>
          </div>

          <div className="flex mt-4 justify-start">
            <div>
              <Icon size="huge" name="mail" />
            </div>
            <div className="flex items-center font-bold ml-4 text-lg">
              hello@babe-formula.com
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
