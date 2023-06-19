import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export default function CommonLayout() {
    return (
        <div style = {{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Header />
            <div className = "wrapper">
                <Outlet /> 
            </div>
            <Footer />                 
        </div>
    )
}