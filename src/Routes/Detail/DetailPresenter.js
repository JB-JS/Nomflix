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
import Video from "Components/Video";

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

const Item = styled.span``;

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

const DetailPresenter = withRouter(
  ({
    match: {
      url,
      params: { name },
    },
    isMovie,
    result,
    loading,
    error,
  }) =>
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
        <Helmet>
          <title>
            {result.original_title
              ? result.original_title
              : result.original_name}
            &nbsp;| Nomflix
          </title>
        </Helmet>
        <Theme>
          <Cover
            bgImage={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : require("../../assets/noPosterSmall.jpg")
            }
          />
          <Backdrop
            bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
          >
            <Content>
              <Data>
                <Title>
                  {result.original_title
                    ? result.original_title
                    : result.original_name}
                </Title>
                <ItemContainer>
                  <Item>
                    {console.log(result)}
                    {result.release_date
                      ? result.release_date.length > 0 &&
                        result.release_date.substring(0, 4)
                      : result.first_air_date &&
                        result.first_air_date.length > 0 &&
                        result.first_air_date.substring(0, 4)}
                  </Item>
                  <Divider>•</Divider>
                  <Item>
                    {result.runtime || result.runtime === 0
                      ? result.runtime
                      : result.episode_run_time[0]}{" "}
                    min
                  </Item>
                  <Divider>•</Divider>
                  <Item>
                    {result.genres &&
                      result.genres.map((genre, ix) =>
                        ix === result.genres.length - 1
                          ? genre.name
                          : `${genre.name} /`
                      )}
                  </Item>
                  <Divider>•</Divider>
                  <a
                    href={`https://www.imdb.com/title/${result.imdb_id}`}
                    target="_blank"
                  >
                    <Imdb src={require("assets/IMDB.jpg")} alt="IMDB"></Imdb>
                  </a>
                </ItemContainer>
                <Overview>{result.overview.substring(0, 400)}...</Overview>
                <Video result={result}></Video>
                <Tabs>
                  <ItemTabs>
                    {result.seasons && (
                      <TabsTitle
                        path={(name === "season").toString()}
                        to={`/${isMovie ? "movie" : "show"}/${
                          result.id
                        }/season`}
                      >
                        Seasons
                      </TabsTitle>
                    )}
                    {result.production_companies && (
                      <TabsTitle
                        path={(name === "company").toString()}
                        to={`/${isMovie ? "movie" : "show"}/${
                          result.id
                        }/company`}
                      >
                        Production Company
                      </TabsTitle>
                    )}
                    {result.production_countries && (
                      <TabsTitle
                        path={(name === "countries").toString()}
                        to={`/${isMovie ? "movie" : "show"}/${
                          result.id
                        }/countries`}
                      >
                        Production Countries
                      </TabsTitle>
                    )}
                    {result.belongs_to_collection && (
                      <TabsTitle
                        path={(name === "collection").toString()}
                        to={`/collection/${result.belongs_to_collection.id}`}
                      >
                        Collection
                      </TabsTitle>
                    )}
                    {result.created_by && (
                      <TabsTitle
                        path={(name === "creator").toString()}
                        to={`/${isMovie ? "movie" : "show"}/${
                          result.id
                        }/creator`}
                      >
                        Creator
                      </TabsTitle>
                    )}
                  </ItemTabs>
                  {/* season 클릭시 보여주기 */}
                  {name === "season" ? <Season result={result}></Season> : null}
                  {/* Collection 클릭시 보여주기 */}
                  {name === "collection" ? (
                    <Collection result={result}></Collection>
                  ) : null}
                  {/* production company 클릭시 보여주기 */}
                  {name === "company" ? (
                    <Company result={result}></Company>
                  ) : null}
                  {/* production countries 클릭시 보여주기 */}
                  {name === "countries" ? (
                    <Countries result={result}></Countries>
                  ) : null}
                  {/* creator 클릭시 보여주기 */}
                  {name === "creator" ? (
                    <Creator result={result}></Creator>
                  ) : null}
                </Tabs>
              </Data>
            </Content>
          </Backdrop>
        </Theme>
      </Div>
    )
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
