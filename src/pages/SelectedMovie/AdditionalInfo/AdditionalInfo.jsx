import {Outlet} from 'react-router-dom';

import {InfoContainer,HeaderAdditionalInfo,LinkList,LinkItem,OutletContainer,NavLinkStyled} from './AdditionalInfo.styled';

export const AdditionalInfo=({id,notifyError})=>{

    return(<><InfoContainer>
        <HeaderAdditionalInfo>Additional Information</HeaderAdditionalInfo>
        <LinkList>
        <LinkItem
        notifyError={notifyError}>
            <NavLinkStyled to={`/movies/${id}/cast`}>Cast</NavLinkStyled></LinkItem>
        <LinkItem 
        notifyError={notifyError}>
            <NavLinkStyled to={`/movies/${id}/reviews`}>Reviews</NavLinkStyled></LinkItem>
        </LinkList>
        </InfoContainer>
        <OutletContainer>
            <Outlet/>
        </OutletContainer></>)
}