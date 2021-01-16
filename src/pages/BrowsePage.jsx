import React from "react";

import { useContent } from "../hooks";
import { selectionFilter } from "../utils";

import { BrowseContainer } from "../containers";

const BrowsePage = props => {
	const { series } = useContent("series");
	const { films } = useContent("films");
	//console.log(series);

	const slides = selectionFilter({ series, films });
	//console.log(slides);

	return <BrowseContainer slides={slides} />;
};

export default BrowsePage;
