import axios from "axios";
import { React, useState, useEffect } from "react";
import Countrycode from "../../components/countrycode/Countrycode";

import "./Home.css";
import { FormControl,InputLabel, MenuItem, Pagination, Select} from "@mui/material";

let allcountries;

const Home = ({ mode, setmode }) => {
  console.log(mode);

  const [cntry, setcntry] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const [pagesize, setPagesize] = useState(4);
  const [region, setRegion] = useState("all");

  console.log(cntry);

  useEffect(() => {
    async function getdata() {
      let { data } = await axios("https://restcountries.com/v2/all");
      setcntry(data);
      allcountries = data;
    }
    getdata();
  }, []);

  const paginate = (cntry, currentpage, pagesize) => {
    let startindex = currentpage * pagesize;
    let endindex = startindex + pagesize;
    return cntry.slice(startindex, endindex);
  };

  const searching = (arr, keyword, searchby) => {
    return arr.filter((item) =>
      item[searchby].toLowerCase().startsWith(keyword.toLowerCase())
    );
  };

  const filterbyregion = (arr, filterby) => {
    return arr?.filter((item) =>
      filterby.length ? item["region"] === filterby : item
    );
  };

  const handlepage = (e, value) => {
    setCurrentpage(value);
  };

  const handlesearch = (e) => {
    let keyword = e.target.value;
    let searchby = "name";
    let result = cntry && searching(allcountries, keyword, searchby);
    setcntry(result);
  };

  const handlesort = (e) => {
    setCurrentpage(1);
    setRegion(e.target.value);
    let keyword = e.target.value;
    let result = cntry && filterbyregion(allcountries, keyword);
    setcntry(result);
  };

  const paginateresult = paginate(cntry, currentpage - 1, pagesize);

  // console.log(paginateresult);

  // console.log(cntry);

  return (
    <div className={`${mode ? "ff" : ""} hm`}>
      <div className="top">
        <input
          type="text"
          Zx
          className={`${mode ? "dpk" : ""} txt`}
          placeholder="Search Here"
          onChange={handlesearch}
        />

        <FormControl className="src">
          <InputLabel
            className={`${mode ? "eep" : ""} demo-simple-select-label`}
          >
            Region
          </InputLabel>
          <Select
            labelId=" demo-simple-select-label"
            className={`${mode ? "mmp" : ""} demo-simple-select`}
            value={region}
            label="Region"
            onChange={handlesort}
          >
            <MenuItem value={"all"}>all</MenuItem>
            <MenuItem value={"Asia"}>Asia</MenuItem>
            <MenuItem value={"Africa"}>Africa</MenuItem>
            <MenuItem value={"Americas"}>Americas</MenuItem>
            <MenuItem value={"Europe"}>Europe</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={`${mode ? "dark" : ""} cd`}>
        {paginateresult &&
          paginateresult?.map((detail) => (
            <Countrycode mode={mode} country={detail} key={detail?.area} />
          ))}
      </div>

      <Pagination
        className="pg"
        count={cntry && Math.ceil(cntry.length / pagesize)}
        color="primary"
        page={currentpage}
        onChange={handlepage}
      />
    </div>
  );
};

export default Home;
