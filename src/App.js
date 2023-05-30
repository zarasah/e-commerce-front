import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Container maxWidth = 'xl' sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh',}}>
      <BrowserRouter>
            <Header />
            <Box>
              <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/login" element = {<Login />}/>
                <Route path = "/register" element = {<Register />}/>
                <Route path = "*" element={<NotFound />}/>
              </Routes>
            </Box>
      </BrowserRouter>
    </Container>  
  );
}

export default App;
