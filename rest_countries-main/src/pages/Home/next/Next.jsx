import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Back from '../../../components/back/Back';
import "./Next.css";

const Next = ({mode , setMode} ) => {

    const [single,setSingle]=useState([]);
    const{name}=useParams();
    // console.log(name);

    useEffect(()=>{
        async function fetchSingle(){
            let {data}=await axios(`https://restcountries.com/v2/name/${name}`);
            setSingle(data);
        }
        fetchSingle();
    },[])
    console.log(single);
  return (
    <div className={`${mode ? "dark": ""} main`}>
        <Back />
        <div className='main2' >
       <div className='left'>
        <img src={single[0]?.flags.svg} alt="" />
       </div>
       <div className='right'>
           <div className='right1'>
                   <h1>{single[0]?.name}</h1>
           </div>
           <div className="right2">
               <div id='r1'>
                   <h3>Native Name :</h3><p>{single[0]?.nativeName}</p>
                   <h3>Population :</h3><p>{single[0]?.population}</p>
                   <h3>Region :</h3><p>{single[0]?.region}</p>
                   <h3>Sub Region :</h3><p>{single[0]?.subregion}</p>
                   <h3>Capital :</h3><p>{single[0]?.capital}</p>
               </div>
               <div id='r2'>
                   <h3>Top Level Domain :</h3><p>{single[0]?.topLevelDomain}</p>
                   <h3>Currencies :</h3><p>{single[0]?.currencies[0].name}</p>
                   <h3>Languages :</h3><p>{single[0]?.languages[0].name}</p>
               </div>
           </div>
           <div id='right3'>
                 <h3>Border Countries:</h3>
                 <p>{single.length && Object.keys(single[0]).includes("borders") && single[0]?.borders.map ((border)=> {
                    return <span id='sp'>{border}</span>
                 })}</p>

           </div>
{/* Object.keys(single[0]).includes */}
       </div>
    </div>
    </div>
  )
}

export default Next;