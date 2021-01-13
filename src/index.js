import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";

import { FirebaseContext } from "./context";

import App from "./App";
import { GlobalStyles } from "./globalStyles";
import { firebase } from "./lib/firebase.prod";

ReactDOM.render(
	<FirebaseContext.Provider value={{ firebase }}>
		<GlobalStyles />
		<App />
	</FirebaseContext.Provider>,
	document.getElementById("root")
);
