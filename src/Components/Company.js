import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
  font-size: 0.75rem;
`;

const Img = styled.img`
  width: 150px;
  margin-bottom: 0.25rem;
`;

const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
`;

const Title = styled.h2`
  font-size: 1rem;
  margin: 2rem 0 0.25rem 0;
`;

const Company = ({ result }) => (
  <Container>
    {result.production_companies.map((company) => (
      <Item key={company.id}>
        <ImgWrap>
          <Img
            src={
              company.logo_path
                ? `https://image.tmdb.org/t/p/original${company.logo_path}`
                : require("../assets/noPosterSmall.jpg")
            }
            alt={`${company.name} Company`}
          />
        </ImgWrap>
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
