import *  as React from 'react';
import "./App.css";
import { MenuItem, InputAdornment, TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

export default function App() {
  const [Jabatan, setJabatan] = React.useState();
  const Jabatans = [
  { value:  "Training" },
  { value: "Manager" },
  { value: "Admin" },
  { value: "Supervisor" }
  ];
  return (
    <div className='App'>
      <h1>Welcome yo Jayjay Lesson</h1>
    <FormControl variant="standard">
        <InputLabel htmlFor="nama-user">
          Nama User
        </InputLabel>
        <Input
          id="nama-user"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
      select label="pilih"
      value={Jabatan}
      onChange={e => setJabatan(e.target.value)}
      helperText="Pilih Jabatan"
      style={{ marginLeft: '10px' }}
      >
        {Jabatans.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" disableElevation style={{ marginLeft: '10px' }}>
      Buat User Baru
    </Button>
    </div>
  );
}
