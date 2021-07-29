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
    background: #044700;
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
                        Tratamentos
                    </h3>
                    <ul>
                        <li>Tratamento 1</li>
                        <li>Tratamento 2</li>
                        <li>Tratamento 3</li>
                        <li>Tratamento 4</li>
                    </ul>
                </StyledCard>
                <StyledCard>
                    <h3>
                        Coworking
                    </h3>
                    <ul>
                        <li>Tópico 1</li>
                        <li>Tópico 2</li>
                        <li>Tópico 3</li>
                    </ul>
                </StyledCard>
                <StyledCard>
                    <h3>
                        Contato
                    </h3>
                    <ul>
                        <li>Localização 1</li>
                        <li>Telefone 2</li>
                        <li>Email 3</li>
                        <li>Localização 4</li>
                        <li>Como chegar 5</li>
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