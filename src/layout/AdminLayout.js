import '../App.css';
import { Outlet, Navigate, Link, useLocation  } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

export default function AdminLayout() {
    const location = useLocation();
    const currentURL = location.pathname;
    const role = localStorage.getItem('role')
    const jwt = localStorage.getItem('jwt')
    
    if (jwt && role === '1') {
        
        return (
            <>
                <Outlet />
            </>
            
        )
    } else {
        return <Navigate to="/login" replace={true} />
    }
}