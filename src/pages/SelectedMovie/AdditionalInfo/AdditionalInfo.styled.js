import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const InfoContainer=styled.div`
border-top: solid 3px #d1cfcf;
border-bottom: solid 3px #d1cfcf;
`

export const HeaderAdditionalInfo=styled.h4`
margin:10px 0;
`

export const LinkList=styled.ul`
`

export const LinkItem=styled.li`
`

export const OutletContainer=styled.div`
`

export const NavLinkStyled=styled(NavLink)`
display:inline-flex;
text-decoration:none;
background-color:#02f73c;
margin-bottom:5px;
padding:5px 8px;
font-size:14px;
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
