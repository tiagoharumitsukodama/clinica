import React from 'react'
import Styled from 'styled-components'
import IconMenu from './Images/icon_menu.png'

const StyledHeaders = Styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    background: white;
    opacity: .85;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const StyleTitle = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 3.5rem;

    h1 {
        font-size: 1.8rem;
        margin-left: 1rem;
    }

    button {
        height: 2.5rem;
        width: 2.5rem;
        border: none;
        margin-left: .5rem;
        border-radius: 5px;
    }

    button img {
        width: 100%;
        height: 100%;
    }

`
const StyleMenu = Styled.div`
    display: ${props => props.show? 'block':'none'};

    width: 100%;
    margin: .8rem 0;

    ul {
        padding: 1rem;
        list-style-type: none;
    }

    ul li {
        margin: .5rem 0;
    }

    ul li a {
        font-weight: 700;
        color: black;
    }

    ul li a:hover {
        color: tomato;
    }
`

class Headers extends React.Component{

    state = {
        showMenu: false
    }

    onClickMenu = () => {
        this.setState({ showMenu: !this.state.showMenu })
    }

    render(){
        return (
            <StyledHeaders>
                <StyleTitle>
                    <button onClick={this.onClickMenu}>
                        <img src={IconMenu} alt='icon'/>
                    </button>
                    <h1>Healthy</h1>
                </StyleTitle>
                <StyleMenu show={this.state.showMenu}>
                    <ul>
                        <li><a href='/'>Item 1</a></li>
                        <li><a href='/'>Item 2</a></li>
                        <li><a href='/'>Item 3</a></li>
                        <li><a href='/'>Item 4</a></li>
                    </ul>
                </StyleMenu>
            </StyledHeaders>
        );
    }
};

export default Headers;