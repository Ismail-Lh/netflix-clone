import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";

import App from "./App";
import { GlobalStyles } from "./globalStyles";

ReactDOM.render(
	<>
		<GlobalStyles />
		<App />
	</>,
	document.getElementById("root")
);
