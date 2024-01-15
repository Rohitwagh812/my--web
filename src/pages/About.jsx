import React from 'react';

import { Button, Card, Col, Row } from 'react-bootstrap';

import MyImage from '../assets/myImage/rohit.jpg';

import ResumePdf from '../assets/Resume/ROHIT RESUME.pdf';

import { saveAs } from 'file-saver';



function About() {

  const handleDownload = () => {
    const resumeFilePath = ResumePdf;
    saveAs(resumeFilePath, 'Rohit_Wagh_resume.pdf');
  };

  return (
    <div style={{ height:"100vh", padding:30, width:'100vw'}}>
      <Row>
        <Col lg={5} style={{display:"flex", justifyContent:"center"}}>
           <Card className='card-col'>
           <div class="card__content">
           <Card.Body>
               <Card.Img src={MyImage} alt="" style={{ width: 280 }} />
             </Card.Body> 
          </div>
           </Card>
        </Col>
     
         

        <Col lg={6} style={{display:"flex", justifyContent:"center"}} >
            <div className='card-col-two align-items-start '>
                  <h2 style={{textAlign:"center"}}>About Me</h2>

                 <div>
                  <div style={{marginTop:20, textAlign:"justify"}}>
                  <h5>
                  Name : Rohit Wagh 
                  </h5>
                  <h5>
                    Age : 22
                  </h5>
                  <h5>
                    Date Of Birth : 08/01/2002
                  </h5>
                  <h5>
                    Gender : Male
                  </h5>
                  <h5>
                    Location : Jalgaon , Maharasthra
                  </h5>
                  <h5 >
                    Email : rohitwagh480@gmail.com
                  </h5>
                  <h5>
                    Phone : 8788357199
                  </h5>
                  <h5>
                    Skill : Java Software Developer
                  </h5>
                  <h5>
                    Education : B.A 
                  
                  </h5>
                  <h5>
                    Languages : English, Hindi, Marathi
                  </h5>
                  </div>
                   <div className="b">
                    <Button style={{marginTop:20}}  onClick={()=>handleDownload()} class="btn btn-light"> Downloads My CV </Button>
                   </div>
                 </div>  
              </div>
        </Col>
      </Row>
    </div>
  )
}

export default About