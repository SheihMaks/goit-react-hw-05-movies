import { IoMdArrowRoundBack} from 'react-icons/io';
import {NavLinkStyled,GoBackText} from './GoBackLink.styled';

export const GoBackLink=({backLink})=>{
    return(
        <NavLinkStyled to={backLink}><IoMdArrowRoundBack/><GoBackText>Go Back</GoBackText></NavLinkStyled>
    )
}