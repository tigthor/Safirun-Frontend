import styled from "styled-components";
import React from "react";

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
