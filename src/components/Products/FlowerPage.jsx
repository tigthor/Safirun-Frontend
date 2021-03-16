import React, { Component } from 'react';
// import { MenuOutlined } from '@ant-design/icons'
import { Space, Card, Row, Col, Radio } from 'antd'
import { MdArrowForward } from 'react-icons/md';
import Layout from 'antd/lib/layout/layout';
import BestSelling from './flowerComponents/BestSelling'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import '../../App.css';




ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <BestSelling />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('florist')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
}