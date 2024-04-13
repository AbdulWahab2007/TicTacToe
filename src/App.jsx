import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalCSS.jsx'
import Box from './Box.jsx'

export default function App() {

  const [turn, setTurn] = useState("X");
  const [value, setValue] = useState("O");
  const [boxes, setBoxes] = useState(['X', 'X', '', '', 'O', 'O', '', 'O', 'X']);
                                    // 0    1    2   3   4    5    6   7    8
  const [win, setWin] = useState(false);
  const [start, setStart] = useState(false);
  const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]


  const checkwinner = () => {
    for (let i = 0; i <= 7; i++) {
      if (boxes[winner[i][0]] == boxes[winner[i][1]] && boxes[winner[i][1]] == boxes[winner[i][2]] && boxes[winner[i][0]] != null ) {
        console.log("winner")
        setWin(true)
      }
    }
  }

  const handlestartclick = () => {
    setBoxes(Array(9).fill(null))
    setStart(true);
  }


  const handleboxclick = (boxnum) => {
    checkwinner();
    if (boxes[boxnum] === null && win == false) {


      if (turn == 'O') {
        setValue('O')
        setTurn('X')
        let updated = boxes
        updated[boxnum] = value
        setBoxes(updated)
      } else {
        setValue('X')
        setTurn('O')
        let updated = boxes
        updated[boxnum] = value
        setBoxes(updated)
      }
    }
  }

  return (
    <>
      <GlobalStyle />
      <Main>
        <Container start={start}>
          <Row>
            <Box value={boxes[0]} HandleBoxClick={() => handleboxclick(0)} />
            <Box value={boxes[1]} HandleBoxClick={() => handleboxclick(1)} />
            <Box value={boxes[2]} HandleBoxClick={() => handleboxclick(2)} />
          </Row>
          <Row>
            <Box value={boxes[3]} HandleBoxClick={() => handleboxclick(3)} />
            <Box value={boxes[4]} HandleBoxClick={() => handleboxclick(4)} />
            <Box value={boxes[5]} HandleBoxClick={() => handleboxclick(5)} />
          </Row>
          <Row>
            <Box value={boxes[6]} HandleBoxClick={() => handleboxclick(6)} />
            <Box value={boxes[7]} HandleBoxClick={() => handleboxclick(7)} />
            <Box value={boxes[8]} HandleBoxClick={() => handleboxclick(8)} />
          </Row>
        </Container>


        <Desc>
          <h3>Circle & Cross</h3>
          <p>The winner is the first person to place three symbols on one (straight) line.</p>
          <hr />
          <Button start={start} onClick={handlestartclick}>Start Game</Button>
          <TurnBox start={start}>{value}'s TURN</TurnBox>
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
  box-shadow: ${(props) => props.start === false ? '0px' : '0px 0px 15px #1777ff'};
`

const Row = styled.div`
  display: flex;
  width: 95%;
  height: 135px;
  margin: 10px;
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
  display: ${(props) => props.start === true ? 'none' : 'flex'};
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

const TurnBox = styled.div`
  display: ${(props) => props.start === false ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 3px;
  background-color: #0a4291;
  font-size: 35px;
  font-family: "Fira Sans", sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-top: 20px;

  &:hover{
    cursor: default;
  }
`