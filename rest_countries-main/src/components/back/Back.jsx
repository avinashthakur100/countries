import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import "../back/Back.css"

const Back = () => {


  return (
    <div>
        <Link to= {`/`}><Button id='btn'>Back</Button></Link>
    </div>
  )
}



 

export default Back;