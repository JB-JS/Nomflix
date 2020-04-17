import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Div = styled.div`
  width: 9%;
  margin: 1.25rem 2rem;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: opacity 0.2s linear;
`;

const Thumbnail = styled.div`
  margin-bottom: 3px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const SLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Div>
    <SLink to={isMovie ? `/movie/${id}` : `/show/${id}`}>
      <Thumbnail>
        <Image
          src={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../assets/noPosterSmall.jpg")
          }
          alt={`${title} 썸네일`}
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>
          {rating} / 10
        </Rating>
      </Thumbnail>
      <Title>
        {title.length > 15 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Year>{year}</Year>
    </SLink>
  </Div>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
