import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Spinner } from 'Utils/Spinner/Spinner';
import {Outlet} from 'react-router-dom';

import {InfoContainer,HeaderAdditionalInfo,LinkList,LinkItem,OutletContainer,NavLinkStyled} from './AdditionalInfo.styled';

export const AdditionalInfo=({id})=>{

    return(<><InfoContainer>
        <HeaderAdditionalInfo>Additional Information</HeaderAdditionalInfo>
        <LinkList>
        <LinkItem>
            <NavLinkStyled to={`/movies/${id}/cast`}>Cast</NavLinkStyled></LinkItem>
        <LinkItem>
            <NavLinkStyled to={`/movies/${id}/reviews`}>Reviews</NavLinkStyled></LinkItem>
        </LinkList>
        </InfoContainer>
        <OutletContainer>
        <Suspense fallback={<Spinner/>}>
        <Outlet/>
        </Suspense>
        </OutletContainer></>)
}

AdditionalInfo.propTypes={
    id:PropTypes.string.isRequired,
}