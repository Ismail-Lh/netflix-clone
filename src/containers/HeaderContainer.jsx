import React from "react";

import logo from "../logo.svg";
import * as ROUTES from "../Routs";

import { Header, GetStartedForm, Feature } from "../components";

function HeaderContainer({ children }) {
	return (
		<Header>
			<Header.Frame>
				<Header.Logo url={ROUTES.HOME} alt="Netflix" src={logo} />
				<Header.ButtonLink url={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
			</Header.Frame>

			<Feature>
				<Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
				<Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>

				<GetStartedForm>
					<GetStartedForm.Input placeholder="Email address" />
					<GetStartedForm.Button>Try it now</GetStartedForm.Button>
					<GetStartedForm.Break />
					<GetStartedForm.Text>
						Ready to watch? Enter your email to create or restart your
						membership.
					</GetStartedForm.Text>
				</GetStartedForm>
			</Feature>
		</Header>
	);
}

export default HeaderContainer;
