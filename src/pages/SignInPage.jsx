import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { FirebaseContext } from "../context/FirebaseContext";
import * as ROUTES from "../Routs";

import { HeaderContainer, FooterContainer } from "../containers";
import { Form } from "../components";

const SignInPage = props => {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	// Check if the emailAddress & password are valid
	const isInvalid = emailAddress === "" || password === "";

	const handelSubmit = e => {
		e.preventDefault();

		firebase
			.auth()
			.signInWithEmailAndPassword(emailAddress, password)
			.then(() => {
				// Push to the BrowsePage
				history.push(ROUTES.BROWSE);
			})
			.catch(err => {
				setEmailAddress("");
				setPassword("");
				setError(err.message);
			});
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={handelSubmit}>
						<Form.Input
							type="text"
							placeholder="Email Address"
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							type="password"
							placeholder="Password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>

						<Form.Submit
							disabled={isInvalid}
							type="submit"
							data-testid="sign-up"
						>
							Sign Up
						</Form.Submit>
					</Form.Base>

					<Form.Text>
						New to Netflix?{" "}
						<Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. Learn more.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
};

export default SignInPage;
