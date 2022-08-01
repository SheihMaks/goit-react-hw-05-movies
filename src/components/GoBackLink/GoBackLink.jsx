import { IoMdArrowRoundBack} from 'react-icons/io';
import {NavLinkStyled,GoBackText} from './GoBackLink.styled';

export const GoBackLink=()=>{
    return(
        <NavLinkStyled to="/"><IoMdArrowRoundBack/><GoBackText>Go Back</GoBackText></NavLinkStyled>
    )
}