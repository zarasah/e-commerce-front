import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Button, Modal, TextField, Container, TablePagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesRequest, createCategoryRequest, deleteCategoryRequest, updateCategoryRequest} from '../store/categorySlice';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const CategoriesTable = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rowData, setRowData] = useState('');
    const data = useSelector((state) => state.category.categories);
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
      mode: 'onChange'
  });

    const containerStyle = {
      backgroundColor: 'rgb(248, 248, 248)',
      borderRadius: '5%',
      width: '50%',
      padding: '2rem',
    };

  const onSubmit = (data) => {
    dispatch(createCategoryRequest(data));
    handleCloseModal();
  };

  function onUpdate(data) {
    const id = rowData.id;
    const newData = {
      id,
      data,
    }
    dispatch(updateCategoryRequest(newData));
    handleCloseModal();
  }

    useEffect(() => {
        dispatch(fetchCategoriesRequest());
    }, [dispatch])

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      reset();
      setIsModalOpen(false);
      setRowData('');
    };

    function handleDelete(id) {
      dispatch(deleteCategoryRequest(id));
    }

    function handleEdit(id) {
      const dataForEdit = data.filter((item) => item.id === id);
      const oldName = dataForEdit[0];
      setRowData(oldName);
      handleOpenModal();
    }

  return (
    <div style = {{paddingTop: '100px', width: '80%'}}>
      <Button variant="contained" onClick={handleOpenModal} style={{ marginBottom: '20px', textTransform: 'capitalize', backgroundColor: 'rgb(245, 172, 107)', color: "black", fontWeight: '600' }}>
        Add New Category
      </Button>
      {data.length !== 0 && <TableContainer component={Paper}>
      <Table>
        <TableHead>
            <TableRow>
                <TableCell sx={{ textAlign: 'center', backgroundColor: 'rgb(245, 172, 107)' }} colSpan={Object.keys(data[0]).length + 2}>
                <Typography variant="h6" style={{fontWeight: '600'}}>Categories Table</Typography>
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
          {data.map((category) => (
            <TableRow key={category.id}>
              {Object.values(category).map((value) => (
                <TableCell key={uuidv4()}>{value}</TableCell>
              ))}
              <TableCell style={{ width: '50px' }}>
                <IconButton aria-label="edit" onClick={() => {handleEdit(category.id)}}>
                  <EditIcon sx={{ color: 'rgb(245, 172, 107)' }}/>
                </IconButton>
              </TableCell>
              <TableCell style={{ width: '50px' }}>
                <IconButton aria-label="delete" onClick={() => {handleDelete(category.id)}}>
                  <DeleteIcon sx={{ color: 'rgb(245, 172, 107)' }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}

    <Modal open={isModalOpen} onClose={handleCloseModal}>
    <Container maxWidth="md" 
    style={{
      position: 'fixed',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      outline: 'none',
    }}
    >
        <div style={containerStyle}>
        <Typography variant="h3" component="h1" gutterBottom>Add New Category</Typography>
        <form onSubmit={rowData ? handleSubmit(onUpdate) : handleSubmit(onSubmit)}>
            <TextField
            name = "name"
            label="Name"
            variant="outlined"
            margin="normal"
            defaultValue={rowData ? rowData.name : ''}
            fullWidth
            required
            {...register('name', { required: true })}
            error={Boolean(errors.name)}
            helperText={errors.name ? 'Name is required' : ''}
            />
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <Button type="submit" variant="contained" color="secondary" sx={{color: 'white', '&:hover': {background: 'rgb(241, 158, 86)'}}}>
                  Submit
              </Button>
              <Button variant="contained" color="secondary" sx={{color: 'white', '&:hover': {background: 'rgb(241, 158, 86)'}}} onClick={handleCloseModal}>
                  Close
              </Button>
            </div>
        </form>
        </div>
    </Container>
      </Modal> 
    </div>
  );
};

export default CategoriesTable;