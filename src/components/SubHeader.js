// import React from "react"

// import styled from "styled-components"
// import { Link } from "gatsby"

// const NavBar = styled.nav`
//   &&& {
//     position: fixed;
//     width: 100%;
//     z-index: 1000;
//     height: 4rem;
//     .navbar-item.has-dropdown {
//       align-items: center;
//     }

//     .button {
//       height: 2.8em;
//     }
//     .navbar-item img {
//       max-height: 3rem;
//     }
//     @media screen and (min-width: 1330px) {
//       padding: 0rem 0rem;
//     }
//     @media screen and (min-width: 1370px) {
//       padding: 0rem 1rem;
//     }
//     @media screen and (min-width: 1430px) {
//       padding: 0rem 2rem;
//     }
//     @media screen and (min-width: 1470px) {
//       padding: 0rem 4rem;
//     }
//     @media screen and (min-width: 1500px) {
//       padding: 0rem 7rem;
//     }
//     @media screen and (min-width: 1550px) {
//       padding: 0rem 9rem;
//     }
//     @media screen and (min-width: 1650px) {
//       padding: 0rem 11rem;
//     }
//     @media screen and (min-width: 1700px) {
//       padding: 0rem 13rem;
//     }
//     @media screen and (min-width: 2000px) {
//       padding: 0rem 14rem;
//     }
//     /* padding: 0rem 24px; */
//   }
// `

// const NavbarLink = styled.a``
// const ImageWrapper = styled.span`
//   &&& {
//     width: 2.5rem;
//     img {
//       height: 2.5rem;
//       border-radius: 30px;
//       width: 2.5rem;
//     }
//   }
// `

// const SubHeader = ({ history }) => {
//   return (
//     <NavBar
//       className="navbar is-light"
//       role="navigation"
//       aria-label="main navigation"
//     >
//       <div id="navbarBasicExample" className="navbar-menu">
//         <div className="navbar-end" />
//         <div>skjfkjs</div>
//         <div className="navbar-end">
//           <div className="navbar-item has-dropdown is-hoverable">
//             <NavbarLink className="navbar-link">
//               <p color="white" size="14px">
//                 Add a Place
//               </p>
//             </NavbarLink>

//             <div className="navbar-dropdown">
//               <div className="navbar-item navbar-brand">
//                 <Link to="/add-place">
//                   <p size="smaller" color="darkGrey" weight="semibold">
//                     Add a Place
//                   </p>
//                 </Link>
//               </div>
//               <div className="navbar-item">
//                 <Link to="/search-place-for-claim">
//                   <p size="smaller" color="darkGrey" weight="semibold">
//                     Claim a Place
//                   </p>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="navbar-end">
//           <div className="navbar-item has-dropdown is-hoverable">
//             <NavbarLink className="navbar-link">
//               <p color="white" size="smaller">
//                 Add a Place
//               </p>
//             </NavbarLink>

//             <div className="navbar-dropdown">
//               <div className="navbar-item navbar-brand">
//                 <Link to="/add-place">
//                   <p size="smaller" color="darkGrey" weight="semibold">
//                     Add a Place
//                   </p>
//                 </Link>
//               </div>
//               <div className="navbar-item">
//                 <Link to="/search-place-for-claim">
//                   <p size="smaller" color="darkGrey" weight="semibold">
//                     Claim a Place
//                   </p>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="navbar-end">
//           <div className="navbar-item has-dropdown is-hoverable">
//             <NavbarLink className="navbar-link">
//               <p color="white" size="smaller">
//                 Add a Place
//               </p>
//             </NavbarLink>

//             <div className="navbar-dropdown">
//               <div className="navbar-item navbar-brand">
//                 <Link to="/add-place">
//                   <p size="smaller" color="darkGrey" weight="semibold">
//                     Add a Place
//                   </p>
//                 </Link>
//               </div>
//               <div className="navbar-item">
//                 <Link to="/search-place-for-claim">
//                   <p size="smaller" color="darkGrey" weight="semibold">
//                     Claim a Place
//                   </p>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="navbar-end">
//           <div className="navbar-item has-dropdown is-hoverable">
//             <NavbarLink className="navbar-link">
//               <p color="black" size="smaller">
//                 Add a Place
//               </p>
//             </NavbarLink>

//             <div className="navbar-dropdown">
//               <div className="navbar-item navbar-brand">
//                 <Link to="/add-place">
//                   <p size="smaller" color="darkGrey" weight="semibold">
//                     Add a Place
//                   </p>
//                 </Link>
//               </div>
//               <div className="navbar-item">
//                 <Link to="/search-place-for-claim">
//                   <p size="smaller" color="darkGrey" weight="semibold">
//                     Claim a Place
//                   </p>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </NavBar>
//   )
// }

// export default SubHeader
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

// const FlexStyle = styled(Flex).attrs({ justify: "flex-start" })``

// const TextStyle = styled(Text).attrs({ size: "tiny", color: "dark" })`
//   padding-left: 0.5rem;
//   &&& {
//     :hover {
//       color: ${({ theme: { primaryColor } }) => primaryColor};
//     }
//   }
// `

const SubHeader = () => {
  return (
    <Container>
      <nav className="navbar is-white" rol="navigation">
        <div className="navbar-item has-dropdown is-hoverable navbar-end">
          <div className="navbar-link">
            <p style={{ fontSize: "11px" }}>START BUSINESS</p>
          </div>

          <div className="navbar-dropdown">
            <div className="navbar-item navbar-brand">
              <Link to="/add-place">
                <p style={{ color: "#505050", fontSize: "11px" }}>
                  Add a Place
                </p>
              </Link>
            </div>
            <div className="navbar-item">
              <Link to="/search-place-for-claim">
                <p style={{ color: "#505050", fontSize: "11px" }}>
                  Claim a Place
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-link">
            <p style={{ fontSize: "11px" }}>MANAGE BUSINESS</p>
          </div>

          <div className="navbar-dropdown navbar-dropdown-background-color">
            <div className="navbar-item navbar-brand">
              <Link to="/add-place">
                <p style={{ color: "#505050", fontSize: "11px" }}>
                  Add a Place
                </p>
              </Link>
            </div>
            <div className="navbar-item">
              <Link to="/search-place-for-claim">
                <p style={{ color: "#505050", fontSize: "11px" }}>
                  Claim a Place
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-link">
            <p style={{ fontSize: "11px" }}>AGREEMENTS & DOCUMENTS </p>
          </div>

          <div className="navbar-dropdown navbar-dropdown-background-color">
            <div className="navbar-item navbar-brand">
              <Link to="/add-place">
                <p style={{ color: "#505050", fontSize: "11px" }}>
                  Add a Place
                </p>
              </Link>
            </div>
            <div className="navbar-item">
              <Link to="/search-place-for-claim">
                <p style={{ color: "#505050", fontSize: "11px" }}>
                  Claim a Place
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "1.1rem" }}>
          <Link to="/add-place">
            <p style={{ color: "#505050", fontSize: "11px" }}>ARTICLES</p>
          </Link>
        </div>
      </nav>
    </Container>
  )
}

export default SubHeader
