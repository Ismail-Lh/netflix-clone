import React from "react";

import logo from "../logo.svg";
import * as ROUTES from "../Routs";

import { Header } from "../components";

function HeaderContainer({ children }) {
	return (
		<Header>
			<Header.Container>
				<Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
				<Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
			</Header.Container>

			{children}
		</Header>
	);
}

export default HeaderContainer;
