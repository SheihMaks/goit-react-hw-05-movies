import {Outlet} from 'react-router-dom';
import  {Header}  from './HeaderApp/Header';
import { Container } from 'components/ContainerApp/Container.styled'

export const Layout=()=>{
    return(
        <><Header/>
        <Container>
            <Outlet/>
            </Container></>
    )
}
