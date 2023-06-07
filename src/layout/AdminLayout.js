import '../App.css';
import { Outlet, Navigate, Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Dashboard from '../pages/Dashboard';

export default function AdminLayout() {
    const role = localStorage.getItem('role')
    const jwt = localStorage.getItem('jwt')
    
    if (jwt && role === '1') {
        return (
            // <div className='wrapper'>
            //     <div>
            //         Hello Admin
            //     </div>
            //     <Outlet />
            // </div>
            <Navigate to="/" replace={true} />
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