import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from "./components/header/Header";
import CommonLayout from './layout/CommonLayout';
import AdminLayout from './layout/AdminLayout';
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import ProductsList from './components/ProductsList';

function App() { 
  return (
    <Container maxWidth = 'xl' sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh',}}>
      <BrowserRouter>
            {/* <Header /> */}
            <Box>
              <Routes>
                <Route element = {<CommonLayout />}>
                  <Route path = "/" element = {<Home />} />
                  <Route path = "/login" element = {<Login />}/>
                  <Route path = "/register" element = {<Register />}/>
                  <Route path = "*" element={<NotFound />}/>
                  <Route path = "/user" element = {<AdminLayout />} >
                    <Route path = "dashboard" element = {<Dashboard />} />
                  </Route>
                </Route>                
              </Routes>
            </Box>
      </BrowserRouter>
    </Container>  
  );
}

export default App;

// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import { Container, Box } from '@mui/material';
// import Header from "./components/header/Header";
// import CommonLayout from './layout/CommonLayout';
// import AdminLayout from './layout/AdminLayout';
// import Home from "./pages/Home";
// import Login from './pages/Login';
// import Register from './pages/Register';
// import NotFound from './pages/NotFound';
// import Dashboard from './pages/Dashboard';
// import ProductsList from './components/ProductsList';

// function App() { 
//   return (
//     <Container maxWidth = 'xl' sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh',}}>
//       <BrowserRouter>
//             {/* <Header /> */}
//             <Box>
//               <Routes>
//                 <Route element = {<CommonLayout />}>
//                   <Route path = "/" element = {<Home />} />
//                   <Route path = "/login" element = {<Login />}/>
//                   <Route path = "/register" element = {<Register />}/>
//                   {/* <Route path = "/user" element = {<AdminLayout />} >
//                     <Route index element = {<ProductsList />} />
//                     <Route path = "dashboard" element = {<Dashboard />} />
//                   </Route> */}
//                 </Route>
//                 <Route path = "/user" element = {<AdminLayout />} >
//                     <Route index element = {<ProductsList />} />
//                     <Route path = "home" element = {<Home />} />
//                     <Route path = "dashboard" element = {<Dashboard />} />
//                   </Route>
//                 {/* <Route path = "/user" element = {<AdminLayout />} >
//                   <Route index element = {<ProductsList />} />
//                   <Route path = "dashboard" element = {<Dashboard />} />
//                 </Route> */}
//                 {/* </Route> */}
//                 {/* <Route path = "/user">

//                 </Route>         */}
//                 <Route path = "*" element={<NotFound />}/>
//               </Routes>
//             </Box>
//       </BrowserRouter>
//     </Container>  
//   );
// }

// export default App;

// ------------------Working version----------------


// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import { Container, Box } from '@mui/material';
// import Header from "./components/header/Header";
// import Home from "./pages/Home";
// import Login from './pages/Login';
// import Register from './pages/Register';
// import NotFound from './pages/NotFound';

// function App() {
//   return (
//     <Container maxWidth = 'xl' sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh',}}>
//       <BrowserRouter>
//             <Header />
//             <Box>
//               <Routes>
//                 <Route path = "/" element = {<Home />} />
//                 <Route path = "/login" element = {<Login />}/>
//                 <Route path = "/register" element = {<Register />}/>
//                 <Route path = "/user" element = {<UserLayout />}></Route>
//                 <Route path = "*" element={<NotFound />}/>
//               </Routes>
//             </Box>
//       </BrowserRouter>
//     </Container>  
//   );
// }

// export default App;
