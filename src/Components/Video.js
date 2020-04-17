import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  background: rgba(255, 255, 255, 0.5);
  padding: 1.25rem 0 2rem 1.25rem;
  margin-top: 1rem;
`;

const Item = styled.div`
  width: 100%;
  &:not(:first-child) {
    margin-left: 2rem;
  }
  color: #000;
  font-weight: 600;
  text-align: center;
`;

const Title = styled.span`
  font-size: 2rem;
`;
const Div = styled.div`
  margin: 2rem 0 0.25rem 0;
`;

const Name = styled.p`
  margin-top: 1rem;
`;

const toggle = () => {
  const el = document.querySelector(".title");

  el.classList.toggle("active");
  const cond = el.className.includes("active");

  el.style.borderBottom = cond ? "3px solid #816bbf" : "none";
  el.style.color = cond ? "#816bbf" : "#fff";
  el.style.fontWeight = cond ? "bold" : "normal";
};

export default ({ result }) => (
  <>
    <Div>
      <Title onClick={toggle} className="title">
        Videos
      </Title>
    </Div>
    <Container>
      {result.videos.results.map((video) => (
        <Item key={video.id}>
          <iframe
            width="300"
            height="170"
            src={`https://www.youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <Name>{video.name}</Name>
        </Item>
      ))}
    </Container>
  </>
);
