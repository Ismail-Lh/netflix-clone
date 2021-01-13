import React from "react";

import { useContent } from "../hooks";

const BrowsePage = props => {
	const { series } = useContent("series");
	const { films } = useContent("films");
	//console.log(series);

	return <h1>I'am the BrowsePage</h1>;
};

export default BrowsePage;
