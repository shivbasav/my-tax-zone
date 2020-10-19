import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import SubHeader from "../components/SubHeader"

const Container = styled.div`
  list-style: none;
  width: 75%;
  background: #ecf5ff;
  padding: 30px;
  border-radius: 4px;
`
const List = styled.li`
  padding: 10px 0 10px 0;

  li:nth-child(odd) {
    text-align: left;
    border-left: 10px solid #1488f3;
    padding-left: 4px;
    border-bottom: 10px solid darken(#ecf5ff, 20%);
  }
  li:nth-child(even) {
    text-align: right;
    border-right: 10px solid #1488f3;
    padding-right: 4px;
    border-bottom: 10px solid darken(#ecf5ff, 20%);
  }
`

const IncomeTax = () => {
  return (
    <>
      <Header />
      <SubHeader />

      <Container>
        <List>
          I will rise again. Just like a storm, Just like a valcano erruption
          and Just like blistring colors.
        </List>
        <List>
          {" "}
          I will rise again. Just like a storm, Just like a valcano erruption
          and Just like blistring colors
        </List>
        <List>
          {" "}
          I will rise again. Just like a storm, Just like a valcano erruption
          and Just like blistring colors
        </List>
        <List>
          {" "}
          I will rise again. Just like a storm, Just like a valcano erruption
          and Just like blistring colors
        </List>
      </Container>
    </>
  )
}
export default IncomeTax
