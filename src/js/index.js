// import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import your own components
import Home from "./component/home.jsx";

// create a root element for React
const rootElement = document.getElementById("root");

// render the App component inside the root element
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// call reportWebVitals function
reportWebVitals();

//render your react application
//ReactDOM.render(<Home />, document.querySelector("#app"));
