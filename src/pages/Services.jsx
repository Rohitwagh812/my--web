import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';



function Services() {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [addTime, setAddTime] = useState('');
  const [addDate, setAddDate] = useState('');

  useEffect(() => {
    function logCurrentDateTime() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();

      setDate(` Date : ${day}-${month}-${year} `);
      setTime(` Time : ${hours}:${minutes}:${seconds} `);
    }

    const intervalId = setInterval(logCurrentDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };
  const handleSingUp = () => {
    navigate('/signup');
  };




  console.log(auth.currentUser)

  return (
    <div className='services-page'>
      <div>
        {/* <Button variant="outline-info" onClick={handleSingUp}>SignUp</Button>
        <Button variant="outline-info" onClick={handleLogin}>SignIn</Button>
        {/* Uncomment this code if needed */}
        {/* <Button onClick={handleAddTime}>Time</Button>
        <div>{addTime}</div>
        <div>{addDate}</div> */}
        hello
      </div>
    </div>
  );
}

export default Services;
