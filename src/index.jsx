import './App.css';
import Homepage from './components/Landingpage';
import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

let Home = () => <div>Home</div>
let Dash = () => <div>Dash</div>
const NotFound = () => (
  <div>Sorry, nothing here.</div>
)

render(
    <Router>
        <Homepage path="/" />
        <Dash path="dashboard" />
        <NotFound default />
    </Router>,
    document.getElementById('root'),
)

if (import.meta.hot) {
  import.meta.hot.accept();
}