import React from 'react'
import Styled from 'styled-components'

import iconSocialMedia from "./Images/icon_socialmedia.png"

const StyledScreenFooter = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 100vh;
    background: #215413;
    padding: 5rem 0;

    img {
        max-width: 300px;
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

    * {
        text-align: center;
    }

    h3 {
        color: white;
    }
    ul {
        list-style-type: none;
    }
    li {
        margin: 10px 0;
        color: #f5f5f5;
    }
`


class Footer extends React.Component{
    render(){
        return (
            <StyledScreenFooter>
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
                <img
                    src={iconSocialMedia}
                    alt='icon social media'
                />
            </StyledScreenFooter>
        );
    }
}

export default Footer