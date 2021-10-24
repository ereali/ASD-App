import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function TestView1() {
  const history = useHistory();

  return (
    <div>
      hello hello testing
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
}

export default TestView1;
