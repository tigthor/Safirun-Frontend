import './App.css';
import Homepage from './components/Landingpage';
import React from "react"
import { render } from "react-dom"
import { Router, Link } from "@reach/router";

let Home = () => <div>Home</div>
let Dash = () => <div>Dash</div>

render(
    <Router>
        <Homepage path="/" className='App'/>
        <Dash path="dashboard" />
    </Router>,
    document.getElementById('root'),
)

// function App() {
//   // Create the count state.

//   // Return the App component.
//   return (
//     <div className="App">
//       <Homepage />
//     </div>
//   );
// }

// export default App;
