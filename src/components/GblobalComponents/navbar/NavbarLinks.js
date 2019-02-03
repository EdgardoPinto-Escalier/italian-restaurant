import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "gatsby";
import { styles } from "../../../utilities";

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "home",
      },
      {
        id: 1,
        path: "/about/",
        name: "about",
      },
      {
        id: 2,
        path: "/menu/",
        name: "menu",
      },
      {
        id: 3,
        path: "/contact/",
        name: "contact",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open = {this.props.toggleNavbar}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="navLink">
                {item.name}
              </Link>
            </li>
          );
        })}
      </LinkWrapper>
    );
  }
}


const LinkWrapper = styled.ul`
li {
  list-style-type: none;
}

.navLink {
  display: block;
  text-decoration: none;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: ${styles.colors.purple};
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  ${styles.transitionDefault};
  &:hover {
    background: ${styles.colors.deepPurple};
    color: ${styles.colors.white};
    padding: 0.5rem 1rem 0.5rem 1rem;
  }
}

height: ${props => (props.open ? '182px' : '0px')};
overflow: hidden;
${styles.transitionObject({ time: '0.5s' })};
@media (min-width: 768px) {
  height: auto;
  display: flex;
  margin: 0 auto;
}
`
