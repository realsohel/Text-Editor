
import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
import { useState } from 'react';
import About from './components/About';

import { BrowserRouter , Routes,Route, } from "react-router-dom";


function App() {
  const [mode , setmode] = useState('light');
  const [textmode , settextmode] = useState('dark');
  

  const togglemode = ()=>{
    if(mode==='light'){
      setmode('dark');
      settextmode('light');
      document.body.style.backgroundColor='#171717';
    }
    else{
        setmode('light');
        settextmode('dark');
        document.body.style.backgroundColor='white';
      }
  }

  return (
    <>
    {/* <Navbar />; */}
    {/* <Navbar title="Text Editor" home="Home" mode={mode} togglemode={togglemode} text={textmode}/> */}
    {/* <Alert /> */}
    {/* <div className="container my-3">
      <Textform head="Enter your text here:"  mode={mode} text={textmode}/>
      <About/>
    </div> */}
    <BrowserRouter>
    
  <Navbar title="Text Editor" home="Home" mode={mode} togglemode={togglemode} text={textmode}/>
    <Routes>
      <Route exact path="/" element={<Textform head="Enter your text here:"  mode={mode} text={textmode}/>}/>
      <Route exact path="/about" element={<About  mode={mode} text={textmode}/>}/>
    </Routes>
  </BrowserRouter>,
    </>

  );
}

export default App;
