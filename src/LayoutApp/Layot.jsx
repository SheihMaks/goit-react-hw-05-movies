import {Outlet} from 'react-router-dom';
import  {Header}  from './HeaderApp/Header';
import { Container } from 'components/ContainerApp/Container.styled'

 const Layot=()=>{
    return(
        <><Header/>
        <Container>
            <Outlet/>
            </Container></>
    )
}

export default Layot