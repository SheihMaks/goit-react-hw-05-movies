import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLinkStyled=styled(NavLink)`
display:inline-flex;
align-items:center;
text-decoration:none;
color:#414a45;
padding:3px;
border: 1px solid black;
border-radius:5px;

&:focus-visible,
&:hover{
    background-color:#266943;
    color:white;
}
`
export const GoBackText=styled.p`
font-weight:600;
`