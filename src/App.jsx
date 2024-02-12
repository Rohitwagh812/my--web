import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
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
import UserData from './pages/UserData';
import Contact from './pages/Contact';
// import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';



function App() {

  const [docTitle, setDocTitle] = useState(document.title);

  useEffect(() => {
    const handleBlur = () => {
      document.title = 'Come Back 😯';
    };

    const handleFocus = () => {
      document.title = docTitle;
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, [docTitle]);

  const navigate = useNavigate()
  // const handleDownload = () => {
  //   const resumeFilePath = ResumePdf;
  //   saveAs(resumeFilePath, 'Rohit_Wagh_resume.pdf');
  // };
  const [isAboutVisible, setIsAboutVisible] = useState(true)
  const [display , setDisplay] = useState(false)

  const handleScroll = () => {
   console.log('hello')
  }

  useEffect(()=>{
     
  },[])

  
   const handleWebServices = function(){
    onAuthStateChanged(auth , (user)=>{
      if(user){
        navigate('/web/service')
        console.log('user is logged in ')
      }else{
        navigate('/login')
        console.log('user is logged out')
      }
    })

   }

  return (
    <div className='app' style={{height:'100vh', overflow:'hidden'}}>
      <Navbar bg='dark' variant='dark' className='navbar' >

        <Navbar.Brand style={{cursor:"pointer"}} > 
        <img 
          className="d-inline-block align-center "
          width="40"
          height="40"
          alt=""
          src={Logoimg} 
           onClick={()=>navigate('/user')} />{'              '}
           <span  class="sp" onClick={()=>navigate('/')} style={{marginLeft:10 }}> Mr. Rohit Wagh</span>
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
           <div style={{display:"flex", justifyContent:'space-evenly', width:'30vw', alignItems:'center'}}>
              <div className='li about' onClick={()=>navigate('/about')} >about</div>
              <div className='li' onClick={()=> handleWebServices()} > Services </div>
              <div className='li' onClick={()=>navigate('/project')}>Projects</div>
               
           </div>
        </Navbar.Collapse>
      </Navbar>
{/* <div className='footer-div-main'>
              <div className='li' onClick={()=> navigate('/sof')} > Services </div>
              <div className='li' onClick={()=>navigate('/project')}>Projects</div>
      </div> */}

      
      <Routes>

         <Route path='/' element={<Home/>}/>

         <Route path='/project' element={<Project/>}/>

         <Route path='/about' element={<About/>}/>

         <Route path='/web/service' element={<Services/>}/>

         <Route path='/user' element={<UserData/>}/>

         <Route path='/contact' element={<Contact/>}/>

         <Route path='/register' element={<SignUp/>}/>

         <Route path='/login' element={<SignIn/>}/>
         
      </Routes>

      {/* <div className='footer-div-main'>
              <div className='li' onClick={()=>navigate('/about')} >about</div>
              <div className='li' onClick={()=> navigate('/sof')} > Services </div>
              <div className='li' onClick={()=>navigate('/project')}>Projects</div>
         
      </div> */}
    </div>
  )
}

export default App
