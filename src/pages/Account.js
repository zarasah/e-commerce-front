import { useEffect } from 'react';
import { Typography, Container, TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserRequest } from '../store/userSlice';

const MyAccount = () => {
  const { firstName, lastName, email, password, loading, error } = useSelector((state) => state.user);
  const userId = localStorage.getItem('id')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserRequest(userId));
  }, [dispatch, userId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the update logic here
    // dispatch(updateUser({ firstName, lastName, email, password }));
  };

  const containerStyle = {
    backgroundColor: 'rgb(248, 248, 248)',
    borderRadius: '10%',
    width: '50%',
    padding: '2rem',
    marginTop: '4rem'
  };

  return (
    <div style={containerStyle}>
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Typography variant="h1" component="h1" gutterBottom color='rgb(241, 158, 86)'>
          My Account
        </Typography>
        {error && <div>Error: {error}</div>}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              name="firstName"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              value={firstName}
              // onChange={handleInputChange}
            />
            <TextField
              label="Last Name"
              name="lastName"
              variant="outlined"
              margin="normal"
              fullWidth
              value={lastName}
              // onChange={handleInputChange}
            />
            <TextField
              label="Email Address"
              name="email"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              value={email}
              // onChange={handleInputChange}
            />
            <TextField
              type="password"
              label="New Password"
              name="password"
              variant="outlined"
              margin="normal"
              fullWidth
              value={password}
              // onChange={handleInputChange}
            />
            <Button type="submit" variant="contained" color="secondary" sx={{color: 'white', '&:hover': {background: 'rgb(241, 158, 86)'}}}>
              Update
            </Button>
          </form>
        )}
      </Container>
    </div>
  );
};

export default MyAccount;