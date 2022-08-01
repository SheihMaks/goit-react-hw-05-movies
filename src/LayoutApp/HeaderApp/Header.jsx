import { NavLink} from "react-router-dom";
import { HeaderContainer,Navigation,NavLinkStyled } from "./HeaderApp.styled";

export const Header=()=>{
    return(
        <><HeaderContainer>
            <Navigation>
            <NavLinkStyled to='/'>Home</NavLinkStyled>
            <NavLinkStyled to='Movies'>Movies</NavLinkStyled>
            </Navigation>
        </HeaderContainer>
        </>
    )
}

