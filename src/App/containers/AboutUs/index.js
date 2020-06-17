import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Divider, Button, Icon } from "semantic-ui-react";
import Header from "../../components/Header";

import page1 from "../../../assets/aboutUs/Page1.png";
import page2 from "../../../assets/aboutUs/Page2.png";
import page3 from "../../../assets/aboutUs/Page3.png";
import product1 from "../../../assets/aboutUs/product1.png";
import product2 from "../../../assets/aboutUs/product2.png";
import product3 from "../../../assets/aboutUs/product3.png";
import page5 from "../../../assets/aboutUs/Page5.png";
import page7 from "../../../assets/aboutUs/Page7.png";

function importAll(r) {
  return r.keys().map(r);
}

const feedbackImages = importAll(
  require.context("../../../assets/feedback", false, /\.(PNG|png|jpe?g|svg)$/)
);

const ContentContainer = styled.div`
  background-color: ${(props) => props.color};
  height: ${(props) =>
    !props.isImg && (props.height === "half" ? "20rem" : "40rem")};
`;

export default () => {
  const history = useHistory();
  const [feedbackToDisplay, setFeedbackToDisplay] = useState([0, 1, 2]);
  return (
    <div>
      {" "}
      <Header history={history} />
      <ContentContainer
        color="#fae0e0"
        className="flex justify-center flex-col"
        isImg={true}
      >
        <img src={page1} alt="page1" />
      </ContentContainer>
      <ContentContainer color="#a0a3bb" className="flex" isImg={true}>
        <div
          style={{
            backgroundColor: "#a0a3bb",
          }}
          className="w-1/2"
        >
          <img src={page2} alt="page-2" />
        </div>
        <div className="w-1/2 bg-white flex flex-col justify-center">
          <div className="text-center">
            <div className="font-bold text-4xl">your hair's main babe. </div>{" "}
            <div className="text-lg font-medium m-auto w-1/2 mt-4">
              Babe Formula is your hair's new best friend. All our hair potions
              are infused with rich-for-you ingredients guaranteed to make your
              hair, smooth and shiny. We especially crafted our products to suit
              all hair types so you can rock your inner babe all-day-everyday
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <Button
              style={{
                backgroundColor: " #f9c5d1",
                "background-image":
                  " linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%)",
                color: "#fff",
              }}
              onClick={() => {
                history.push("/aboutUs/learnMore");
              }}
            >
              Learn more
            </Button>
          </div>
        </div>
      </ContentContainer>
      <ContentContainer
        color="#fae0e0"
        className="flex justify-center flex-col"
        isImg={true}
      >
        <img src={page3} alt="page3" />
      </ContentContainer>
      <ContentContainer
        color="#fff"
        className="flex justify-around items-center"
      >
        <div className="bg-teal-500  m-24 rounded relative">
          <img src={product1} alt="product1" />
          <div
            style={{
              "background-color": " #f9c5d1",
              "background-image":
                " linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%)",
            }}
            className="h-full w-full opacity-0 hover:opacity-100 flex flex-col justify-center absolute top-0"
          >
            <div className="font-bold text-lg text-center">
              babe nectar shampoo and conditioner
            </div>

            <div className="px-4 mt-4 text-center text-sm">
              You like sweets? You won't get enough of nectar's rich, saccharine
              scent! It's like treating your hair with candy -- only difference
              is, this one's perfectly healthy -- for your hair, that is!
            </div>
          </div>
        </div>
        <div className="bg-teal-500 m-24 rounded relative">
          <img src={product2} alt="product2" />
          <div
            style={{
              "background-color": " #f9c5d1",
              "background-image":
                " linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%)",
            }}
            className="h-full w-full opacity-0 hover:opacity-100 flex flex-col justify-center absolute top-0"
          >
            <div className="font-bold text-lg text-center">
              babe gleam and hair spray
            </div>

            <div className="px-4 mt-4 text-center  text-sm">
              Frizz no more! Tame those treses with a few spritz of this hair
              spray! Guaranteed to resists humidity, add shine to your hair and
              hold for a silky, lustrous feel you can't get your hands off!
            </div>
          </div>
        </div>{" "}
        <div className="bg-teal-500 m-24 rounded relative">
          <img src={product3} alt="product3" />
          <div
            style={{
              "background-color": " #f9c5d1",
              "background-image":
                " linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%)",
            }}
            className="h-full w-full opacity-0 hover:opacity-100 flex flex-col justify-center absolute top-0"
          >
            <div className="font-bold text-lg text-center">
              babe blossom shampoo and conditioner
            </div>

            <div className="px-4 mt-4 text-center text-sm">
              If you're into velvet flowery fragrances, this set is perfect for
              you! These babes boast of hydrolyzed keratin and
              double-moisturizing action that feels oh so light and oh so right!
              it would be a crime not to let your hair down.
            </div>
          </div>
        </div>
      </ContentContainer>
      <ContentContainer
        color="#fae0e0"
        className="flex justify-center flex-col cursor-pointer"
        isImg={true}
      >
        <img
          src={page5}
          alt="page-5"
          onClick={() => {
            history.push("/aboutUs/resellersClub");
          }}
        />
      </ContentContainer>
      <ContentContainer
        color="#fff"
        className="flex justify-around items-center my-32"
      >
        <div className="w-1/12 ml-4">
          <Icon
            onClick={() => {
              setFeedbackToDisplay((feedbackToDisplay) =>
                feedbackToDisplay.map((fi, i) =>
                  fi - 3 <= -1 ? feedbackImages.length - 1 - i : fi - 3
                )
              );
            }}
            size="big"
            name="angle left"
            className="cursor-pointer"
          />{" "}
        </div>
        <div className="flex justify-around items-center w-10/12">
          {feedbackImages.map(
            (feedbackImage, i) =>
              feedbackToDisplay.includes(i) && (
                <div
                  key={feedbackImage}
                  className="bg-teal-500 w-1/3 m-8 rounded"
                >
                  <img src={feedbackImage} alt="feedback-image" />
                </div>
              )
          )}
        </div>
        <div className="w-1/12 flex justify-end mr-4">
          <Icon
            onClick={() => {
              setFeedbackToDisplay((feedbackToDisplay) =>
                feedbackToDisplay.map((fi, i) =>
                  fi + 3 > feedbackImages.length - 1 ? i : fi + 3
                )
              );
            }}
            size="big"
            name="angle right"
            className="cursor-pointer"
          />{" "}
        </div>
      </ContentContainer>
      <ContentContainer
        color="#fae0e0"
        className="flex justify-center flex-col"
        isImg={true}
      >
        <img src={page7} alt="page-7" />
      </ContentContainer>
      <ContentContainer
        height="screen"
        color="#fae0e0"
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
