import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';






function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setName] = useState('');
  const navigate = useNavigate();

  const [uniqueId, setUniqueId] = useState(null);
    
      // Function to generate and set a new unique ID
      const generateUniqueId = () => {
        const newUniqueId = uuidv4();
        setUniqueId(newUniqueId);
      };
    
      // Check if unique ID is already generated
      if (!uniqueId) {
        generateUniqueId(); // Generate unique ID if not already generated
      }

  const handleSubmit = async (e) => {  // Prevent default form submission behavior

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, { displayName: displayName , uid:uniqueId});

      console.log(userCredential);
      navigate('/web/service');
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  return (
    <div><span className="badge bg-primary" onClick={()=>navigate('/login')}>Login</span>

      <main>
        <div className='from-page' >
          <h2>SignUp</h2>
          <Form.Group className="mb-4 mt-3  mail-div" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control className='input-same'  type="name" placeholder="name"  value={displayName} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          
          <Form.Group className="mb-4 mt-3 mail-div" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className='input-same' type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-4 mt-3  mail-div" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className='input-same' type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          
          <Button className='login-btn m-3' variant="primary" type="submit" onClick={()=>handleSubmit()}>
             Register
          </Button>
          {/* <div className="mb-4 mt-3 d-inline-flex justify-content-between">
            <h6>Forgot Password</h6>
            <h6>Signup</h6>
          </div> */}
        </div>
      </main>
    </div>
  );
}

export default SignUp;
