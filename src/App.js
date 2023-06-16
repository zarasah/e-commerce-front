import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container, Box } from '@mui/material';
// import Header from "./components/header/Header";
import CommonLayout from './layout/CommonLayout';
import AdminLayout from './layout/AdminLayout';
import UserLayout from './layout/UserLayout';
import Home from "./pages/Home";
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
// import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';
// import ProductsList from './components/ProductsList';
import DashboardLayout from './layout/DashboardLayout';
import UsersTable from './components/UsersTable';
import CategoriesTable from './components/CategoriesTable';
import ProductsTable from './components/ProductsTable';

function App() { 
  return (
    <Container maxWidth = 'xl' sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh',}}>
      <BrowserRouter>
            {/* <Header /> */}
            <Box>
              <Routes>
                <Route element = {<CommonLayout />}>
                  <Route path = "/" element = {<Home />} />
                  <Route path = "/shop" element = {<Shop />} />
                  <Route path = "/product/:id" element = {<ProductPage />} />
                  <Route path = "/blog" element = {<Blog />} />
                  <Route path = "/about" element = {<About />} />
                  <Route path = "/contact" element = {<Contact />} />
                  <Route path = "/login" element = {<Login />}/>
                  <Route path = "/register" element = {<Register />}/>
                  <Route path = "*" element={<NotFound />}/>
                  <Route path = "/admin" element = {<AdminLayout />} >
                    <Route index element = {<Home />} />
                    <Route path = 'account' element = {<Account />} />
                    <Route path = 'dashboard' element = {<DashboardLayout />}>
                      <Route path = "userstable" element = {<UsersTable />} />
                      <Route path = "categoriestable" element = {<CategoriesTable />} />
                      <Route path = "productstable" element = {<ProductsTable />} />
                    </Route>
                    {/* <Route path = "dashboard" element = {<Dashboard />} />
                    <Route path = "dashboard/userstable" element = {<Dashboard />} />
                    <Route path = "dashboard/categoriestable" element = {<Dashboard />} />
                    <Route path = "dashboard/productstable" element = {<Dashboard />} /> */}
                  </Route>
                  <Route path = "/user" element = {<UserLayout />} >
                    <Route index element = {<Home />} />
                    <Route path = 'account' element = {<Account />} />
                    <Route path = "cart" element = {<Cart />} />
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
// import UserLayout from './layout/UserLayout';
// import Home from "./pages/Home";
// import Shop from './pages/Shop';
// import Blog from './pages/Blog';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import NotFound from './pages/NotFound';
// import Dashboard from './pages/Dashboard';
// import Account from './pages/Account';
// import Cart from './pages/Cart';
// import ProductPage from './pages/ProductPage';
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
//                   <Route path = "/shop" element = {<Shop />} />
//                   <Route path = "/product/:id" element = {<ProductPage />} />
//                   <Route path = "/blog" element = {<Blog />} />
//                   <Route path = "/about" element = {<About />} />
//                   <Route path = "/contact" element = {<Contact />} />
//                   <Route path = "/login" element = {<Login />}/>
//                   <Route path = "/register" element = {<Register />}/>
//                   <Route path = "*" element={<NotFound />}/>
//                   <Route path = "/admin" element = {<AdminLayout />} >
//                     <Route index element = {<Home />} />
//                     <Route path = 'account' element = {<Account />} />
//                     <Route path = "dashboard" element = {<Dashboard />} />
//                   </Route>
//                   <Route path = "/user" element = {<UserLayout />} >
//                     <Route index element = {<Home />} />
//                     <Route path = 'account' element = {<Account />} />
//                     <Route path = "cart" element = {<Cart />} />
//                   </Route>
//                 </Route>                
//               </Routes>
//             </Box>
//       </BrowserRouter>
//     </Container>  
//   );
// }

// export default App;