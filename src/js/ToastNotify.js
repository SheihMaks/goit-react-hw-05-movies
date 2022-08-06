import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export {ToastContainer}
export const notifyWarn = () => toast.warn("Enter something and try again!");
export const notifyNoResults=()=> toast.info("No results for your search")
export const notifyError=()=> toast.error("Error")