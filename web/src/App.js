import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
import TestView1 from "./Views/TestView1";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Link,
  useHistory,
} from "react-router-dom";

// UI Components
import TopicTownView from "./Views/TopicTownView";
import LessonPage from "./Views/LessonView";
import sharingImage from "./sharing-info.png";
import speechImage from "./speech.jpeg";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/public_vs_private" exact>
            <LessonPage
              lessonTitle="Public vs. Private"
              lessonSubtitle="Which activities are okay in different places?"
              backgroundColor="#6B9AC4"
              modules={[
                {
                  label: "Things We Say",
                  labelColor: "white",
                  image: sharingImage,
                },
                {
                  label: "Public Places",
                  labelColor: "white",
                  image: speechImage,
                },
              ]}
            />
          </Route>

          <Route path="/" exact>
            {/* put Marcos's two button view here */}
            <TopicTownView />
          </Route>
        </Switch>
      </Router>

      {
        //  This TopicTownView displays 3 Topic Towns in two rows offset (labels are named within TopicTownView)
        // <TopicTownView />
      }
    </div>
  );
}

export default App;
