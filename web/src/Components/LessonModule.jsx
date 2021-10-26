import styled from "styled-components";
import { Container, Row, Col, Image } from "react-bootstrap";
import { ReactComponent as PlayButtonSVG } from "../button.svg";

const PlayButton = styled(PlayButtonSVG)`
  width: 50px;
  transition: opacity 400ms;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: translateY(2px);
  }
  $(ModuleButton):hover & {
    opacity: 0.8;
  }
`;

const LessonModule = (props) => {
  const { label, image, backgroundColor, labelColor, onClick } = props;
  const ModuleButton = styled.button`
    background: ${backgroundColor};
    border-radius: 20px;
    width: 250px;
    border-style: outset;
    padding: 0;
    border: none;
  `;

  const ModuleLabel = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 28px;
    color: ${labelColor};
    justify-content: center;
    text-align: center;
  `;

  const ModuleImage = styled(Image)`
    height: 175px;
    object-fit: stretch;
    border-radius: 20px;
    width: 85%;
  `;
  return (
    <Container>
      <div className="centered-div">
        <ModuleButton onClick={onClick}>
          <Row>
            <Col>
              <ModuleImage className="mt-2 mb-2" src={image} fluid />
            </Col>
          </Row>
          <Row className="mx-0">
            <Col sm={8}>
              <ModuleLabel className="text-center">{label}</ModuleLabel>
            </Col>
            <Col className="px-0">
              <a href="#">
                <PlayButton />
              </a>
            </Col>
          </Row>
        </ModuleButton>
      </div>
    </Container>
  );
};

export default LessonModule;
