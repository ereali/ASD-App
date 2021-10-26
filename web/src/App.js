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
import LessonView from "./Views/LessonView";
import sharingImage from "./sharing-info.png";
import speechImage from "./speech.jpeg";

/*
GUIDE TO ROUTING

1 import { useHistory } from "react-router-dom";  (in your component file)
2 add a url prop to your component matching a Route path
3 onClick={() => history.goBack() (for a back button) 
4 onClick={() => history.push(url)) (for a button that routes to the url prop)

*/

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/topic-towns">
            <TopicTownView />
          </Route>

          <Route path="/public_vs_private">
            <LessonView
              lessonTitle="Public vs. Private"
              lessonSubtitle="Which activities are okay in different places?"
              backgroundColor="#6B9AC4"
              modules={[
                {
                  label: "Things We Say",
                  labelColor: "white",
                  image: sharingImage,
                  url: "/drag-and-drop-game",
                },
                {
                  label: "Public Places",
                  labelColor: "white",
                  image: speechImage,
                  url: "/test-game",
                },
              ]}
            />
          </Route>
          <Route path="/drag-and-drop-game" exact></Route>
          <Route path="/check-for-understanding" exact></Route>
          <Route path="/" exact>
            {/* put Marcos's two button view here
                parent button url="parent-portal" 
                child button url="topic-towns 
                remove TopicTownView after adding Marcos's view*/}
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
