import React from "react";
import styled, { keyframes } from "styled-components";

const glowingInTheDark = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
`;

export const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  height: 2.8rem;
  letter-spacing: 0.1rem;
  line-height: 2.8rem;
  padding: 0 1.8rem;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  z-index: 0;
  color: #fff;
  border-color: transparent;
  &:before {
    content: "";
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 29%, rgba(146,233,251,0.9444152661064426) 75%);
    position: absolute;
    top: -2px;
    color: #000;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowingInTheDark} 20s linear infinite;
    opacity: 1;

    transition: opacity 0.3s;
  }
  &:active {
    color: #000;
  }
  &:active:after {
    background: transparent;
  }
  &:hover:before {
    opacity: 1;
  }
  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
  }
`;



export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1rem auto;
`;


const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const Div = styled.div`
  overflow: hidden;
`;

export const CardContainer = styled.div`
  background-color: #2b1e16;
`;

export const Card = styled.div`
  border: none;
  background-color: #2b1e16;
`;

export const CardImg = styled.img`
  width: 128px;
  height: 206px;
`;

export const InnerDiv = styled.div`
  margin-top: 8%;
`;

export const Search = styled.div`
  border: 1px solid grey;
  overflow: visible;
  margin-top: 4%;
  height: 60px;
`;

export const City = styled.div`
  overflow: visible;
  margin-top: 4%;
  li {
    cursor: pointer;
  }
`;

export const MainImg = styled.img`
  height: 540px;
  width: 630px;
`;

export const Logo = styled.img`
  height: 80px;
  width: 20%;
  margin-left: 7%;
  @media ${device.mobileL} {
    height: 30px;
    width: 30px;
    margin-left: 7%;
  }
`;
