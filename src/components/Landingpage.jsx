import React from 'react';
import Firstscreen from './Firstscreen';
import Connect from './landing-page/reusable/connectWithus';
import Footer from './landing-page/reusable/Footer';
import Locserved from './landing-page/locationWeServe';
import marketplace from './landing-page/marketplace';
import Readyorder from './landing-page/Readyorder';
import Peoplesay from './landing-page/Peoplepanel';
import Onmenu from './landing-page/Whatsonmenu';
import Favresto from './landing-page/FavResto';
import Whysafi from './landing-page/Whysafirun';


const Homepage = () => {
  return (
    <div>
      <Firstscreen />
      <marketplace />
      <Favresto />
      <Onmenu />
      <Whysafi />
      <Peoplesay />
      <Connect />
      <Locserved />
      <Readyorder />
      <Footer />
    </div>
  );
};

export default Homepage;
