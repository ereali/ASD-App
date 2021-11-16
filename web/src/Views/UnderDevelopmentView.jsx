import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function UnderDevelopmentView() {
  const history = useHistory();

  return (
    <div>
      This page is still under development! Please click the back button on this
      page or the back button on your browser.
      <ul>
        Currently, these parts of the website are under development:
        <li>All parent portal settings buttons </li>
        <li>All topic towns except for "Public vs Private" </li>
        <li>The second subtopic in "Public vs Private" </li>
        <li>Additional quiz questions </li>
      </ul>
      Thank you!
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
}

export default UnderDevelopmentView;
