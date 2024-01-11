import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import {Navbar} from 'react-bootstrap'

import Logoimg from '../src/assets/Logo.png';
import Home from './pages/Home';
import Project from './pages/Projects';
import About from './pages/About';
 


function App() {

  const navigate = useNavigate()
  const handleDownload = () => {
    const resumeFilePath = 'path/to/your/resume.pdf';
    saveAs(resumeFilePath, 'your_resume.pdf');
  };

  return (
    <div style={{height:'100vh', overflow:'hidden'}}>
      <Navbar bg='dark' variant='dark' className='navbar'>

        <Navbar.Brand href='/'> 
        <img 
          className="d-inline-block align-top"
          width="40"
          height="40"
          alt=""
          src={Logoimg}  />{'              '}
           <span  class="sp" style={{marginLeft:10}}> Mr. Rohit Wagh</span>
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
           <div style={{display:"flex", justifyContent:'space-evenly', width:'30vw', alignItems:'center'}}>
              <div className='li' onClick={()=>navigate('/about')}>about</div>
              <div className='li' onClick={()=>navigate('/project')}>projects</div>
              <div className='li'>contact</div>
           </div>
        </Navbar.Collapse>

      </Navbar>

      <Routes>

         <Route path='/' element={<Home/>}/>

         <Route path='/project' element={<Project/>}/>

         <Route path='/about' element={<About/>}/>

      </Routes>

    </div>
  )
}

export default App
