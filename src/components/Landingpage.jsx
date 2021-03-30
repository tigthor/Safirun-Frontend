import React from 'react';
import Firstscreen from './Firstscreen';
import Connect from './landing-page/reusable/connectWithus';
import Footer from './landing-page/reusable/Footer';
import Locserved from './landing-page/locationWeServe';
import Marketplace from './landing-page/Marketplace';
import Readyorder from './landing-page/Readyorder';
import Peoplesay from './landing-page/Peoplepanel';
import Onmenu from './landing-page/Whatsonmenu';
import Favresto from './landing-page/FavResto';
import Whysafi from './landing-page/Whysafirun';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Space } from 'antd'


const Homepage = () => {
    return (
        // <Router>
            <div className=".bg-">
                <Space direction="vertical" size="large" wrap='true'>
                    <Firstscreen />
                    <Marketplace className="marketplace" />
                    <Favresto />
                    <Onmenu />
                    {/* <Whysafi /> */}
                    <Peoplesay />
                    <Locserved />
                    <Readyorder />
                    <Footer />
                </Space>
            </div>
        // </Router>
    );
};

export default Homepage;
