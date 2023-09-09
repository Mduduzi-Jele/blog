import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React, { useContext } from "react";
import { MyContext } from "../App";

function SignUp() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {id, setId} = useContext(MyContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
      myPosts: []
    };

    let id = localStorage.length;
    let userId = id + 1
    
    setId(userId)
    
    localStorage.setItem(userId, JSON.stringify(newUser));

    setName('');
    setEmail('');
    setPassword('');
    navigate('/');
  }
 
  return (
    <div>
      <div className='header-text'>
        <h1>Sign-Up</h1>
      </div>

      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <input type='text' 
            className='text-area' 
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required>
          </input> <br />
          <br />
          <input type='email' 
            className='text-area' 
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}>
          </input> <br />
          <br />
          <input type='password' 
            className='text-area' 
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
          </input> <br />
          <br />
          <button className='btnSignUp'>Sign Up</button>
        </form> 
      </div>
    </div>
  )
}

export default SignUp
