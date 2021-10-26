import { Col,Row, Container } from "react-bootstrap"
import Button from "../Components/Button.jsx"
import styled from "styled-components";
import { useHistory } from "react-router-dom";
function HomeView()
{
    const HomePage = styled.div`
    background-color: #578CE8;
    height = 100%;
    `;

    return (
           <HomePage>
           <Container fluid>
           <Row></Row>
            <Row>
            <Col>
            <Button
            color = "#1FB52F"
            //onClick={() => history.push("/topic-towns")}              //start
            height = "450px"
            width = "550px"
            children = "Play"
            fontsize = "5em"
            margin="10px 0px"
            borderradius="16px"
            padding="5px 15px"
            ></Button>
            </Col>
            <Col>
            <Button
            color = "#BFD00C"
           // onClick={() => history.push("/Settings")}                  //settings
            height = "450px"
            width = "550px"
            children = "Parent Portal"
            fontsize = "5em"
            margin="10px 0px"
        borderradius="16px"
        padding="5px 15px"
            ></Button>
            </Col>
           </Row>
           <Row></Row>
           </Container>
           </HomePage>







    )
}
export default HomeView;