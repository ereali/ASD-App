import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { ReactComponent as PlayButton } from '../button.svg';

const LessonModule = (props) => {
	const { label, imageLink } = props;
	return (
		<Button bsPrefix="lesson-module-button">
			<Container>
				<Row>
					<Col>
						<Image className="mt-2 mb-2" src={imageLink} fluid />
					</Col>
				</Row>
				<Row>
					<Col className="pr-0">
						<p className="lesson-module-label">{label}</p>
					</Col>
					<Col className="px-0">
						<a href="#">
							<PlayButton className="play-button" />
						</a>
					</Col>
				</Row>
			</Container>
		</Button>
	);
};

export default LessonModule;
