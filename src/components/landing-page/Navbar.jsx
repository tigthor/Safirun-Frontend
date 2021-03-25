import React, { useState } from "react";
import { Card, Row, Col, Modal, Space } from "antd";

const Navbar = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const howItWorksData = [
    {
      title: "Download the app",
      imgSrc: "../../assets/how_it_works1.png",
      body: "Available on Appstore and Google play",
    },
    {
      title: "Place yor order",
      imgSrc: "../../assets/how_it_works2.png",
      body: "Enter your address find what you are looking for",
    },
    {
      title: "We handle the rest",
      imgSrc: "../../assets/how_it_works3.png",
      body:
        "We work with the merchant to make sure everything is ready for delivery and pickup",
    },
    {
      title: "The runner arrives",
      imgSrc: "../../assets/how_it_works2.png",
      body:
        "..Or you pick it up.Either way,you will get the 20 delivery points for every $1 spent Enter your address find what you are looking for",
    },
  ];

  return (
    <div className="navbar">
      <i
        style={{
          width: "174px",
          height: "69px",
        }}
      />
      <div className="links">
        <Card className="nav_How_it_works">
          <button
            className="text_how_it_works"
            onClick={() => {
              return showModal();
            }}
          >
            How it works
          </button>

          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div className="div_how_it_works">
              <Row className="row_how_it_works">
                {howItWorksData.map((howItWorks) => (
                  <Col>
                    <Card className="how_it_works_card">
                      <Space size="middle" direction="vertical" wrap="true">
                        <h4>{howItWorks.title}</h4>
                        <img src={howItWorks.imgSrc} />
                        <p className="how_it_work_p">{howItWorks.body}</p>
                      </Space>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Modal>
        </Card>
        <a href="/create">
          <bold>
            <em> Sign in </em>
          </bold>
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
          <Login />
          </Modal>
        </a>
        <div className="text-box">
          <a href="#" className="btn btn-white btn-animate">
            <span
              style={{
                color: "#EAA24D",
                position: "relative",
                top: "-8px",
                left: "-1px",
              }}
            >
              Signup
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
