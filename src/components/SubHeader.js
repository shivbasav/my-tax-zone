import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavbarLink = styled.a``
const Container = styled.div`
  padding-left: 1rem;
  width: 100%;
  z-index: 100;
  position: sticky;
  top: 0rem;
  -moz-box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.15);
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0rem auto;
  max-width: 1330px;
  padding: 0 20px;
`

const Item = styled.div`
  margin: 0rem 0.8rem;
  padding: 0.4rem 0.2rem;
  position: relative;
  top: 2px;
  border-bottom: 2px solid
    ${({ theme: { primaryColor }, isActive }) =>
      isActive ? primaryColor : "transparent"};
`

const SubHeader = () => {
  return (
    <>
      <Container>
        <nav className="navbar is-white" rol="navigation">
          <div className="navbar-end">
            <div style={{ paddingTop: "1rem", paddingRight: "1rem" }}>
              <Link to="/">
                <p style={{ color: "#505050", fontSize: "15px" }}>HOME</p>
              </Link>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                <p style={{ fontSize: "15px" }}>INCOME TAX</p>
              </div>

              <div className="navbar-dropdown">
                <div className="navbar-item">
                  <Link to="/IncomeTax/">
                    <p style={{ color: "#505050", fontSize: "13px" }}>
                      Income Tax
                    </p>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link to="/AnnualIncomeTax/">
                    <p style={{ color: "#505050", fontSize: "13px" }}>
                      Annual Income Tax Filing
                    </p>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link to="/OtherIncomeTax">
                    <p style={{ color: "#505050", fontSize: "13px" }}>
                      Other Income Tax Filings
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-end">
              <div className="navbar-link">
                <p style={{ fontSize: "15px" }}>MANAGE BUSINESS</p>
              </div>

              <div className="navbar-dropdown navbar-dropdown-background-color">
                <div className="navbar-item navbar-brand">
                  <Link to="">
                    <p style={{ color: "#505050", fontSize: "13px" }}>
                      Coming Soon
                    </p>
                  </Link>
                </div>
                {/* <div className="navbar-item">
                  <Link to="/search-place-for-claim">
                    <p style={{ color: "#505050", fontSize: "11px" }}>
                      Claim a Place
                    </p>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-end">
              <div className="navbar-link">
                <p style={{ fontSize: "15px" }}>AGREEMENTS & DOCUMENTS </p>
              </div>

              <div className="navbar-dropdown navbar-dropdown-background-color">
                <div className="navbar-item navbar-brand">
                  <Link to="">
                    <p style={{ color: "#505050", fontSize: "13px" }}>
                      Coming Soon
                    </p>
                  </Link>
                </div>
                {/* <div className="navbar-item">
                  <Link to="/search-place-for-claim">
                    <p style={{ color: "#505050", fontSize: "11px" }}>
                      Claim a Place
                    </p>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>

          <div style={{ paddingTop: "1rem", paddingRight: "1rem" }}>
            <Link to="">
              <p style={{ color: "#505050", fontSize: "15px" }}>ARTICLES</p>
            </Link>
          </div>
        </nav>
      </Container>
      <br />
      <br />
    </>
  )
}

export default SubHeader
