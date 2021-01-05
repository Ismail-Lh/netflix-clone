import React from "react";

import { Container, Input, Button, Text, Break } from "./GetStartedFormStyles";

export default function GetStartedForm({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

GetStartedForm.Input = function GetStartedFormInput({ ...restProps }) {
	return <Input {...restProps} />;
};

GetStartedForm.Button = function GetStartedFormButton({
	children,
	...restProps
}) {
	return (
		<Button {...restProps}>
			{children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
		</Button>
	);
};

GetStartedForm.Text = function GetStartedFormText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

GetStartedForm.Break = function GetStartedFormBreak({ ...restProps }) {
	return <Break {...restProps} />;
};
