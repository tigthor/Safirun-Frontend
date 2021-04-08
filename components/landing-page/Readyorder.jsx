import React from "react";
import { MdArrowForward } from "react-icons/md";
import { Button, Input, Space } from "antd";
import SearchBar from "./reusable/SearchBar";

const Readyorder = () => {
  return (
    <div className='flex flex-row flex-wrap h-auto mx-auto my-auto align-baseline justify-evenly'>
      <Space size="middle" direction="vertical" wrap="true" className='flex flex-col items-center content-center justify-center w-2/4'>
        <h2
          style={{
            textAlign: "left",
            fontSize: "40px",
          }}
        >
          Ready To Order
          </h2>
        <p
          style={{
            textAlign: "left",
          }}
        >
          Browser local restaurants and stores for<br></br>delively by enterig
            your adress below
          </p>
        <div className='w-40 lg:w-64 md:w-32 sm:w-40'>
          <SearchBar />
        </div>
      </Space>
      <img
        src="../assets/order.png"
        style={{ width: "50%" }}
      />
    </div>
  );
};

export default Readyorder;
