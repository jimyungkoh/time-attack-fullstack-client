import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header';
import Main from '../Main';

export default function DefaultLayout({ children }:
    { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <ToastContainer />
        </>
  )
}
