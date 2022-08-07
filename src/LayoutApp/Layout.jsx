import { Suspense } from 'react';
import {Outlet} from 'react-router-dom';
import  {Spinner}  from 'Utils/Spinner/Spinner';
import  {Header}  from './HeaderApp/Header';
import { Footer } from './FooterApp/Footer';
import {AppContainer, Container } from 'components/ContainerApp/Container.styled'

const Layout=()=>{
    return(
        <AppContainer>
        <Header/>
        <Container>
        <Suspense fallback={<Spinner/>}>
        <Outlet/>
        </Suspense>
        </Container>
            <Footer/>
            </AppContainer>
    )
}

export default Layout