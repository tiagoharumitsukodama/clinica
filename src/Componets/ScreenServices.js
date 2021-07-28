import React from 'react'
import Styled from 'styled-components'
import BackgroundImage from './Images/background_services.svg'

const StyledScreenServices = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-height: 100vh;
    background: #edfeff;
    padding: 3rem 0;
    background-image: url(${BackgroundImage});
    background-size: 300px 500px;
    background-repeat: no-repeat;
    background-position: right center;

    h2 {
        margin: 1.5rem 0;
    }
`
const StyledContainerCards = Styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const StyledCard = Styled.div`
    width: 350px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    padding-left: 5px;

    h3 {
        color: #878787;
    }
    ul {
        padding-left: 1rem;
        list-style-type: none;
    }
    li {
        margin: 10px 0;
    }
`

class ScreenServices extends React.Component{
    render(){
        return (
            <StyledScreenServices>
                <h2>
                    Services
                </h2>
                <StyledContainerCards>
                <StyledCard>
                    <h3>
                        Tipo A
                    </h3>
                    <ul>
                        <li>tipo 1</li>
                        <li>tipo 2</li>
                        <li>tipo 3</li>
                        <li>tipo 4</li>
                        <li>tipo 5</li>
                        <li>tipo 6</li>
                    </ul>
                </StyledCard>
                <StyledCard>
                    <h3>
                        Tipo A
                    </h3>
                    <ul>
                        <li>tipo 1</li>
                        <li>tipo 2</li>
                        <li>tipo 3</li>
                        <li>tipo 4</li>
                        <li>tipo 5</li>
                        <li>tipo 6</li>
                    </ul>
                </StyledCard>
                <StyledCard>
                    <h3>
                        Tipo A
                    </h3>
                    <ul>
                        <li>tipo 1</li>
                        <li>tipo 2</li>
                        <li>tipo 3</li>
                        <li>tipo 4</li>
                        <li>tipo 5</li>
                        <li>tipo 6</li>
                    </ul>
                </StyledCard>
                </StyledContainerCards>
            </StyledScreenServices>
        );
    }
}

export default ScreenServices