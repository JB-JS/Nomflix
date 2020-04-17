import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link, withRouter } from "react-router-dom";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Season from "Components/Season";
import Creator from "Components/Creator";
import Company from "Components/Company";
import Countries from "../../Components/Countries";
import Collection from "Components/Collection";

const Div = styled.div`
  position: relative;
  height: calc(100vh - 50px);
  width: 100%;
  margin-top: 50px;
`;

const Theme = styled.div`
  display: flex;
`;

const Backdrop = styled.div`
  width: 70%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: darken;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 100%;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: calc(100vh - 50px);
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 3rem;
  margin-top: 3rem;
`;

const Title = styled.h1`
  font-size: 52px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const ItemContainer = styled.span`
  display: inline-block;
  margin: 10px 0;
`;

const Item = styled.div``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  opacity: 0.7;
  line-height: 1.5;
  width: 100%;
`;

const Imdb = styled.img`
  width: 40px;
  height: 20px;
`;

const Tabs = styled.div`
  padding: 1rem;
  border-radius: 3px;
  margin-top: 2rem;
`;

const TabsTitle = styled(Link)`
  display: block;
  font-size: 1.2rem;
  padding: 1rem;
  &:not(:first-child) {
    margin-left: 1rem;
  }
  border-bottom: 3px solid
    ${(props) => (props.path === "true" ? "#816bff" : "transparent")};
  color: ${(props) => (props.path === "true" ? "#816bff" : "#fff")};
  font-weight: ${(props) => props.path === "true" && "bold"};
`;

const ItemTabs = styled.div`
  display: flex;
`;

const Element = withRouter(({ collection, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message />
  ) : (
    <Div>
      {console.log(collection)}
      <Helmet>
        <title>
          {collection.name ? collection.name : "Title"}
          &nbsp;| Nomflix
        </title>
      </Helmet>

      <Theme>
        <Cover
          bgImage={
            collection.poster_path
              ? `https://image.tmdb.org/t/p/original${collection.poster_path}`
              : require("../../assets/noPosterSmall.jpg")
          }
        />
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${collection.backdrop_path}`}
        >
          <Content>
            <Collection result={collection} />
          </Content>
        </Backdrop>
      </Theme>
    </Div>
  )
);

Element.propTypes = {
  collection: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Element;
