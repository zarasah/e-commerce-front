import '../App.css';
import { Outlet, Navigate } from 'react-router-dom';

export default function UserLayout() {
    const role = localStorage.getItem('role')
    const jwt = localStorage.getItem('jwt')
    
    if (jwt && role === '0') {
        return (
            <Outlet />            
        )
    } else {
        return <Navigate to="/login" replace={true} />
    }
}