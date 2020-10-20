import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import SubHeader from "../components/SubHeader"

const Container = styled.div`
  padding: 1rem 1rem;
`

// const Text = styled.p`
//   font-size: 15px;
// `

// const SubTitle = styled.p`
//   font-weight: 600;
//   font-size: 20px;
//   color: gray;
// `

// const zoom = styled.div`
//   .zoom {
//     padding: 50px;
//     background-color: green;
//     transition: transform 0.5s;
//     width: 200px;
//     height: 200px;
//     margin: 0 auto;
//   }

//   .zoom:hover {
//   }
// `
const HoverText = styled.p`
  color: #000;
  padding-left: 0.5rem;
  :hover {
    transition: transform 0.5s;
    -ms-transform: scale(1.1); /* IE 9 */
    -webkit-transform: scale(1.1); /* Safari 3-8 */
    transform: scale(1.1);
  }
`

const TaxFiling = () => {
  return (
    <>
      <Header />
      <SubHeader />

      <Container>
        <div class="box">
          <div class="media-content">
            <div class="content">
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                Annual Income Tax Filing
              </p>
              <ol type="a">
                <li>
                  <HoverText style={{ display: "flex", flexDirection: "row" }}>
                    <p
                      style={{
                        fontWeight: "600",
                        color: "black",
                        paddingRight: "0.5rem",
                      }}
                    >
                      Personal Annual Income Tax returns:
                    </p>{" "}
                    We file the personal income tax returns for various type of
                    assesses such as Salaried Persons, Self-employed persons,
                    Freelancers, contractors, Government Employees, Doctors,
                    Lawyers, Small proprietorship business holder etc.,
                  </HoverText>
                </li>
                <li>
                  <HoverText style={{ display: "flex", flexDirection: "row" }}>
                    <p
                      style={{
                        fontWeight: "600",
                        color: "black",
                        paddingRight: "0.5rem",
                      }}
                    >
                      Partnership Firm Annual Income Tax Return:
                    </p>{" "}
                    We file Annual Income Tax returns of Partnership firms such
                    as consulting firm, E-commerce, etc.
                  </HoverText>
                </li>
                <li>
                  <HoverText style={{ display: "flex", flexDirection: "row" }}>
                    <p
                      style={{
                        fontWeight: "600",
                        color: "black",
                        paddingRight: "0.5rem",
                      }}
                    >
                      Company Annual Income Tax filing:
                    </p>
                    We file Annual Income Tax returns of Private Limited Company
                    and Public Company.
                  </HoverText>
                </li>
                <li>
                  <HoverText style={{ display: "flex", flexDirection: "row" }}>
                    <p
                      style={{
                        fontWeight: "600",
                        color: "black",
                        paddingRight: "0.5rem",
                      }}
                    >
                      Trust Annual Income Tax filing:
                    </p>
                    We file Annual Income Tax returns of Charitable Trust.
                  </HoverText>
                </li>

                <li>
                  <HoverText style={{ display: "flex", flexDirection: "row" }}>
                    <p
                      style={{
                        fontWeight: "600",
                        color: "black",
                        paddingRight: "0.5rem",
                      }}
                    >
                      Co-Operative Society Annual Income Tax:
                    </p>
                    We file Annual Income Tax returns of Co-Operative Society.
                  </HoverText>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="media-content">
            <div class="content">
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                Other Income Tax filings
              </p>
              <ol type="a">
                <li>
                  <HoverText style={{ display: "flex", flexDirection: "row" }}>
                    <p
                      style={{
                        fontWeight: "600",
                        color: "black",
                        paddingRight: "0.5rem",
                      }}
                    >
                      Renewal of 80G and 12A Certificate:
                    </p>{" "}
                    We provide the service of registration and renewal of 12A ,
                    80G of societies, trusts, Non-Government Organisations,
                    Schools and Colleges, Hospitals, Temples, Mosques, Church’s,
                    etc.,
                  </HoverText>
                </li>
                <li>
                  <HoverText style={{ display: "flex", flexDirection: "row" }}>
                    <p
                      style={{
                        fontWeight: "600",
                        color: "black",
                        paddingRight: "0.5rem",
                      }}
                    >
                      Filing of form 15H:
                    </p>{" "}
                  </HoverText>
                </li>
                <li>
                  <HoverText style={{ display: "flex", flexDirection: "row" }}>
                    <p
                      style={{
                        fontWeight: "600",
                        color: "black",
                        paddingRight: "0.5rem",
                      }}
                    >
                      Filing of Tax audit Report:
                    </p>
                    The Tax Audit has been made compulsory by government to CA.
                  </HoverText>
                </li>
                <li>
                  <HoverText style={{ display: "flex", flexDirection: "row" }}>
                    <p
                      style={{
                        fontWeight: "600",
                        color: "black",
                        paddingRight: "0.5rem",
                      }}
                    >
                      Filing of Form 15CA:
                    </p>
                  </HoverText>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
export default TaxFiling
