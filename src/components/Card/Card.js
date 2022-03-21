import React from 'react'
import styled from 'styled-components'; 

const Card = () => {
  return (
    <CardContain>
        <CardHolder>
            <CardHeder>This is our Header</CardHeder>
            <CardPa>This is a card created by us</CardPa>
            <CardButton>Read More</CardButton>
        </CardHolder>
    </CardContain>
  )
}

export default Card

const CardContain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    Background-color:white;
`

const CardHolder = styled.div`
    width: 350px;
    height: 350px;
    text-align: center;
    background-color: white;
    box-shadow: 5px 5px grey;

`
const CardHeder = styled.h1`
    font-size: 20px;
    font-weight: bold;
`
const CardPa = styled.p`
    margin-top: 30px;

`
const CardButton = styled.button`
width: 105px;
height: 35px;
background-color: green;
font-size: 18px;
text-align: center;
pointer: cursor;
color: white;
margin-top: 200px;
border-radius: 5px;
border: none;

`