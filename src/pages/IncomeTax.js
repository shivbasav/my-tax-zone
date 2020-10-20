import React from "react"
import styled from "styled-components"
import Header from "../components/header"
import SubHeader from "../components/SubHeader"

const Container = styled.div`
  padding: 1rem 1rem;
`

const Text = styled.p`
  font-size: 15px;
`

const SubTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: gray;
`

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

const IncomeTax = () => {
  return (
    <>
      <Header />
      <SubHeader />

      <Container>
        <div class="box">
          <div class="media-content">
            <div class="content">
              <p>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "gray",
                  }}
                >
                  Income Tax
                </p>
                <SubTitle>Tax Planning :</SubTitle>{" "}
                <Text>
                  Clients who want to formalize their financial data can
                  approach our experienced advisors for expert guidance,
                  proactive tax and capital gain tax planning strategies and
                  services that minimize their tax liabilities, improve their
                  credit ratings such as CIBIL. The close personal attention we
                  provide ensures that clients short- and long-term goals are
                  fully understood, planned for and always remain top-of-mind.
                </Text>
                <Text>
                  Our tax and personal financial planning guidance not just
                  filing your returns and submitting acknowledgements. We advise
                  you on how the changes in tax law can impact day-to-day
                  decisions. Our team of tax advisor and personal financial
                  advisor will keep you in compliance with Income Tax laws and
                  ensure that you are not leaving available Income tax refunds.
                </Text>
                <Text>
                  Reaching long-term financial goals like retirement, your
                  children’s education, your children’s marriage,
                  construction/owning house, gifting, requires planning. speak
                  to the our personal tax advisors and independent financial
                  advisors at Mytaxzone to help you.
                </Text>
              </p>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="media-content">
            <div class="content">
              <Text>
                We guide our clients to minimise their tax Liability by
                following the prevailing Tax Rule of the country. We are
                providing following of type tax planning:
              </Text>
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
                      Long-term Capital Gain Tax planning:
                    </p>{" "}
                    We give the best tax planning in the area of long term
                    capital considering various exemptions and benefits
                    available in Income tax rule.{" "}
                  </HoverText>

                  <p
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingLeft: "0.5rem",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "600",
                        color: "black",
                        paddingRight: "0.5rem",
                        paddingBottom: "0.5rem",
                      }}
                    >
                      Example :
                    </p>
                    Exemption under section 54F for investing in new house.
                  </p>
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
                      Short Term capital Gain planning:
                    </p>{" "}
                    We provide the solution in the matter of short term capital
                    gain tax.
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
                      Investment planning for medical insurance:
                    </p>
                    We provide the guidance and advise for tax planning for
                    investment in medical insurance policies.
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
                      House rent planning for tax minimise:
                    </p>
                    10(14A) We provide the House Rent Allowance related solution
                    for corporate employees for declaration of rent etc.,
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
                      Donation planning for 80G exemption:
                    </p>
                    Under section 80G, Contributions made to certain relief
                    funds and charitable institutions can be claimed as a
                    deduction. Only donations made to prescribed funds qualify
                    as a deduction.
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
                      Planning for HR paid for section 80GG:
                    </p>
                    Under section 80GG, if your employer is not paying HRA but
                    you are paying House Rent then you can claim deduction for
                    the rent paid.
                  </HoverText>
                </li>
                <li>
                  <HoverText style={{ display: "flex", flexDirection: "row" }}>
                    Investment and tax saving planning for investment in mutual
                    funds, infrastructure bonds etc.,
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
export default IncomeTax
