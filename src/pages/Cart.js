import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Button, Typography, Modal } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchcartItemsRequest, 
  cartItemAddRequest, 
  cartItemUpdateRequest, 
  toggleCheck, 
  deleteAllCartItemsRequest, 
  deleteCheckedCartItemsRequest,
  updateCartCount
 } from '../store/cartItemSlice';

  const buttobStyle = {
    background: 'rgb(245, 172, 107)',
    color: '#FFFFFF',
    cursor: 'pointer',
  }

function Cart({ closeDrawer, isOpenInDrawer }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartItem.cartItem);
  let cartItems = [];
  const userId = localStorage.getItem('id');
  
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (userId) {
      dispatch(fetchcartItemsRequest(userId));
    } else {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [userId, dispatch]);

  if (userId && products) {
    cartItems = products;
  } else {
    cartItems = cart?.map((item) => ({
      id: item.product.id,
      name: item.product.name,
      price: item.product.price,
      count: item.count,
      checked: item.checked
    }));
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
      const updatedCartItems = cart.map(item => {
        if (item.product.id === itemId) {
          item.count += 1;
          return item;
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
      setCart(updatedCartItems);
    };

    const handleIncreaseCountForUser = (itemId) => {
      dispatch(cartItemAddRequest({userId, id: itemId}));
    };
    

  const handleDecreaseCount = (itemId) => {
    const updatedCartItems = cart.map(item => {
      if (item.product.id === itemId) {
        if (item.count === 1) {
          return null;
        } else {
          item.count -= 1;
          return item;
        }
      }
      return item;
    });
    const filteredCartItems = updatedCartItems.filter(item => item !== null);
    localStorage.setItem('cart', JSON.stringify(filteredCartItems));
    setCart(filteredCartItems);
  };

  const handleDecreaseCountForUser = (itemId) => {
    dispatch(cartItemUpdateRequest({userId, id: itemId}));
  };

  const handleDeleteCheckedProducts = () => {
    const updatedCartItems = cart.filter(item => !item.checked);

    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    setCart(updatedCartItems);
  };

  const handleDeleteCheckedForUser = () => {
    const checkedProducts = products.filter(item => item.checked === true);
    const productsIds = checkedProducts.map((item => item.id));
    const data = {
      userId,
      productsIds,
    }
    dispatch(deleteCheckedCartItemsRequest(data));
  };

  const handleDeleteAll = () => {
    const updatedCartItems = [];

    localStorage.removeItem('cart');
    setCart(updatedCartItems);
  };

  const handleDeleteAllForUser = () => {
    dispatch(deleteAllCartItemsRequest(userId))
  };

  const handleToggleCheck = (itemId) => {
    const updatedCartItems = cart.map(item => {
      if (item.product.id === itemId) {
        item.checked = !item.checked;
        return item
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    setCart(updatedCartItems);
  };

  const handleToggleCheckForUser = (itemId) => {
    dispatch(toggleCheck(itemId));
  };

  const calculateTotalCount = () => {
    const count = cartItems?.reduce((count, item) => count + item.count, 0);
    // dispatch(updateCartCount(count));
    return count
  };

  const calculateTotalSum = () => {
    return cartItems?.reduce((sum, item) => sum + item.price * item.count, 0);
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
                {!isOpenInDrawer && <TableCell>Image</TableCell>}
                <TableCell>Price</TableCell>
                <TableCell sx={{textAlign: 'center'}}>Count</TableCell>
                <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems?.map(item => (
                <TableRow key={item.id}>
                    <TableCell>
                        <Checkbox
                            checked={item.checked || false}
                            onChange={() => {userId ? handleToggleCheckForUser(item.id) : handleToggleCheck(item.id)}}
                        />
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    {!isOpenInDrawer && 
                      <TableCell>
                        <img src={item.image} alt={item.name} style={{ width: '70px', height: '90px' }} />
                      </TableCell>
                    }
                    <TableCell>${item.price}</TableCell>
                    <TableCell sx={{textAlign: 'center'}}>
                    <Button onClick={() => {userId ? handleDecreaseCountForUser(item.id) :handleDecreaseCount(item.id)}}>-</Button>
                    {item.count}
                    <Button onClick={() => {userId ? handleIncreaseCountForUser(item.id) : handleIncreaseCount(item.id)}}>+</Button>
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
        <Button onClick={userId ? handleDeleteCheckedForUser : handleDeleteCheckedProducts} style={buttobStyle}>Delete</Button>
        <Button onClick={userId ? handleDeleteAllForUser : handleDeleteAll} style={buttobStyle}>Delete All</Button>
        <Button style={buttobStyle}>Checkout</Button>
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