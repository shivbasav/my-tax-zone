import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

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
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="navigation">
        <nav>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
