import React from 'react'
import { Col, Row } from 'react-bootstrap'

import MyImage from '../assets/myImage/rohit.png'
import Gif from '../assets/git/Welcome.gif'

function Home() {
  return (
    <div style={{overflow:"hidden"}}>
       <div style={{display:"flex", justifyContent:'center', alignItems:"center", height:"80vh", width:"100vw"}}>
            <div className='col-col' style={{ paddingLeft:10, marginLeft:30, width:'40.8vw', textAlign:"center"}}>
               <div  style={{ marginTop:100}}>
                  <span style={{fontSize:'500%', color:"#ff8c00"}}>H<span style={{fontSize:'80%'}}>i
                  </span>,</span>
                  <span style={{fontSize:'500%', color:"#ff8c00"}}>W<span style={{fontSize:'80%'}}>elcome</span></span>
                    {/* <img className='gif' style={{marginTop:-80}} height={300} src={Gif} alt="" /> */}
               </div>
                <div className='one'>
                <h3 className='my-font-name'  style={{ fontWeight:'500',color:"#D81B60", marginTop:50}}>I`M ROHIT WAGH</h3>
                <h5 style={{ marginTop:20 , color:'#FF80AB' ,marginTop:40}}>Front-End Developer | Java Software Designer And Developer | React Js Developer | Full Stack Development  </h5>
                <p style={{
                  width:'170%' ,textAlign:'justify', fontSize:19,color:'#FF8A80', marginTop:25, marginLeft:-150
                }}>I am a passionate and creative front-end developer with a strong desire to bring digital ideas to life through code. With a focus on user experience and a keen eye for design, I strive to create beautiful and functional web applications that captivate and engage users.
                </p>
                </div>
       </div>
         </div>
    </div>
  )
}

export default Home