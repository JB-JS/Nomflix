import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 1.25rem 0 1.25rem 1.25rem;
  margin-top: 1rem;
`;

const Item = styled(Link)`
  &:not(:first-child) {
    margin-left: 2rem;
  }
  font-weight: 600;
  text-align: center;
  font-size: 0.75rem;
`;

const Img = styled.img`
  max-width: 100%;
  margin-bottom: 0.25rem;
  max-height: 300px;
`;

const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  margin: 1rem 0 1rem 0;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: flex-wrap;
`;

const P = styled.p`
  font-size: 20px;
  margin-bottom: 4rem;
`;

const collection = ({ result }) => (
  <Container>
    <H1>{result.name}</H1>
    <P>{result.overview}</P>
    <Flex>
      {result.parts.map((collection) => (
        <Item key={collection.id} to={`/movie/${collection.id}`}>
          <ImgWrap>
            <Img
              src={
                collection.poster_path
                  ? `https://image.tmdb.org/t/p/original${collection.poster_path}`
                  : require("../assets/noPosterSmall.jpg")
              }
              alt={`${collection.title} Colelction`}
            />
          </ImgWrap>
          <Title>{collection.title}</Title>
          <p>{collection.release_date}</p>
        </Item>
      ))}
    </Flex>
  </Container>
);

collection.propTypes = {
  result: PropTypes.shape({
    parts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default collection;
