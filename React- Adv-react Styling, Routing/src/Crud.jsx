import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Crud = () => {
  const [id, setId] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);

  const saveData = (e) => {
    e.preventDefault();
    if (id !== "") {
      let updatedData = data.map((item, index) => {
        if (index == id) {
          return { topic, description };
        }
        return item;
      });
      setData(updatedData);
    } else {
      setData([...data, { topic, description }]);
    }
    setTopic("");
    setDescription("");
    setId("");
  };

  const del = (id) => {
    let filteredData = data.filter((_, index) => index !== id);
    setData(filteredData);
  };

  const edit = (id) => {
    let editData = data[id];
    setTopic(editData.topic);
    setDescription(editData.description);
    setId(id);
  };

  return (
    <Container maxWidth="sm">
      <div>
        <h3>Crud App</h3>
        <form onSubmit={saveData}>
          <TextField
            fullWidth
            label="Topic"
            margin="dense"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            InputProps={{
              style: { color: '#ffffff', backgroundColor: '#424242', borderColor: '#bdbdbd' }
            }}
            InputLabelProps={{
              style: { color: '#e0e0e0' }
            }}
          />
          <TextField
            fullWidth
            label="Description"
            margin="dense"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            InputProps={{
              style: { color: '#ffffff', backgroundColor: '#424242', borderColor: '#bdbdbd' }
            }}
            InputLabelProps={{
              style: { color: '#e0e0e0' }
            }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: 10 }}
          >
            {id !== "" ? "Update" : "Add"}
          </Button>
        </form>
      </div>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Topic</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.topic}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                <Button onClick={() => edit(index)}>
                    <EditIcon />
                  </Button>
                  <Button onClick={() => del(index)}>
                    <DeleteIcon sx={{ color: 'red' }}/>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Crud;
