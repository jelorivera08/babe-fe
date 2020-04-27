import React, { useEffect, useState } from "react";
import styled from "styled-components";
import cx from "classnames";
import { Icon } from "semantic-ui-react";

import girl1 from "../../../assets/images/girl1.png";
import product1 from "../../../assets/images/product1.png";
import product2 from "../../../assets/images/product2.png";
import product3 from "../../../assets/images/product3.png";

const BackgroundContainer = styled.div`
  background: linear-gradient(-45deg, #f9c5d1, #e73c7e, #23a6d5, #9795ef);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Babe = styled.span`
  font-family: "Lobster", cursive;
`;

const ImageContainer = styled.div`
  height: 30rem;
`;

const Img = styled.img`
  height: 35rem;
  border-radius: 5rem;
  position: absolute;
  left: -100%;
  transition: 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &.slide {
    left: 10%;
  }
`;

const TextSlideContainer = styled.div`
  transition: 2s ease-in;
  opacity: 0;

  &.fadeIn {
    opacity: 1;
  }
`;

const TextContainer = styled.div`
  z-index: 1;
`;

const ImgProduct = styled.img`
  padding: 2rem;
  border-radius: 5rem;
  opacity: 0;
  transition: 2s ease-out;

  &.popIn {
    opacity: 1;
  }
`;

export default () => {
  const [aboutUsContainer, setAboutUsContainer] = useState(null);
  const [animate, setAnimate] = useState([]);

  useEffect(() => {
    setAboutUsContainer(document.getElementById("aboutUs"));
  }, []);

  useEffect(() => {
    if (aboutUsContainer) {
      aboutUsContainer.addEventListener("scroll", () => {
        if (aboutUsContainer.scrollTop >= 500 && !animate.includes(1)) {
          setAnimate([...animate, 1]);
        }

        if (aboutUsContainer.scrollTop >= 1300 && !animate.includes(2)) {
          setAnimate([...animate, 2]);
        }
      });

      return () => aboutUsContainer.removeEventListener("scroll", () => {});
    }
  }, [aboutUsContainer, animate]);

  return (
    <BackgroundContainer id='aboutUs' className='h-screen overflow-y-auto'>
      <div className='flex flex-col justify-center text-white h-full'>
        <div className='m-64'>
          <div className='text-6xl'>
            {`Hey, `}
            <Babe>babe</Babe>.
          </div>

          <div className='text-3xl w-4/5'>
            Meet our babe-inducing treats that'll satisfy your hair's cravings.
          </div>

          <div
            style={{
              width: "max-content",
            }}
            onClick={() =>
              aboutUsContainer.scrollTo({
                top: 800,
                behavior: "smooth",
              })
            }
            className='border flex border-gray-200 py-4 px-8 text-center mt-8 cursor-pointer rounded hover:bg-teal-400'
          >
            <div> Get to know our products now</div>
            <div className='ml-2'>
              <Icon name='arrow circle down' />
            </div>
          </div>
        </div>
      </div>

      <div className='py-32 h-full'>
        <div className='flex justify-around'>
          <ImageContainer className={cx("w-1/2 flex relative justify-center")}>
            <Img
              src={girl1}
              className={cx({ slide: animate.includes(1) })}
              alt='babe-1'
            />
          </ImageContainer>

          <TextContainer className={cx("w-1/2 mt-24 relative")}>
            <TextSlideContainer className={cx({ fadeIn: animate.includes(1) })}>
              <div className='text-white text-4xl'>Your hair's main babe.</div>
              <div className='text-white w-4/5 mt-4 text-xl text-left'>
                Babe Formula is your hair's new best friend. All our hair
                potions are infused with rich-for-you ingredients guaranteed to
                make your hair soft, smooth and shiny. We especially crafted our
                products to suit all hair types so you can rock your inner babe
                all-day everyday!
              </div>
            </TextSlideContainer>
          </TextContainer>
        </div>
      </div>

      <div className='h-1/2 pb-24'>
        <div className='flex justiy-around'>
          <div>
            <ImgProduct
              className={cx({ popIn: animate.includes(2) })}
              alt='product1'
              src={product1}
            ></ImgProduct>
          </div>
          <div>
            <ImgProduct
              className={cx({ popIn: animate.includes(2) })}
              alt='product2'
              src={product2}
            ></ImgProduct>
          </div>
          <div>
            <ImgProduct
              className={cx({ popIn: animate.includes(2) })}
              alt='product3'
              src={product3}
            ></ImgProduct>
          </div>
        </div>
      </div>
    </BackgroundContainer>
  );
};
