import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Button, Typography, Modal } from "@mui/material";
import { useNavigate, Link } from 'react-router-dom';

function Cart({ closeDrawer, isOpenInDrawer }) {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, count: 2 },
    { id: 2, name: 'Product 2', price: 15, count: 1 },
    { id: 3, name: 'Product 3', price: 20, count: 3 },
  ]);
    const [modalOpen, setModalOpen] = useState(false);

    const buttobStyle = {
        background: 'rgb(245, 172, 107)',
        color: '#FFFFFF',
        cursor: 'pointer',
    }

    function handleCartClick() {
        const role = localStorage.getItem('role')

        if (role === '0') {
            navigate('/user/cart');
            closeDrawer();
        } else if (role === '1') {
            navigate('/admin/cart');
            closeDrawer();
        } else {
            setModalOpen(true)
        }
    };

    function handleClose() {
        setModalOpen(false);
    }

    function handleLogin() {
        setModalOpen(false);
        closeDrawer();
        navigate('/login');
    }

    const handleIncreaseCount = (itemId) => {
        const updatedCartItems = cartItems.map(item => {
        if (item.id === itemId) {
            return { ...item, count: item.count + 1 };
        }
        return item;
        });
        setCartItems(updatedCartItems);
    };

  const handleDecreaseCount = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleDeleteCheckedProducts = () => {
    const updatedCartItems = cartItems.filter(item => !item.checked);
    setCartItems(updatedCartItems);
  };

  const handleDeleteAll = () => {
    setCartItems([]);
  };

  const handleToggleCheck = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateTotalCount = () => {
    return cartItems.reduce((count, item) => count + item.count, 0);
  };

  const calculateTotalSum = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.count, 0);
  };

  return (
    <div style = {{marginLeft: '5%', width: '100vh', marginTop: '5%'}}>
        <Typography variant="h1" sx={{color: 'rgb(245, 172, 107)', textAlign: 'center', cursor: 'pointer'}} gutterBottom onClick={handleCartClick}>
                  Cart
        </Typography>
        <div>Total Count: {calculateTotalCount()}</div>
        <div>Total Sum: ${calculateTotalSum()}</div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
                <TableCell></TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell sx={{textAlign: 'center'}}>Count</TableCell>
                <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map(item => (
                <TableRow key={item.id}>
                    <TableCell>
                        <Checkbox
                            checked={item.checked || false}
                            onChange={() => handleToggleCheck(item.id)}
                        />
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>${item.price}</TableCell>
                    <TableCell sx={{textAlign: 'center'}}>
                    <Button onClick={() => handleDecreaseCount(item.id)}>-</Button>
                    {item.count}
                    <Button onClick={() => handleIncreaseCount(item.id)}>+</Button>
                    </TableCell>
                    <TableCell>${item.price * item.count}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style = {{
        marginTop: '2%',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        <Button onClick={handleDeleteCheckedProducts} style={buttobStyle}>Delete</Button>
        <Button onClick={handleDeleteAll} style={buttobStyle}>Delete All</Button>
      </div>
      <Modal open={modalOpen} onClose={handleClose} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style = {{
            backgroundColor: '#FFFFFF',
            padding: '16px',
            borderRadius: '4px',
        }}>
          <h4>Please Login or Create an Account</h4>
          {/* Additional content or form can be added here */}
          <div style = {{
                marginTop: '2%',
                display: 'flex',
                justifyContent: 'space-around'
            }}>
            <Button onClick={handleLogin} style={buttobStyle}>Login</Button>
            <Button onClick={handleClose} style={buttobStyle}>Close</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Cart;