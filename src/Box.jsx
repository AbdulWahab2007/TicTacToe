import React from 'react'
import styled from 'styled-components'

export default function Box(props) {
  return (
    <StyledBox value={props.value} onClick={props.HandleBoxClick}>
      {props.value}
    </StyledBox>
  )
}

const StyledBox = styled.div`
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
  user-select: none;
`