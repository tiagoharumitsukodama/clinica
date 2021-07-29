import React from 'react'
import Styled from 'styled-components'

import faqList from './FAQ'

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
        min-height: 150px;
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
                <h2>Perguntas frequêntes</h2>
                {
                    faqList &&
                    faqList.map((question, index) => {
                        return (
                            <StyledCard className='StyledCard' key={index}>
                                <img alt='imagem' src={question.img} />
                                <div>
                                    <h3>
                                        {question.title}
                                    </h3>
                                    <p>
                                        {question.question}
                                    </p>
                                </div>
                            </StyledCard>
                        );
                    })
                }
            </StyledScreenFAQ>
        );
    }
}

export default ScreenFAQ
