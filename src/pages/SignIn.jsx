import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e) {
        // e.preventDefault(); // Prevent default form submission behavior
        signInWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                console.log(userCred.user);
                navigate('/web/service');
            })
            .catch((err) => {
                console.log(err);
                navigate('/register');
            });
    }

    return (
        <div>
            <span className="badge bg-primary" onClick={() => navigate('/register')}>
                Register
            </span>
            <main>
                <div className='from-page'>
                    <h2>Login</h2>

                    <Form.Group className="mb-4 mt-3 mail-div" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='input-same' type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-4 mt-3  mail-div" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='input-same' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button className='login-btn m-3' variant="primary"onClick={()=>handleLogin()}>
                        Login
                    </Button>
                </div>
            </main>
        </div>
    );
}

export default SignIn;
