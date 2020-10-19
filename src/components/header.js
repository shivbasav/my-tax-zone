import { Link } from "gatsby"
import React from "react"

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
              className="has-text-link-dark has-text-weight-semibold"
              style={{
                letterSpacing: "2px",
                fontWeight: "bold",
                fontSize: "25px",
              }}
            >
              MyTaxZone
            </p>
            <p className=" has-text-link-dark" style={{ fontSize: "15px" }}>
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
