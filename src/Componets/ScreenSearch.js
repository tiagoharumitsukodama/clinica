import React from 'react'
import Styled from 'styled-components'
import BackgroundImage from './Images/background_search.svg'

const StyledScreenSearch = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url(${BackgroundImage});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

`
const StyledInput = Styled.div`
    display: flex;
    justify-content: space-between;
    height: 5.5vh;
    width: 80%;
    max-width: 600px;
    background: white;
    border: 1px solid white;

    button {
        border: none;
        background: #26733a;
        padding: 0 10px;
        font-weight: 700;
        color: white;
        height: 100%;
    }

    input {
        border: transparent;
        padding-left: 10px;
        font-weight: 700;
    }

    input:focus
    {
        border: none;
        outline-offset: 0px;
        outline: none;
    }
`

class ScreenSearch extends React.Component{
    render(){
        return (
            <StyledScreenSearch>
                <StyledInput>
                    <input 
                        placeholder='Digite o que procura'
                    />
                    <button>Buscar</button>
                </StyledInput>
            </StyledScreenSearch>
        );
    }
}

export default ScreenSearch