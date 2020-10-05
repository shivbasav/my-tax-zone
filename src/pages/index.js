import React from "react"
import "../theme/styles/styles.scss"
import Header from "../components/header"
import SubHeader from "../components/SubHeader"

import Home from "./Home"

const IndexPage = () => (
  <div>
    <Header />
    <SubHeader />
    <Home />
  </div>
)

export default IndexPage
