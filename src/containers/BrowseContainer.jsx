import React, { useContext, useState, useEffect } from "react";
import ProfileContainer from "./ProfileContainer";
import { FirebaseContext } from "../context";

import { Loading } from "../components";

export default function BrowseContainer({ slides }) {
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true);

	const { firebase } = useContext(FirebaseContext);
	const user = firebase.auth().currentUser || {};

	useEffect(() => {
		//console.log(profile);
		setTimeout(function() {
			setLoading(false);
		}, 3000);
	}, [profile.displayName]);

	return profile.displayName ? (
		loading ? (
			<Loading src={user.photoURL} />
		) : (
			<Loading.ReleaseBody />
		)
	) : (
		<ProfileContainer user={user} setProfile={setProfile} />
	);
}
