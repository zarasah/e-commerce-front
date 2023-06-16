import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

export default function CommonLayout() {
    // const jwt = localStorage.getItem('jwt')
    // const name = localStorage.getItem('username')
    // const user = {
    //     name,
    //     jwt,
    // }
    // if(user.jwt && user.name) {
    //     return (
    //         <>
    //             <Header user = {user}/>
    //             <div className = "wrapper">
    //                 <Outlet /> 
    //             </div>                   
    //         </>
    //     )
    // } else {
        return (
            <div style = {{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Header />
                <div className = "wrapper">
                    <Outlet /> 
                </div>                   
            </div>
        )
    }
// }

// export default function CommonLayout() {
//     return (
//         <>
//             <Header />
//             <div className = "wrapper">
//                 <Outlet /> 
//             </div>                   
//         </>
//     )
// }
