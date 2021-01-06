import { Switch, Route } from "react-router-dom";

import * as ROUTES from "./Routs";
import { HomePage, BrowsePage, SignInPage, SignUpPage } from "./pages";

function App() {
	return (
		<Switch>
			<Route exact path={ROUTES.HOME} render={() => <HomePage />} />
			<Route exact path={ROUTES.BROWSE} render={() => <BrowsePage />} />
			<Route exact path={ROUTES.SIGN_UP} render={() => <SignUpPage />} />
			<Route exact path={ROUTES.SIGN_IN} render={() => <SignInPage />} />
		</Switch>
	);
}

export default App;

// 3:09:48
