import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, TablePagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../store/userSlice';
import { v4 as uuidv4 } from 'uuid';

const UsersTable = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.user.users);

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch])

  return (
    <div style = {{paddingTop: '100px', width: '80%'}}>
        <TableContainer component={Paper}>
      <Table>
        <TableHead>
            <TableRow>
                <TableCell sx={{ textAlign: 'center', backgroundColor: 'rgb(245, 172, 107)' }} colSpan={Object.keys(data[0]).length + 2}>
                <Typography variant="h6" style={{fontWeight: '600'}}>Users Table</Typography>
                </TableCell>
            </TableRow>
          <TableRow>
            {Object.keys(data[0]).map((key) => (
              <TableCell key={key} sx={{ fontSize: '16px', fontWeight: '600' }}>{key.charAt(0).toUpperCase() + key.slice(1)}</TableCell>
            ))}
            <TableCell sx={{ fontSize: '16px', fontWeight: '600' }}>Edit</TableCell>
            <TableCell sx={{ fontSize: '16px', fontWeight: '600' }}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              {Object.values(user).map((value) => (
                <TableCell key={uuidv4()}>{value}</TableCell>
              ))}
              <TableCell style={{ width: '50px' }}>
                <IconButton aria-label="edit">
                  <EditIcon sx={{ color: 'rgb(245, 172, 107)' }} />
                </IconButton>
              </TableCell>
              <TableCell style={{ width: '50px' }}>
                <IconButton aria-label="delete">
                  <DeleteIcon sx={{ color: 'rgb(245, 172, 107)' }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default UsersTable;