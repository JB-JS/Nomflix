import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
  height: 100%;
  height: 180px;
`;

const Content = styled.p`
  margin-top: 5px;
`;

const Creator = ({ result }) => (
  <Container>
    {result.created_by.map((creator) => (
      <Item key={creator.id}>
        <div>
          <Img
            src={
              creator.profile_path
                ? `https://image.tmdb.org/t/p/original${creator.profile_path}`
                : require("../assets/noPosterSmall.jpg")
            }
            alt={`${creator.name} Profile`}
          ></Img>
        </div>
        <Content>{`${creator.name}`}</Content>
      </Item>
    ))}
  </Container>
);

Creator.propTypes = {
  result: PropTypes.shape({
    created_by: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        profile_path: PropTypes.string,
      })
    ),
  }),
};

export default Creator;
