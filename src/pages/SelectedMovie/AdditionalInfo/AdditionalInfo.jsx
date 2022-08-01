import {NavLink,Outlet} from 'react-router-dom';

import {InfoContainer,HeaderAdditionalInfo,LinkList,LinkItem,OutletContainer} from './AdditionalInfo.styled';

export const AdditionalInfo=({id})=>{

    return(<><InfoContainer>
        <HeaderAdditionalInfo>Additional Information</HeaderAdditionalInfo>
        <LinkList>
        <LinkItem><NavLink to={`/movies/${id}/cast`}>Cast</NavLink></LinkItem>
        <LinkItem><NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink></LinkItem>
        </LinkList>
        </InfoContainer>
        <OutletContainer>
            <Outlet/>
        </OutletContainer></>)
}