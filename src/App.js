import React, {useContext} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import * as ROUTES from "./Routs";
import { HomePage, BrowsePage, SignInPage, SignUpPage } from "./pages";
import {FirebaseContext} from './context/FirebaseContext';

function App() {
	const {firebase} = useContext(FirebaseContext);
	firebase.firestore().collection('films').get().then((item) => {
		item.docs.forEach((doc) => {
			console.log(doc.data());
		});

	})
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
