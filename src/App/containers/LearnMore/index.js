import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import Header from "../../components/Header";

import page8 from "../../../assets/aboutUs/Page8.png";
import page9 from "../../../assets/aboutUs/Page9.png";

const ContentContainer = styled.div`
  background-color: ${(props) => props.color};
  height: ${(props) =>
    !props.isImg && (props.height === "half" ? "20rem" : "40rem")};
`;
export default () => {
  const history = useHistory();

  return (
    <div>
      <Header history={history} />
      <ContentContainer
        color="#fae0e0"
        isImg={true}
        className="flex justify-center flex-col"
      >
        <img src={page9} alt="page-9" />
      </ContentContainer>
      <ContentContainer color="#fae0e0" isImg={true}>
        <img src={page8} alt="page-8" />
      </ContentContainer>

      <ContentContainer
        height="screen"
        color="#f6e7ea"
        className="flex justify-center items-center"
      >
        <div className="font-bold text-4xl w-1/4 flex justify-center">
          <div className="flex">
            <div>say hi!</div>

            <div className="ml-4">
              <Icon color="teal" name="heart" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex mt-4 justify-start">
            <div>
              <Icon
                size="huge"
                name="facebook"
                className="cursor-pointer"
                onClick={() => {
                  window.location.replace(
                    "https://www.facebook.com/babeformula/"
                  );
                }}
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
