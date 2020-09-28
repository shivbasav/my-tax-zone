import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Text } from "./elements/Text"

const NavBar = styled.nav`
  &&& {
    position: fixed;
    width: 100%;
    z-index: 1000;
    height: 4rem;
    .navbar-item.has-dropdown {
      align-items: center;
    }
    .navbar-item {
      padding: 0.6rem !important;
    }
    .button {
      height: 2.8em;
    }
    .navbar-item img {
      max-height: 3rem;
    }
    @media screen and (min-width: 1330px) {
      padding: 0rem 0rem;
    }
    @media screen and (min-width: 1370px) {
      padding: 0rem 1rem;
    }
    @media screen and (min-width: 1430px) {
      padding: 0rem 2rem;
    }
    @media screen and (min-width: 1470px) {
      padding: 0rem 4rem;
    }
    @media screen and (min-width: 1500px) {
      padding: 0rem 7rem;
    }
    @media screen and (min-width: 1550px) {
      padding: 0rem 9rem;
    }
    @media screen and (min-width: 1650px) {
      padding: 0rem 11rem;
    }
    @media screen and (min-width: 1700px) {
      padding: 0rem 13rem;
    }
    @media screen and (min-width: 2000px) {
      padding: 0rem 14rem;
    }
    /* padding: 0rem 24px; */
  }
`

const Header = () => (
  <nav className="navbar" rol="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <Text color="white" size="big" weight="bold" letterSpacing="loose">
          Kraveln
        </Text>
        <p className="is-size-4 has-text-white">Create your experience</p>
      </a>
      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a class="navbar-item">Home</a>
      </div>
    </div>
  </nav>
)

export default Header
