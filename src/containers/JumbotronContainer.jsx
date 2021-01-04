import Jumbotron from "../components/Jumbotron/Jumbotron";
import JumboData from "../fixtures/jumboData";

function JumbotronContainer() {
	return (
		<Jumbotron.Container>
			{JumboData.map(item => (
				<Jumbotron key={item.id} direction={item.direction}>
					<Jumbotron.Pane>
						<Jumbotron.Title>{item.title}</Jumbotron.Title>
						<Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
					</Jumbotron.Pane>
					<Jumbotron.Pane>
						<Jumbotron.Image src={item.image} alt={item.alt} />
					</Jumbotron.Pane>
				</Jumbotron>
			))}
		</Jumbotron.Container>
	);
}

export default JumbotronContainer;
