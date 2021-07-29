import React from 'react'
import Styled from 'styled-components'

import aboutList from './About.js'

const StyledScreenAbout = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    min-height: 100vh;
    background: #cad7de;
    padding: 2rem 0;

    h2 {
        margin-top: 5.5rem;
    }
`
const StyledContainerCards = Styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 90%;
`

const StyledCard = Styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background: white;
    margin: 1rem;

    img {
        width: 100%;
    }

    div {
        width: 100%;
        padding: 10px;
        height: 100px;
    }

    div h3 {
        margin-bottom: 2px;
    }
`
const StyledDescriptions = Styled.div`
    margin-top: 1rem;
    width: 80%;

    ul li {
        margin: 2vh 0;
    }
`

class ScreenAbout extends React.Component{
    render(){
        return (
            <StyledScreenAbout>
                <h2>Sobre nós</h2>
                <StyledContainerCards>
                    {
                        aboutList &&
                        aboutList.map((servico, index) => {
                            return (
                                <StyledCard className='StyledCard' key={index}>
                                    <img alt='imagem' src={servico.img} />
                                    <div>
                                        <h3>
                                            {servico.title}
                                        </h3>
                                        <p>
                                            {servico.description}
                                        </p>
                                    </div>
                                </StyledCard>
                            );
                        })
                    }
                </StyledContainerCards>
                <StyledDescriptions>
                    <ul>
                        <li>Espaço Terapêutico especializado em oferecer tratamentos a preços populares de: Acupuntura e outras Terapias Holísticas ou Integrativas, Psicoterapia e Tratamentos Estéticos. </li>
                        <li>Profissionais qualificados para cada terapia.​</li>
                        <li>Atendimentos por sessão ou pacotes de tratamento com desconto. Pagamento facilitado com cartões de crédito.</li>
                        <li>Convênios com empresas e sindicatos.</li>
                        <li>Aluguel de espaços de atendimento, por hora, para: terapeutas, profissionais da saúde e estética (ver página de coworking).</li>
                    </ul>
                </StyledDescriptions>
            </StyledScreenAbout>
        );
    }
}

export default ScreenAbout
