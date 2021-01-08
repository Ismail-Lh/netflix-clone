import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import * as ROUTES from "./Routs";
import { HomePage, BrowsePage, SignInPage, SignUpPage } from "./pages";

function App() {
	return (
		<Router>
		<Switch>
			<Route exact path={ROUTES.HOME} render={() => <HomePage />} />
			<Route exact path={ROUTES.BROWSE} render={() => <BrowsePage />} />
			<Route exact path={ROUTES.SIGN_UP} render={() => <SignUpPage />} />
			<Route exact path={ROUTES.SIGN_IN} render={() => <SignInPage />} />
		</Switch>
		</Router>
	);
}

export default App;

// 3:09:48
