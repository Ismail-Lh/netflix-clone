import React from "react";

import { Header, Profiles } from "../components";
import * as ROUTES from "../Routs";
import logo from "../logo.svg";

function ProfileContainer({ user, setProfile }) {
	//console.log(user);
	return (
		<>
			<Header bg={false}>
				<Header.Container>
					<Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
				</Header.Container>
			</Header>

			<Profiles>
				<Profiles.Title>Who's watching?</Profiles.Title>
				<Profiles.List>
					<Profiles.User
						onClick={() =>
							setProfile({
								displayName: user.displayName,
								photoURL: user.photoURL
							})
						}
					>
						<Profiles.Picture src={user.photoURL} />
						<Profiles.Name>{user.displayName}</Profiles.Name>
					</Profiles.User>
				</Profiles.List>
			</Profiles>
		</>
	);
}

export default ProfileContainer;

// 5:12:00
