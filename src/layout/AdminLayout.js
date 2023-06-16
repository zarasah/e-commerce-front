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
                {/* <div className='wrapper'>
                    <Navigate to="/" replace={true} />
                    <Outlet />
                </div> */}
            </>
            
        )
    } else {
        return <Navigate to="/login" replace={true} />
    }
    
    // console.log('you are in admin page')
    // const jwt = localStorage.getItem('jwt');
    // const role = localStorage.getItem('role');
    // console.log(jwt, role)
    // if (jwt) {
    //     if (role === 0) {
    //         console.log('you are checked')
    //         return (
    //             <div>
    //                 <h1>Admin</h1>
    //                 {/* <Header /> */}
    //                 {/* <Dashboard /> */}
    //                 {/* <Outlet /> */}
    //             </div>
    //         )
    //     }
    // }
    // return <Navigate to="/login" replace={true} />;
}


// // import { Outlet } from 'react-router-dom';


// export default function CommonLayout() {
//     return (
//         <>
//             <div className = "wrapper">
//                 <h1>Admin</h1>
//             </div>                   
//         </>
//     )
// }
