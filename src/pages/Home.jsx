import React from 'react'
import { Col, Row } from 'react-bootstrap'


import Gif from '../assets/git/Welcome.gif'

function Home() {
  return (
    <div >
       <div>
       <Row >
            <Col  style={{  paddingLeft:30}}>
               <div  style={{ marginTop:60}}>
                <span style={{fontSize:'800%'}}>H<span style={{fontSize:'80%'}}>i
                </span>,</span>
                <img style={{marginTop:-80}} height={300} src={Gif} alt="" />
               </div>
                <div className='one'>
                <h3  style={{ fontWeight:'500'}}>I`M ROHIT WAGH</h3>
                <h5 style={{ marginTop:20 , color:'#616161'}}>Front-End Developer | Web Developer | React Js Developer | Full Stack Development | Software Designer </h5>
                <p style={{
                  width:'73%' ,textAlign:'justify', fontSize:19,color:'#616161', marginTop:25
                }}>I am a passionate and creative front-end developer with a strong desire to bring digital ideas to life through code. With a focus on user experience and a keen eye for design, I strive to create beautiful and functional web applications that captivate and engage users.
                </p>
                </div>
            </Col >
          
        </Row>
       </div>
         
    </div>
  )
}

export default Home