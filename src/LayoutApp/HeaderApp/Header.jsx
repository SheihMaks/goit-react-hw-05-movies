import { NavLink} from "react-router-dom";
import { HeaderContainer,Navigation } from "./HeaderApp.styled";

export const Header=()=>{
    return(
        <><HeaderContainer>
            <Navigation>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='Movies'>Movies</NavLink>
            </Navigation>
        </HeaderContainer>
        </>
    )
}

