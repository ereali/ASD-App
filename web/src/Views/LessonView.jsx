import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import LessonModule from "../Components/LessonModule";

const LessonPage = (props) => {
  const { lessonTitle, lessonSubtitle, backgroundColor, modules } = props;
  const LessonContainer = styled.div`
    background-color: ${backgroundColor};
    height: 100%;
  `;

  const Title = styled.h1`
    color: white;
  `;

  const Subtitle = styled.h4``;

  return (
    <LessonContainer>
      <Container>
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
              onClick={() =>
                window.location.replace("http://stackoverflow.com")
              }
              backgroundColor="#488B49"
            />
          </Row>
        ))}
      </Container>
    </LessonContainer>
  );
};

export default LessonPage;
