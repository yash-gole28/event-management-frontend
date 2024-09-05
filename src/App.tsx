import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/homepage/Homepage';
import PersistentDrawer from './Components/Drawer';
import Demo from './Pages/demopage/Demo';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NotFound from './Pages/pageNotFound/NotFound';
import Events from './Pages/events/Events';
import Profile from './Pages/profile/Profile';
import Register from './Pages/register/Register';


const theme = createTheme({
  palette: {
    primary: {
      main: '#606C38',
    },
    secondary: {
      main: '#DDA15E',
    },
    background: {
      default: '#ffff',
      paper: '#FEFAE0',
    },
    text: {
      primary: '#283618',
      secondary: '#BC6C25',
    },
    // drawer: {
    //   main: '#DDA15E', // Add custom color for the drawer
    // },
  },
});

function App() {
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<PersistentDrawer />}>
          <Route index element={<Homepage />} />
          <Route path='demo' element={<Demo/>} />
          <Route path='events' element={<Events/>} />
          <Route path='profile' element={<Profile/>} />
          
        </Route>
          <Route path='register' element={<Register/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
