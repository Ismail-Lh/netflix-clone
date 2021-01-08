import React from "react";

import {
	HeaderContainer,
	JumbotronContainer,
	FaqsContainer,
	FooterContainer
} from "../containers";

import { Feature, GetStartedForm } from "../components";

const HomePage = props => {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>
						Unlimited films, TV programmes and more.
					</Feature.Title>
					<Feature.SubTitle>
						Watch anywhere. Cancel at any time.
					</Feature.SubTitle>

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
			</HeaderContainer>

			<JumbotronContainer />
			<FaqsContainer />
			<FooterContainer />
		</>
	);
};

export default HomePage;
