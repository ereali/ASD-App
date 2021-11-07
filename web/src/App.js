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
import HomeView from "./Views/HomeView";
import TopicTownView from "./Views/TopicTownView";
import LessonView from "./Views/LessonView";
import Settings from "./Views/Settings";
import QuizView from "./Views/quizview";
import PublicPrivateContentView from "./Views/PublicPrivateContentView";

// Assets
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

          <Route path="/settings">
            <Settings />
          </Route>

          <Route path="/public-vs-private">
            <LessonView
              lessonTitle="Public vs. Private"
              lessonSubtitle="Which activities are okay in different places?"
              backgroundColor="#6B9AC4"
              modules={[
                {
                  label: "Places",
                  labelColor: "white",
                  image: speechImage,
                  url: "/public-private-content",
                },
                {
                  label: "Things We Say",
                  labelColor: "white",
                  image: sharingImage,
                  url: "/check-for-understanding",
                },
              ]}
            />
          </Route>
          <Route path="/drag-and-drop-game" exact></Route>
          <Route path="/public-private-content" exact>
            <PublicPrivateContentView message="Click a place to visit it!" />
          </Route>
          <Route path="/check-for-understanding" exact>
            <QuizView />
          </Route>
          <Route path="/" exact>
            <HomeView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
