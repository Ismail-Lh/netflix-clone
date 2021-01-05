import React from "react";

import Accordion from "../components/Accordion/Accordion";
import GetStartedForm from "../components/GetStartedForm/GetStartedForm";
import faqsData from "../fixtures/faqs.json";

function FaqsContainer(props) {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			<Accordion.Frame>
				{faqsData.map(item => (
					<Accordion.Item key={item.id}>
						<Accordion.Header>{item.header}</Accordion.Header>
						<Accordion.Body>{item.body}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion.Frame>

			<GetStartedForm>
				<GetStartedForm.Input placeholder="Email address" />
				<GetStartedForm.Button>Try it now</GetStartedForm.Button>
				<GetStartedForm.Break />
				<GetStartedForm.Text>
					Ready to watch? Enter your email to create or restart your membership.
				</GetStartedForm.Text>
			</GetStartedForm>
		</Accordion>
	);
}

export default FaqsContainer;
