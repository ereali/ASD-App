import styled from "styled-components";

function Avatar(props) {
  const AvatarPage = styled.img`
    position: absolute;
    height: 12vw;
    left: ${props.positionLeft};
    opacity: ${props.opacity};
  `;

  return <AvatarPage src={props.src}></AvatarPage>;
}

export default Avatar;
