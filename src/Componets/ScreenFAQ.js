import React from 'react'
import Styled from 'styled-components'

const StyledScreenFAQ = Styled.div`
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
const StyledCard = Styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    max-width: 600px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background: white;
    margin-top: 3rem;

    img {
        width: 100%;
        max-width: 300px;
    }

    div {
        width: 100%;
        max-width: 300px;
        padding: 10px;
    }

    h3 {
        margin-bottom: 2px;
    }
`

class ScreenFAQ extends React.Component{
    render(){
        return (
            <StyledScreenFAQ>
                <h2>Frequetly-Asked Questions</h2>
                <StyledCard className='StyledCard'>
                    <img alt='imagem' src='https://imagens.brasil.elpais.com/resizer/_i3ZeaxfM8PDGh3XEGviQmTWbKc=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/GI3PMQY6R6G2FUUFOUP4WP4KDE.jpg' />
                    <div>
                        <h3>
                            Card de Pergunta?
                        </h3>
                        <p>
                            It has survived not only five centuries, but also the leap into electron
                         ic typesetting, remaining essentially unchanged. It was popularised in the 1960s wit
                        </p>
                    </div>
                </StyledCard>
                <StyledCard className='StyledCard'>
                    <img alt='imagem' src='https://imagens.brasil.elpais.com/resizer/_i3ZeaxfM8PDGh3XEGviQmTWbKc=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/GI3PMQY6R6G2FUUFOUP4WP4KDE.jpg' />
                    <div>
                        <h3>
                            Card de Pergunta?
                        </h3>
                        <p>
                            It has survived not only five centuries, but also the leap into electron
                         ic typesetting, remaining essentially unchanged. It was popularised in the 1960s wit
                        </p>
                    </div>
                </StyledCard>
                <StyledCard className='StyledCard'>
                    <img alt='imagem' src='https://imagens.brasil.elpais.com/resizer/_i3ZeaxfM8PDGh3XEGviQmTWbKc=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/GI3PMQY6R6G2FUUFOUP4WP4KDE.jpg' />
                    <div>
                        <h3>
                            Card de Pergunta?
                        </h3>
                        <p>
                            It has survived not only five centuries, but also the leap into electron
                         ic typesetting, remaining essentially unchanged. It was popularised in the 1960s wit
                        </p>
                    </div>
                </StyledCard>
                <StyledCard className='StyledCard'>
                    <img alt='imagem' src='https://imagens.brasil.elpais.com/resizer/_i3ZeaxfM8PDGh3XEGviQmTWbKc=/414x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/GI3PMQY6R6G2FUUFOUP4WP4KDE.jpg' />
                    <div>
                        <h3>
                            Card de Pergunta?
                        </h3>
                        <p>
                            It has survived not only five centuries, but also the leap into electron
                         ic typesetting, remaining essentially unchanged. It was popularised in the 1960s wit
                        </p>
                    </div>
                </StyledCard>
            </StyledScreenFAQ>
        );
    }
}

export default ScreenFAQ
