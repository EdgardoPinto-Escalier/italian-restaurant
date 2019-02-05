import React, { Component } from 'react';
import {Link} from 'gatsby';
import { MdRestaurantMenu } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { styles } from "../../../utilities";

export default class NavbarHeader extends Component {
  render() {
    const { handleToggle } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <h1>
            <span className="logo">
              <MdRestaurantMenu className="logoIcon" /> CAPRI
            </span>
          </h1>
        </Link>
        <FaBars
          className="toggle"
          onClick={() => {
            handleToggle();
          }}
        />
      </HeaderWrapper>
    );
  }
}


const HeaderWrapper = styled.div`
  padding: 0.4rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggle {
    font-size: 1.75rem;
    cursor: pointer;
    color: ${styles.colors.black};
  }

  a {
    text-decoration: none;
  }

  span.logo {
    color: ${styles.colors.black};
    padding: 5px;
  }

  .logoIcon {
    font-size: 2.75rem;
    vertical-align: middle;
  }

  @media (min-width: 768px) {
    .toggle {
      display: none;
    }
  }
`;
