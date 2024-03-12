import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
const Navbar = (props) => {
  const navigate=useNavigate();
  const [scrollTriggered, setScrollTriggered] = useState(false);
  useEffect(() => {
   
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setScrollTriggered(true);
      } else {
        setScrollTriggered(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

function handleClick(){
navigate("/");
}
  const navbg = {
    backgroundColor: scrollTriggered ? '#333' : 'transparent',
    boxShadow: scrollTriggered ? '0 4px 6px rgba(0,0,0,.1)' : 'none'
  };

  return (
    <AppBar sx={navbg}>
      <Toolbar>
        <IconButton size='large' edge="start" color='inherit' aria-label='logo' onClick={handleClick} >
          <BusinessIcon />
        </IconButton>
        <Typography variant='h8' component='div' sx={{ flexGrow: 1 }}>
          Global Logic
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>Features</Button>
          <Button color='inherit'>contact</Button>
           <Dropdown/>
          <Button color='inherit' >Location</Button>
          <Button color='inherit'>About</Button>
        </Stack>
      </Toolbar>
    </AppBar> 
  );
};

export default Navbar;
