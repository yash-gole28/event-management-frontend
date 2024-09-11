import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/homepage/Homepage';
import PersistentDrawer from './Components/Drawer';
import Demo from './Pages/demopage/Demo';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NotFound from './Pages/pageNotFound/NotFound';
import Profile from './Pages/profile/Profile';
import Register from './Pages/register/Register';
import { Box } from '@mui/material';
import AddEvent from './Pages/addEvent/AddEvent';


const theme = createTheme({
  palette: {
    primary: {
      main: '#ffff',
    },
    secondary: {
      main: '#ffff',
    },
    background: {
      default: '#ffff',
      paper: '#ffff',
    },
    text: {
      primary: '#283618',
      secondary: '#283618',
    },
    // drawer: {
    //   main: '#DDA15E', // Add custom color for the drawer
    // },
  },
});

function App() {
  return (
    <Box sx={{width:'100%'}}>
       <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<PersistentDrawer />}>
          <Route index element={<Homepage />} />
          <Route path='demo' element={<Demo/>} />
          <Route path='add-event' element={<AddEvent/>} />
          <Route path='profile' element={<Profile/>} />
          
        </Route>
          <Route path='register' element={<Register/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </ThemeProvider>
    </Box>
  );
}

export default App;
