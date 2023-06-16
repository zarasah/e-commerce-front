import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const UsersTable = ({data}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {Object.keys(data[0]).map((key) => (
              <TableCell key={key}>{key}</TableCell>
            ))}
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              {Object.values(user).map((value) => (
                <TableCell key={value}>{value}</TableCell>
              ))}
              <TableCell style={{ width: '50px' }}>
                <IconButton aria-label="edit">
                  <EditIcon />
                </IconButton>
              </TableCell>
              <TableCell style={{ width: '50px' }}>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;