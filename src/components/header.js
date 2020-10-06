import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Header = () => (
  <>
    <nav
      className="navbar is-white"
      rol="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <span>
            <p
              className="has-text-link-dark has-text-weight-semibold is-size-3"
              style={{ letterSpacing: "2px", fontWeight: "bold" }}
            >
              MyTaxZone
            </p>
            <p className="is-size-5 has-text-link-dark">
              Consulting and Compliance
            </p>
          </span>
        </Link>
        <a
          role="button"
          aria-label="menu"
          aria-expanded="false"
          // data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </nav>
  </>
)

export default Header
