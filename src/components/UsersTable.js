import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, TablePagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import { useState } from 'react';
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
    // console.log(data1)
    // console.log('Object', Object.keys(data1[0]))
    // const [page, setPage] = useState(0);
    // const [rowsPerPage, setRowsPerPage] = useState(5);
    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    //   };
    
    //   const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    //   };

    const data1 = [
        { id: 1, name: 'nana' },
        { id: 2, name: 'Sevak' },
      ];
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
      {/* <TablePagination
        rowsPerPageOptions={[1, 2, 5]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </TableContainer>
    </div>
  );
};

export default UsersTable;


// import { useState, useEffect } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
// import { Delete, Edit } from '@mui/icons-material';

// const MyTable = () => {
//   const [data, setData] = useState([{id: 2, name: 'nana'},{id: 2, name: 'Sevak'}]);

//   // Fetch data from the database (replace this with your own logic)
//   useEffect(() => {
//     // fetchDataFromDatabase().then((result) => {
//     //   setData(result);
//     // });
//   }, []);

//   // Function to delete a row (replace this with your own logic)
//   const handleDelete = (rowId) => {
//     // deleteRowFromDatabase(rowId).then(() => {
//     //   const updatedData = data.filter((row) => row.id !== rowId);
//     //   setData(updatedData);
//     // });
//   };

//   // Function to edit a row (replace this with your own logic)
//   const handleEdit = (rowId) => {
//     // Handle edit action
//   };
//   console.log(data[0])
//   console.log('sdfghj', Object.keys(data[0]))

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             {/* Render columns from the database */}
//             {/* {data.length > 0 && Object.keys(data[0]).map((column, index) => (
//               <TableCell key={index}>{column}</TableCell>
//             ))} */}
//             <TableCell>Edit</TableCell>
//             <TableCell>Delete</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {/* Render rows from the database */}
//           {data.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell>{row.name}</TableCell>
//               {Object.values(row.columns).map((value, index) => (
//                 <TableCell key={index}>{value}</TableCell>
//               ))}
//               <TableCell>
//                 <IconButton onClick={() => handleEdit(row.id)}>
//                   <Edit />
//                 </IconButton>
//               </TableCell>
//               <TableCell>
//                 <IconButton onClick={() => handleDelete(row.id)}>
//                   <Delete />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default MyTable;


// export default function UsersTable() {
//     return (
//         <div style ={{ marginTop: '100px', width: '100vw',}}>
//             New Page
//             New Page
//             New Page

//             New Page
//             New Page
//             New Page
//             New Page
//             New Page
//             New Page
//             New Page
//             New Page
//             New PageNew Page

//         </div>
//     )
// }