// Write your Character component here
import React from 'react';
import styled from "styled-components"

const StyledCharacter = styled.div`
background-color: white;
color: purple;
opacity: 0.4;
display: flex;
flex-direction: column;
justified-content: center;
margin: 20px;


&&:hover {
    opacity: 0.8;
}
`

const Character = (props) => {
    return (
        <StyledCharacter>
            <h2>Name: {props.character.name} </h2>
            <p>Height: {props.character.height}</p>
            <p>Hair color: {props.character.hair_color}</p>
            <p>Skin Color: {props.character.skin_color}</p>
        </StyledCharacter>
    )
}

export default Character;