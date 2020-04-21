import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 250px;
  overflow: scroll;
  background: rgba(255, 255, 255, 0.5);
  padding: 1rem 0 1rem 1rem;
  margin-top: 1rem;
`;

const Item = styled.div`
  color: #000;
  font-weight: 600;
  text-align: center;
  font-size: 0.75rem;
  &:not(:first-child) {
    margin-left: 2rem;
  }
`;

const Image = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 150px;
`;

const Title = styled.h2`
  font-size: 1rem;
  margin: 1rem 0 0.25rem 0;
`;

const Company = ({ result }) => (
  <Container>
    {result.production_companies.map((company) => (
      <Item key={company.id}>
        <Image
          img={
            company.logo_path
              ? `https://image.tmdb.org/t/p/original${company.logo_path}`
              : require("../assets/noPosterSmall.jpg")
          }
        ></Image>
        <Title>{company.name}</Title>
      </Item>
    ))}
  </Container>
);

Company.propTypes = {
  result: PropTypes.shape({
    production_companies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        logo_path: PropTypes.string,
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default Company;
