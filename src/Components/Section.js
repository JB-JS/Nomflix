import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Count = styled.div`
  margin-left: 0.25rem;
`;

const Result = styled.span`
  color: #816bff;
  font-size: 1.8rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`;

const Name = styled.div`
  font-weight: 600;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  margin-right: -2rem;
  margin-left: -2rem;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>
      <Name>{title} -</Name>
      <Count>
        A total of <Result>{children.length}</Result> videos were released
      </Count>
    </Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
