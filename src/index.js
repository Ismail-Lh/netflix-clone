import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "normalize.css";

import App from "./App";
import { GlobalStyles } from "./globalStyles";

ReactDOM.render(
	<Router>
		<GlobalStyles />
		<App />
	</Router>,
	document.getElementById("root")
);
