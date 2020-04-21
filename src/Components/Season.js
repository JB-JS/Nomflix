import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  background: rgba(255, 255, 255, 0.5);
  padding: 1.25rem 0 1.25rem 1.25rem;
  margin-top: 1rem;
`;

const Item = styled.div`
  &:not(:first-child) {
    margin-left: 1rem;
  }
  color: #000;
  font-weight: 600;
  text-align: center;
  font-size: 0.75rem;
`;

const Img = styled.img`
  width: 120px;
  margin-bottom: 0.25rem;
  height: 150px;
`;

const Title = styled.h2`
  font-size: 1rem;
  margin: 0.25rem 0 0.25rem 0;
`;

const Season = ({ result }) => (
  <Container>
    {result.seasons.map((season) => (
      <Item key={season.id}>
        <div>
          <Img
            src={
              season.poster_path
                ? `https://image.tmdb.org/t/p/original${season.poster_path}`
                : require("../assets/noPosterSmall.jpg")
            }
            alt={`${season.name} Thumnail`}
          />
        </div>
        <Title>
          {season.name.length <= 20
            ? season.name
            : `${season.name.substring(0, 20)}...`}
        </Title>
        <p>{season.air_date}</p>
        <p>Season {season.season_number}</p>
      </Item>
    ))}
  </Container>
);

Season.propTypes = {
  result: PropTypes.shape({
    seasons: PropTypes.arrayOf(
      PropTypes.shape({
        air_data: PropTypes.string,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        season_number: PropTypes.number,
      })
    ),
  }),
};

export default Season;
