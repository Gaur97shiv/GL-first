import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Dropdown() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 

  return (
    <div>
      <Button variant="contained" endIcon={<ArrowDropDownIcon />} onClick={handleClick} style={{ backgroundColor: 'transparent' }}>
        Option
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        
      
        <MenuItem >
          <Link to="/automation">Automation</Link>
        </MenuItem>
        <MenuItem >
          <Link to="/banking">Banking</Link>
        </MenuItem>
        <MenuItem >
          <Link to="/tech">Technology</Link>
        </MenuItem>
        <MenuItem >
          <Link to="/hospitality">Hospitality</Link>
        </MenuItem>
        <MenuItem >
          <Link to="/call2">call2</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Dropdown;
