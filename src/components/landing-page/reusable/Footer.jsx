import React, { useState } from "react";
import { Button, Divider, Card, Input, Space, Row, Col } from "antd";

const Footer = () => {
  const [footerData, setFooterData] = useState([
    [
      { mainTitle: "OUR COMPANY" },
      [
        {
          title: "About Us",
          link: "",
        },
        {
          title: "Product",
          link: "",
        },
        {
          title: "FAQ",
          link: "",
        },
        {
          title: "Career",
          link: "",
        },
        {
          title: "Contact Us",
          link: "",
        },
      ],
    ],
    [
      { mainTitle: "PARTNERS" },
      [
        {
          title: "SafiRun For Business",
          link: "",
        },
        {
          title: "Restaurant Sign Up",
          link: "",
        },
        {
          title: "Become a runner",
          link: "",
        },
        {
          title: "Terms of use",
          link: "",
        },
        {
          title: "Privacy Policy",
          link: "",
        },
      ],
    ],
    [
      { mainTitle: "AREAS" },
      [
        {
          title: "KIGALI",
          link: "",
        },
        {
          title: "RUBAVU",
          link: "",
        },
      ],
    ],
  ]);

  return (
    <div className="Footer">
    <Space size='small' direction='vertical'>
      <div className="FooterFirstSection">
        <div className="FooterFirstSection__LogosApps">
          <img src="assets/Safirun-logo.png" />
          <br></br>
          <div className="FooterAppsSection">
            <img
              src="assets/apple2.png"
              className="FooterAppsSection__AppleStore"
            />
            <img
              src="assets/pics/googlepaly.png"
              className="FooterAppsSection__GooglePlay"
            ></img>
          </div>
        </div>
        <Space
          size="large"
          direction="horizontal"
          className="FooterLinksSection"
        >
          <Col className="FooterBoxElement">
            {footerData[0][0].mainTitle}
            <Space size="small" direction="vertical">
              {footerData[0][1].map((data) => (
                <Row className="FooterElement">{data.title}</Row>
              ))}
            </Space>
          </Col>

          <Col className="FooterBoxElement">
            {footerData[1][0].mainTitle}
            <Space size="middle" direction="vertical">
              {footerData[1][1].map((data) => (
                <Row className="FooterElement">{data.title}</Row>
              ))}
            </Space>
          </Col>

          <Col className="FooterBoxElement">
            {footerData[2][0].mainTitle}
            <Space size="middle" direction="vertical">
              {footerData[2][1].map((data) => (
                <Row className="FooterElement">{data.title}</Row>
              ))}
            </Space>
          </Col>
        </Space>
      </div>

      <hr className="FooterWhiteLine"></hr>
      <div className="footerChil3">
        <div className="footerChil4">
          <div>
            <img src="../../assets/ico3.png"></img>
          </div>
          <div>
            <img
              src="../../assets/ico1.png"
              style={{ marginLeft: "5px" }}
            ></img>
          </div>
          <div>
            <img src="../../assets/ico2.png"></img>
          </div>
          <div>
            <img
              src="../../assets/ico5.png"
              style={{ marginLeft: "5px" }}
            ></img>
          </div>
          <div>
            <img
              src="../../assets/ico4.png"
              style={{ marginLeft: "5px" }}
            ></img>
          </div>
        </div>
        <div></div>
        <div
          style={{ marginLeft: "840px", color: "white", marginTop: "-50px" }}
        >
          <p>&#169; Copyright 2021 Safirun Logistics Ltd</p>
        </div>
      </div>
      </Space>
    </div>
  );
};

export default Footer;
