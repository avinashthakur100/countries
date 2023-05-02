
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
      <Link to={`/Next/${country?.name}`}>
      <CardMedia
        sx={{ height: 140 }}
        image={country.flag}
        title="green iguana"
      />
      </Link>
      <CardContent >
      
        <Typography  className={`${mode ? "dark": ""} cmd`} gutterBottom variant="h6" component="div">
           {country.name} 

           <p id='p1'> POPULATION<p id='p2'>{country.population}</p></p>
           <p id='p1'> REGION<p id='p2'>{country.region}</p></p>
           <p id='p1'> CAPITAL<p id='p2'>{country.capital}</p></p>
         
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