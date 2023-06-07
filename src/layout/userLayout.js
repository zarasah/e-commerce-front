import '../App.css';
import { Outlet, Navigate, Link } from 'react-router-dom';

export default function UserLayout() {
    const role = localStorage.getItem('role')
    const jwt = localStorage.getItem('jwt')
    
    if (jwt && role === '0') {
        return (
            <div className='wrapper'>
                <div>
                    Hello User
                </div>
                <Outlet />
            </div>
            
        )
    } else {
        return <Navigate to="/login" replace={true} />
    }
}