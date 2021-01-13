import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";

import * as ROUTES from "./Routs";
import { IsUserRedirect, ProtectedRoute } from "./helpers/RoutesHelper";
import { useAuthListener } from "./hooks";

import { HomePage, BrowsePage, SignInPage, SignUpPage } from "./pages";

function App() {
	const { user } = useAuthListener();
	console.log(user);

	return (
		<Router>
			<Switch>
				<IsUserRedirect
					exact
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_IN}
				>
					<SignInPage />
				</IsUserRedirect>

				<IsUserRedirect
					exact
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_UP}
				>
					<SignUpPage />
				</IsUserRedirect>

				<ProtectedRoute exact user={user} path={ROUTES.BROWSE}>
					<BrowsePage />
				</ProtectedRoute>

				<IsUserRedirect
					exact
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.HOME}
				>
					<HomePage />
				</IsUserRedirect>
			</Switch>
		</Router>
	);
}

export default App;
