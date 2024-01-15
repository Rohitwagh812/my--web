import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import {Navbar} from 'react-bootstrap'
import { saveAs } from 'file-saver';
import Logoimg from '../src/assets/Logo.png';
import Home from './pages/Home';
import Project from './pages/Projects';
import About from './pages/About';
// import ResumePdf from '../src/assets/Resume/ROHIT RESUME.pdf';
import BackImg from '../src/assets/backdround/backImage.jpg'
import Services from './pages/Services';



function App() {

  const navigate = useNavigate()
  // const handleDownload = () => {
  //   const resumeFilePath = ResumePdf;
  //   saveAs(resumeFilePath, 'Rohit_Wagh_resume.pdf');
  // };

  return (
    <div className='app' style={{height:'100vh', overflow:'hidden'}}>
      <Navbar bg='dark' variant='dark' className='navbar'>

        <Navbar.Brand style={{cursor:"pointer"}} > 
        <img 
          className="d-inline-block align-center "
          width="40"
          height="40"
          alt=""
          src={Logoimg}  />{'              '}
           <span  class="sp" onClick={()=>navigate('/')} style={{marginLeft:10 }}> Mr. Rohit Wagh</span>
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
           <div style={{display:"flex", justifyContent:'space-evenly', width:'30vw', alignItems:'center'}}>
              <div className='li' onClick={()=>navigate('/about')}>about</div>
              <div className='li' onClick={()=> navigate('/sof')} > Services </div>
              <div className='li' onClick={()=>navigate('/project')}>projects</div>
              <div className='li'>contact</div>
           </div>
        </Navbar.Collapse>

      </Navbar>

      <Routes>

         <Route path='/' element={<Home/>}/>

         <Route path='/project' element={<Project/>}/>

         <Route path='/about' element={<About/>}/>

         <Route path='/sof' element={<Services/>}/>

      </Routes>

    </div>
  )
}

export default App
