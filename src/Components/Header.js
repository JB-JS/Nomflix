import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  color: white;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 5;
`;

const Nav = styled.nav``;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  font-size: 17px;
  text-align: center;
  border-bottom: 4px solid
    ${(props) => (props.cond === "true" ? "#816bff" : "transparent")};
  transition: 0.5s ease-in-out;
`;

const Slink = styled(Link)`
  color: ${(props) => (props.cond === "true" ? "#816bff" : "#fff")};
  font-weight: ${(props) => (props.cond === "true" ? "bold" : "normal")};
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Nav>
      <List>
        <Item cond={(pathname === "/").toString()}>
          <Slink cond={(pathname === "/").toString()} to="/">
            Movies
          </Slink>
        </Item>
        <Item cond={(pathname === "/tv").toString()}>
          <Slink cond={(pathname === "/tv").toString()} to="/tv">
            TV
          </Slink>
        </Item>
        <Item cond={(pathname === "/search").toString()}>
          <Slink cond={(pathname === "/search").toString()} to="/search">
            Search
          </Slink>
        </Item>
      </List>
    </Nav>
  </Header>
));
