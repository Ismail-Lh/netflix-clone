import React from "react";
import { Route, Redirect } from "react-router-dom";

import * as ROUTES from "../Routs";

export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
	return (
		<Route
			{...restProps}
			render={() => {
				if (!user) {
					return children;
				} else if (user) {
					return <Redirect to={{ pathname: loggedInPath }} />;
				}

				return null;
			}}
		/>
	);
}

export function ProtectedRoute({ user, children, ...restProps }) {
	return (
		<Route
			{...restProps}
			render={({ location }) => {
				if (user) {
					return children;
				} else if (!user) {
					return (
						<Redirect
							to={{ pathname: ROUTES.SIGN_IN, state: { from: location } }}
						/>
					);
				}

				return null;
			}}
		/>
	);
}
