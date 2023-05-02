// import logo from './logo.svg';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Next from './pages/Home/next/Next';

function App() {
  const [mode,setMode]=useState(false);


  return (

    
    <div >
      
      <Header mode={mode} setMode={setMode}   />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home mode={mode} setMode={setMode} />} />
        <Route path='/Next'  >
          <Route path=':name' element={<Next mode={mode} setMode={setMode}/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
