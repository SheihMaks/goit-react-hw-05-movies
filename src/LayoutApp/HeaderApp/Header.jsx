import { NavLink } from "react-router-dom";
import { HeaderContainer,Navigation } from "./HeaderApp.styled";

 const Header=()=>{
    return(
        <HeaderContainer>
            <Navigation>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='Movies'>Movies</NavLink>
            </Navigation>
        </HeaderContainer>
    )
}

export default Header