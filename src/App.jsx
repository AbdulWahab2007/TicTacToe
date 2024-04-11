import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalCSS.jsx'

const value = 'O';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Container>
          <Row>
            <Box value='X'>X</Box>
            <Box value='X'>X</Box>
            <Box></Box>
          </Row>
          <Row>
            <Box></Box>
            <Box value='O'>O</Box>
            <Box value='O'>O</Box>
          </Row>
          <Row>
            <Box></Box>
            <Box value='O'>O</Box>
            <Box value='X'>X</Box>
          </Row>
        </Container>


        <Desc>
          <h3>Circle & Cross</h3>
          <p>The winner is the first person to place three symbols on one (straight) line.</p>
          <hr />
          <Button>Start Game</Button>
        </Desc>

      </Main>
    </>
  )
}
const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 95vw;
height: 87vh;
background-color: #22242a;
border-radius: 10px;
`

const Container = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 10px;
  background-color: #1b1e22;
`

const Row = styled.div`
  display: flex;
  width: 95%;
  height: 135px;
  margin: 10px;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  font-family: "Roboto Condensed", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  width: 33%;
  height: 117px;
  border-radius: 10px;
  background-color: #22242a;
  color: ${(props) => props.value === 'O' ? '#1777ff' : 'white'};
  margin: 10px;
  cursor: default;
`

const Desc = styled.div`
display: flex;
flex-direction: column;
  width: 350px;
  height: 450px;
  margin-left: 100px;
  h3{
    font-family: "Fira Sans", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 50px;
    margin-bottom: -20px;
  }
  p{
    font-family: "Fira Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 23px;
    color: #7e7f84;
  }
  hr{
    height: 3px;
    width: 100%;
    background-color: #b5b7be;
    border: none;
  }
`

const Button = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  height: 60px;
  border-radius: 3px;
  background-color: #1777ff;
  font-size: 21px;
  font-family: "Fira Sans", sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-top: 20px;
  padding-left: 25px;

  &:hover{
    cursor: pointer;
  }

`