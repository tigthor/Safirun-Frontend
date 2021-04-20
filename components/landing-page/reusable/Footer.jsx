import React, { useState } from "react";
import { Button, Divider, Card, Input, Space, Row, Col } from "antd";
import { LinkedinFilled, TwitterCircleFilled, InstagramFilled, YoutubeFilled, FacebookFilled } from '@ant-design/icons'
import { FaGooglePlay} from "react-icons/fa";
import { GrAppleAppStore } from 'react-icons/gr'

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

  const [fillColor, setFillColor] = useState('#54fc00')

  return (
    <div className='Footer'>
      <div className="FooterFirstSection">
        <div className="FooterFirstSection__LogosApps">
          <img src="../../../assets/Safirun-logo.png" />
          <br></br>
          <div className="FooterAppsSection">
            <GrAppleAppStore
              className="FooterAppsSection__AppleStore"
              color={fillColor}
            />
            <FaGooglePlay
              style={{
                width: '50%',
                height: '50%'
              }}
            />
          </div>
        </div>
        <Space
          size="large"
          direction="horizontal"
          className="FooterLinksSection"
          wrap='true'
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
            <InstagramFilled
              className='text-4xl rounded'
              twoToneColor={fillColor}
              fill={fillColor}
            />
          </div>
          <div>
            <LinkedinFilled
              className='text-4xl rounded'
              twoToneColor={fillColor}
              fill={fillColor}
            />
          </div>
          <div>
            <YoutubeFilled
              className='text-4xl rounded'
              twoToneColor={fillColor}
              fill={fillColor}
            />
          </div>
          <div>
            <FacebookFilled
              className='text-4xl rounded'
              twoToneColor={fillColor}
              fill={fillColor}
            />
          </div>
          <div>
            <TwitterCircleFilled
              className='text-4xl rounded'
              twoToneColor={fillColor}
              fill={fillColor}
            />
          </div>
        </div>
        <div>
          <div
            style={{ color: "white" }}
          >
            <p>&#169; Copyright 2021 Safirun Logistics Ltd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
