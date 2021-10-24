import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// UI Components
import TopicTownView from "./Views/TopicTownView";
import TestView1 from "./Views/TestView1";

function App() {
  // const history = useHistory();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/public_vs_private" exact>
            <TestView1 />
          </Route>

          <Route path="/" exact>
            {/* put Marcos's two button view here */}
            <TopicTownView />
          </Route>
        </Switch>
      </Router>
      {}
    </div>
  );
}

export default App;
