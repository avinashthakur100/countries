
import * as React from 'react';
import "./Countrycode.css";
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
const Countrycode = ({country , mode,setMode}) => {
  return (
    <div className="crd">
    <Card  className={`${mode ? "drk": " "} card`}>
      <Link to={`/Next/${encodeURIComponent(country?.name?.common || country?.name)}`}>
      <CardMedia
        sx={{ height: 140 }}
        image={country?.flags?.png || country?.flags?.svg || country?.flag}
        title={country?.name?.common || country?.name || 'country flag'}
      />
      </Link>
      <CardContent >
      
        <Typography  className={`${mode ? "dark": ""} cmd`} gutterBottom variant="h6" component="div">
           {country?.name?.common || country?.name} 

           <div id='p1'> POPULATION <span id='p2'>{country?.population?.toLocaleString?.() ?? country?.population}</span></div>
           <div id='p1'> REGION <span id='p2'>{country?.region}</span></div>
           <div id='p1'> CAPITAL <span id='p2'>{Array.isArray(country?.capital) ? country.capital[0] : country?.capital}</span></div>
         
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          {/* {person?.price} */}
          {/* <Link to={`/details/${person?.id}`}><button> open</button></Link> */}
        </Typography>
      </CardContent>
      
    </Card>

    </div>
    
  )
}

export default Countrycode;