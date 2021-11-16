import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Container, Nav, Card } from "react-bootstrap";
import UnderDevelopmentView from "./Views/UnderDevelopmentView";
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
import DNDGame from "./Views/dndgame";

// Assets
import sharingImage from "./sharing-info.png";
import speechImage from "./speech.jpeg";

function App() {
  const history = useHistory();

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

          <Route path="/dndgame">
            <DNDGame />
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
                  url: "/under-development",
                },
              ]}
            />
          </Route>
          <Route path="/public-private-content" exact>
            <PublicPrivateContentView message="Click a place to visit it!" />
          </Route>
          <Route path="/check-for-understanding" exact>
            <QuizView />
          </Route>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/under-development">
            <UnderDevelopmentView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
