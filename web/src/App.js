import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Card } from 'react-bootstrap';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import LessonModule from './Components/LessonModule';
import sharinginfo from './sharinginfo.png';

function App() {
	return (
		<div className="App">
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Collapse>
						<Navbar.Brand href="#home">
							<img alt="" src="logo192.png" width="30" height="30" className="d-inline-block align-top" />
							I-CCEW SoBA 2021
						</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link>Home</Nav.Link>
							<Nav.Link>{/* <Link to="/features">Features</Link> */}</Nav.Link>
							<Nav.Link>{/* <Link to="/pricing">Pricing</Link> */}</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className="centered-div">
				<LessonModule label="Sharing Information" imageLink={sharinginfo} />
				<LessonModule label="Information" imageLink={sharinginfo} />
			</div>
		</div>
	);
}

export default App;
