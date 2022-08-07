import { Oval } from  'react-loader-spinner';
import {SpinnerContainer} from 'Utils/Spinner/Spinner.styled';



export const Spinner=()=>{
   return (<SpinnerContainer><Oval color="#00BFFF" height={80} width={80} /></SpinnerContainer>)
}
