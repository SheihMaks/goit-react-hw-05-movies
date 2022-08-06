import {Outlet} from 'react-router-dom';
import  {Header}  from './HeaderApp/Header';
import {AppContainer, Container } from 'components/ContainerApp/Container.styled'

export const Layout=()=>{
    return(
        <AppContainer><Header/>
        <Container>
            <Outlet/>
            </Container></AppContainer>
    )
}
