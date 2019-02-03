import React, { Component } from 'react';
import NavbarHeader from "./NavbarHeader";
import NavbarLinks from "./NavbarLinks";
import NavbarSocial from "./NavbarSocial";
import styled from "styled-components";

export default class Navbar extends Component {
  // Here we control de state and we set this inicially to false.
  state = {
    toggleNavbar: false
  }

  // Here we control the toggle action.
  handleToggle = () => {
    this.setState(() => {
      return {toggleNavbar: !this.state.toggleNavbar}
    })
  }


  render() {
    return (
      <NavbarWrapper>
        <NavbarHeader handleToggle = {this.handleToggle} />
        <NavbarLinks toggleNavbar= {this.state.toggleNavbar} />
        <NavbarSocial />
      </NavbarWrapper>
    );
  }
}

const NavbarWrapper = styled.nav`
@media (min-width: 768px) {
  display: flex;
  align-items: center;
}
`
