import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const HeaderContainer= styled.header`
width:100%;
background-color:#128387;
padding:20px 15px;
`
export const Navigation=styled.nav`
display:flex;
`
export const NavLinkStyled=styled(NavLink)`
text-decoration:none;
background-color:#02f73c;
padding:10px 15px;
margin-right:15px;
font-size:18px;
color:#414a45;
font-weight:600;
border:1px solid grey;
border-radius:5px;
&.active{
    background-color:#266943;
    color:white;
    border:1px solid white;
}
&:hover:not(.active),
&:focus-visible:not(.active){
    background-color:#69c28f;
    color:#f2eded;
    border:1px solid #2695eb;
}`