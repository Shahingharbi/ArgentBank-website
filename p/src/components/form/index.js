import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, signupUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoginForm, setIsLoginForm] = useState(true); // Ajout de l'état pour déterminer le formulaire actif

  const handleLogin = async (e) => {
    e.preventDefault();
    const userInformation = { email, password };
  
    try {
      const result = await dispatch(loginUser(userInformation));
      if (result.payload) {
        setEmail('');
        setPassword('');
        navigate('/user');
      } 
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleSignup = async (e) => {
    e.preventDefault();
    const userData = { email, password, firstName, lastName };
    
    try {
      await dispatch(signupUser(userData));
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
      navigate('/user');
    } catch (error) {
      console.error(error);
     
    }
  };
  

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>{isLoginForm ? 'Sign In' : 'Sign Up'}</h1> 

      {isLoginForm ? ( 
        <form onSubmit={handleLogin}>
          
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      ) : ( 
        <form onSubmit={handleSignup}>
          
          <div className="input-wrapper">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              minLength="2"
              maxLength="10"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              minLength="2"
              maxLength="10"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="sign-in-button">
            Sign Up
          </button>
        </form>
      )}

      <button className='sign-up-button' onClick={() => setIsLoginForm(!isLoginForm)}> 
        {isLoginForm ? 'Sign Up' : 'Sign In'}
      </button>
    </section>
  );
}

export default Form;



/* import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser} from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';



function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    console.log('submit')
    e.preventDefault();
    let userInformation = {
      email ,
      password
    };
    

    dispatch(loginUser(userInformation)).then ((result) => {
      if(result.payload) {
        setEmail('');
        setPassword('');
        navigate('/');  
      }
    })


  }

  

 
  return (
    <section className='sign-in-content'>
      <i className='fa fa-user-circle sign-in-icon'></i>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <div className='input-wrapper'>
          <label htmlFor='email'>Email </label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password </label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='input-remember'>
          <input type='checkbox' id='remember-me' />
          <label htmlFor='remember-me'> Remember me </label>
        </div>
        <button type='submit' className='sign-in-button'>
          Sign In
        </button>
        
      </form>
      
    </section>
  );
}

export default Form; */
