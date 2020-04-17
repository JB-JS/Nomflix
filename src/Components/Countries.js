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
  width: 100%;
`;

const Img = styled.img`
  margin-bottom: 0.25rem;
`;
const Title = styled.h2`
  font-size: 1rem;
  margin: 0.25rem 0 0.25rem 0;
`;

const Countries = ({ result }) => (
  <Container>
    {result.production_countries.map((countrie, ix) => (
      <Item key={ix}>
        <div>
          <Img
            src={`https://www.countryflags.io/${countrie.iso_3166_1}/flat/64.png`}
            alt={`${countrie.name} 국기`}
          ></Img>
          <Title>{countrie.name}</Title>
        </div>
      </Item>
    ))}
  </Container>
);

Countries.propTypes = {
  result: PropTypes.shape({
    production_countries: PropTypes.arrayOf(
      PropTypes.shape({
        iso_3166_1: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default Countries;
