import React from "react"
import "../theme/styles/styles.scss"
import Header from "../components/header"
import SubHeader from "../components/SubHeader"
import Footer from "../components/Footer"

import Home from "./Home"

const IndexPage = () => (
  <div>
    <Header />
    <SubHeader />
    <Home />
    <Footer />
  </div>
)

export default IndexPage
