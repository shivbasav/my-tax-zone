import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Text } from "./elements/Text"

const SubHeader = () => (
  <nav className="navbar is-light">
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link" to="/">
        Docs
      </a>
      <div className="navbar-dropdown is-boxed">
        <Link to="page-2/" className="navbar-item">
          sdfsfds
        </Link>
      </div>
    </div>
  </nav>
)

export default SubHeader
