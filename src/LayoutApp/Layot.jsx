import {Outlet} from 'react-router-dom';
import  Header  from './HeaderApp/Header';

 const Layot=()=>{
    return(
        <Header>
            <Outlet/>
        </Header>
    )
}

export default Layot