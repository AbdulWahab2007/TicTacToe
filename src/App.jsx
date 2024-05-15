import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './components/GlobalCSS.jsx'
import Box from './components/Box.jsx'
import ReloadIcon from './components/icons/ReloadIcon.jsx'

export default function App() {

  const [turn, setTurn] = useState("X");
  const [value, setValue] = useState("O");
  const [boxes, setBoxes] = useState(['X', 'X', '', '', 'O', 'O', '', 'O', 'X']);
  const [win, setWin] = useState(false);
  const [draw, setDraw] = useState(false);
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
    const victory = new Audio("./public/assets/Victory.mp3")
    const drawAudio = new Audio("./public/assets/Draw.mp3")
    let winn = false
    for (let i = 0; i <= 7; i++) {
      if (boxes[winner[i][0]] == boxes[winner[i][1]] && boxes[winner[i][1]] == boxes[winner[i][2]] && boxes[winner[i][0]] != null) {
        winn = true
        break;
      }
    }
    if (!winn && !boxes.includes(null)) {
      setDraw(true)
      drawAudio.play()
    } else if (winn) {
      setWin(true)
      victory.play()
    }
    if (win) {
      victory.play()
    }
  }

  const handlestartclick = () => {
    setBoxes(Array(9).fill(null))
    setStart(true);
    setWin(false)
    setDraw(false)
  }


  const handleboxclick = (boxnum) => {

    if (start == true) {



      if (boxes[boxnum] === null && win == false) {
        const click = new Audio("./public/assets/Click.mp3")
        click.play()


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

      if (!win && !draw) {
        checkwinner();
      }

    }
  }

  return (
    <>
      <GlobalStyle />
      <Main>
        <Container start={start}>
          <Row>
            <Box value={boxes[0]} handleboxclick={() => handleboxclick(0)} />
            <Box value={boxes[1]} handleboxclick={() => handleboxclick(1)} />
            <Box value={boxes[2]} handleboxclick={() => handleboxclick(2)} />
          </Row>
          <Row>
            <Box value={boxes[3]} handleboxclick={() => handleboxclick(3)} />
            <Box value={boxes[4]} handleboxclick={() => handleboxclick(4)} />
            <Box value={boxes[5]} handleboxclick={() => handleboxclick(5)} />
          </Row>
          <Row>
            <Box value={boxes[6]} handleboxclick={() => handleboxclick(6)} />
            <Box value={boxes[7]} handleboxclick={() => handleboxclick(7)} />
            <Box value={boxes[8]} handleboxclick={() => handleboxclick(8)} />
          </Row>
        </Container>


        <Desc>
          <div className="row">
            <h3>Circle & Cross</h3>
            <img src="/public/assets/GameIcon.png" />
          </div>
          <p>The winner is the first person to place three symbols on one (straight) line. | by Abdul Wahab</p>
          <hr />
          <Button start={start} onClick={handlestartclick}>Start Game</Button>
          <TurnBox start={start} win={win} draw={draw}>{value + "'s turn"} </TurnBox>
          <WinBadge win={win} draw={draw}>{draw == true ? "Draw" : turn + " is winner"}</WinBadge>
          <Anchor win={win} draw={draw} onClick={handlestartclick}><ReloadIcon /> Start Again</Anchor>
        </Desc>
      </Main>
    </>
  )
}
const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #22242a;
width: 90vw;
border-radius: 10px;
padding: 6vw 0px 6vw 0px;

@media (max-width: 900px) {
  flex-direction: column;
  justify-content: flex-start;
  width: 92vw;
  height: 92vh;
  padding: 0px;
}
`
const WinBadge = styled.div`
  display: ${(props) => props.win === true ? 'flex' : props.draw == true ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 3px;
  background-color: #6b9fe8;
  color: #1b1e22;
  font-size: 35px;
  font-family: "Fira Sans", sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-top: 20px;
  &:hover{
    cursor: default;
  }
  @media (max-width: 900px) {
    height : 8vw;
    font-size: 5vw;
    margin-top: 0px;
}
`


const Container = styled.div`
  width: 450px;
  border-radius: 10px;
  background-color: #1b1e22;
  box-shadow: ${(props) => props.start === true ? '0px 0px 15px #1777ff' : '0px'};

  @media (max-width: 900px) {
    width: 80vw;
    padding: 2vw;
    margin: 10px;
}
`

const Row = styled.div`
  display: flex;
  width: 95%;
  height : 135px;
  margin: 10px;

  @media (max-width: 900px) {
    height: 25vw;
}
`



const Desc = styled.div`
display: flex;
flex-direction: column;
  width: 350px;
  height: 450px;
  margin-left: 100px;
  .row{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media (max-width: 900px) {
      justify-content: flex-start;
      margin-top: 3vw;
}
  }
  h3{
    font-family: "Fira Sans", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 50px;
    margin-bottom: -20px;
    @media (max-width: 900px) {
      font-size: 7vw;
      margin: 0px;
}
  }
  img{
    width: 110px;
    height: 110px;
    margin-bottom: -55px;
    margin-right: 30px;
    user-select: none;

    @media (max-width: 900px) {
      width: 14vw;
      height: 14vw;
      margin-top: -50px;
      margin-left: 10px;
}
  }
  p{
    font-family: "Fira Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 23px;
    color: #7e7f84;
    @media (max-width: 900px) {
      font-size: 3vw;
      margin-right: 30px;
      margin-top: 25px
}
  }
  hr{
    height: 3px;
    width: 100%;
    background-color: #b5b7be;
    border: none;

    @media (max-width: 900px) {
      height: 2px;
}
  }


  @media (max-width: 900px) {
      height: auto;
      margin: 0px;
      width: 80vw;
      justify-content: flex-start;
      align-items: flex-start;
}
`
const Anchor = styled.div`
    display:  ${(props) => props.win === true ? 'flex' : props.draw == true ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    width: 65%;
    height: 60px;
    background-color: #4377bf;
    color: white;
    border-radius: 3px;
    margin-top: 20px;
    user-select: none;
    font-family: "Fira Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 23px;
    white-space: nowrap;
    padding-right: 30px;

    @media (max-width: 900px) {
      height : 7vw;
      font-size: 4vw;
      margin-top: 1vw;
      white-space: nowrap;
      padding-right: 28vw;
}
`

const Button = styled.div`
  display: ${(props) => props.start === true ? 'none' : 'flex'};
  justify-content: flex-start;
  align-items: center;
  width: 180px;
  height: 60px;
  border-radius: 3px;
  background-color: #1777ff;
  font-size: 21px;
  font-family: "Fira Sans", sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-top: 20px;
  padding-left: 25px;
  user-select: none;
  &:hover{
    cursor: pointer;
  }


  @media (max-width: 900px) {
    width: 60%;
    height: 8vw;
    font-size: 3.5vw;
    margin-top: 2px;
    padding-left: 3vw;
}
`

const TurnBox = styled.div`
  display: ${(props) => props.start === false ? 'none' : props.win === true ? 'none' : props.draw === true ? 'none' : 'flex'};
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
  user-select: none;
  &:hover{
    cursor: default;
  }

  @media (max-width: 900px) {
    height: 7vw;
    font-size: 4vw;
    margin-top: 1vw;
}
`