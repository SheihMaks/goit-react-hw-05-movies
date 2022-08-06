import styled from "styled-components";


export const SearchFormMovies=styled.form`
display:flex;
margin-bottom:20px;
`

export const InputSearch=styled.input`
padding:4px;
border-radius:4px;
margin-right:4px;
`

export const ButtonSearch=styled.button`
cursor:pointer;
background-color:#02f73c;
color:#414a45;
border-radius:4px;
&:hover,
&:focus{
    background-color:#266943;
    color:white;
    border:1px solid green;
}

`