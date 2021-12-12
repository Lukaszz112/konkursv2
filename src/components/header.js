import React from "react";
import {Wrapper} from './HeaderStyled/Wrapper';
import {LogoStyled} from "./HeaderStyled/Logo";
import Logo from "./logo";

class Header extends React.Component{
    render(){

        return(
            <Wrapper>
                <LogoStyled><a href="/"><Logo/></a></LogoStyled>
            </Wrapper>
        )
    }
}

export default Header;