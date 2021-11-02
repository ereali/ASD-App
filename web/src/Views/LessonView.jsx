import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LessonModule from "../Components/LessonModule";

const LessonView = (props) => {
  const { lessonTitle, lessonSubtitle, backgroundColor, modules } = props;
  const LessonContainer = styled.div`
    background-color: ${backgroundColor};
    height: 100%;
  `;

  const Title = styled.h1`
    color: white;
    font-size: 3vw;
  `;

  const Subtitle = styled.h4`
    font-size: 2vw;
  `;

  const history = useHistory();
  return (
    <LessonContainer>
      <Container fluid>
        <Row>
          {/* <BackButton /> */}
          <Title className="text-center">{lessonTitle}</Title>
        </Row>
        <Row>
          <Subtitle className="text-center">{lessonSubtitle}</Subtitle>
        </Row>

        {modules.map((module) => (
          <Row>
            <LessonModule
              label={module.label}
              labelColor={module.labelColor}
              image={module.image}
              // Replace link with routing
              onClick={() => history.push(module.url)}
              backgroundColor="#488B49"
            />
          </Row>
        ))}
      </Container>
    </LessonContainer>
  );
};

export default LessonView;
