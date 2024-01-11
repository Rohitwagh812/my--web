import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';


import Instabuy from '../assets/Instabuy.png';
import GoogleHome from '../assets/GoogleHome.png';
import Laptopimg from '../assets/Laptop.png';
import Homepro from '../assets/Homepro.png';
import Yendeximg from '../assets/Yendex.png';
import Searchimg from '../assets/Search.png'
import Wordimg from '../assets/Word.png'





function Project() {

  
  return (
    <div style={{  backgroundColor:"#C8E6C9" , backgroundSize:"covar"}}>
       <div  style={{height:"90vh", overflowY:"scroll" ,scrollbarColor:'none', padding:20}}>
       <h2 style={{ height:50 , display:"flex" ,justifyContent:'center', alignItems:"center" ,color:"#0097A7"}}>My All projects</h2>
        <Row style={{padding:30}}>
          <Col>
              <Card className='card'>
                  <Card.Body>
                      <Card.Title className='title'>Insta Buy</Card.Title>
                      <Card.Img  style={{margin:"10px 0"}} variant="top" src={Instabuy} />
                      <Card.Text style={{color:'#616161', textAlign:'justify'}}>
                                🛒 Looking for a seamless shopping experience? Look no further! I'm excited to present my latest project, the Insta Buy Shopping Web Page built with React.js. 💻
                      </Card.Text>
                      <Card.Link href="https://insta-buy-project-new.vercel.app">This Project Link</Card.Link>
                  </Card.Body>
              </Card>

              <Card className='card two'>
                  <Card.Body>
                      <Card.Title className='title'>Laptop Pro 22</Card.Title>
                      <Card.Img  style={{margin:"10px 0"}} variant="top" src={Laptopimg} />
                      <Card.Text style={{color:'#616161', textAlign:'justify'}}>
                      🚀 Introducing Laptop Pro 22: Your Ultimate Tech Companion! 🚀

👨‍💻 As a passionate web developer, I'm excited to share my latest project with you all - Laptop Pro 22! 💼
                      </Card.Text>
                      <Card.Link href="https://laptop-pro-22.netlify.app/">This Project Link</Card.Link>
                  </Card.Body>
              </Card>
          </Col>
          <Col>
              <Card className='card'>
                  <Card.Body>
                  <Card.Title className='title'>Google Search</Card.Title>
                  <Card.Img style={{margin:"10px 0"}} variant="top" src={GoogleHome} />
                  <Card.Text style={{color:'#616161', textAlign:'justify'}}>
                      Front-end Developer | HTML & CSS Enthusiast
                      🚀 Excited to share my latest project: a reimagined Google homepage! 🌐
                            HTML5 for structure
                            CSS3 for styling
                      </Card.Text>
                      <Card.Link href="https://google-home-page1.netlify.app/">This Project Link</Card.Link>
                  </Card.Body>
              </Card>

              <Card className='card two'>
                  <Card.Body>
                      <Card.Title className='title'>Google Speaker</Card.Title>
                      <Card.Img style={{margin:"10px 0"}} variant="top" src={Homepro} />
                      <Card.Text style={{color:'#616161', textAlign:'justify'}}>
                      The Google Speaker Project not only showcases my HTML and CSS skills but also highlights the importance of user-centered design and interactive web applications in today's tech landscape.
                      </Card.Text>
                      <Card.Link href="https://google-speake-project.netlify.app/">This Project Link</Card.Link>
                  </Card.Body>
              </Card>
          </Col>
          <Col>
              <Card className='card'>
                  <Card.Body>
                      <Card.Title className='title'>Yendex Home Project</Card.Title>
                      <Card.Img style={{margin:"10px 0"}} variant="top" src={Yendeximg} />
                      <Card.Text style={{color:'#616161', textAlign:'justify'}}>
                      ✅ Responsive Design: Seamlessly adapts to different screen sizes, ensuring a smooth experience on all devices.Eye-catching design 
                      </Card.Text>
                      <Card.Link href="https://yendex-home-page.netlify.app/">This Project Link</Card.Link>
                  </Card.Body>
              </Card>

              <Card className='card two'>
                  <Card.Body>
                      <Card.Title className='title'>Search Engine Project</Card.Title>
                      <Card.Img style={{margin:"10px 0"}} variant="top" src={Searchimg } />
                      <Card.Text style={{color:'#616161', textAlign:'justify'}}>
                        User-friendly interface designed with HTML and CSS.
                        Powerful JavaScript algorithms for precision searching.
                        Seamless integration for a smooth user experience.
                      </Card.Text>
                      <Card.Link href="https://google-search-engine2.netlify.app/">This Project Link</Card.Link>
                  </Card.Body>
              </Card>
          </Col>
          <Col>
              <Card className='card'>
                  <Card.Body>
                      <Card.Title className='title'>Word Counter</Card.Title>
                      <Card.Img style={{margin:"10px 0"}} variant="top" src={Wordimg} />
                      <Card.Text style={{color:'#616161', textAlign:'justify'}}>
                            Are you ready to take your writing to the next level? Say hello to my latest project, the Word Counter Application! your  writing process
                      </Card.Text>
                      <Card.Link href="https://word-count2.netlify.app/">This Project Link</Card.Link>
                  </Card.Body>
              </Card>

              <Card className='card two'>
                  <Card.Body>
                      <Card.Title className='title'>Project</Card.Title>
                      <Card.Text style={{color:'#616161', textAlign:'justify'}}>
                       Only Mobile Phone Use And (Image Not Available)
                       Technologies: HTML, CSS, JavaScript
                      🌟 Whether you're a social media enthusiast or a web developer, you'll love exploring this project. It's a great way to learn HTML, CSS, and JavaScript while recreating a familiar user interface.
                      
                      </Card.Text>
                      <Card.Link href="https://polite-rolypoly-a6b88f.netlify.app/">This Project Link</Card.Link>
                  </Card.Body>
              </Card>
          </Col>
        </Row>
       </div>
    </div>
  )
}

export default Project