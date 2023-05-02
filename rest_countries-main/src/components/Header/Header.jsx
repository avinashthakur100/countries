import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Button } from '@mui/material';
import React from 'react';
import "./Header.css";


const Header = ({mode,setMode}) => {

    const changemode=()=>{
      setMode(!mode)
    } 
    console.log(mode);
  return (
    < div className={`${mode ? "dark" :""} header`} >
      <div><h1>Where in The World ?</h1></div>
      <div id='d1'>
        <Button  onClick={changemode} className={`${mode ? "dd" : " "} bb`} >
          <DarkModeIcon  style={{marginRight:"8px"}} /> Dark Mode 
        </Button>
        
      </div>  
    </div>
  )
}

export default Header;