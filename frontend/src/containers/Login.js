import React,{useState} from 'react';
import {Link,Navigate} from 'react-router-dom';
import {connect} from 'react-redux'
import { login } from '../actions/auth';
import axios from 'axios'; 
    const Login = ({ login,isAuthenticated}) => {
        const [formData, setFormData] = useState({
            email: '',
            password: '' 
        });
    
        const { email, password } = formData;
    
        const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
        const onSubmit = e => {
            e.preventDefault();
    
            login(email, password);
        };
        
    //is user is authenticated
    // redirect to home page
    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    return (
        <>
        <div className="login_page">
      <div className='login_item'>
      <h3 className='login-head'>Connect With Peers</h3>
      <img className="login_img" src="./img/clipart3.jpeg" />
      </div>
      <div className='login_item'>
        <form className='login_form' onSubmit={e=>onSubmit(e)}>
        <h3>Log In</h3>
          <input type="email"  placeholder='  Enter Your Email' name="email" value={email}
                    onChange={e => onChange(e)}
                    required/><br/>
          <input type='password' placeholder='  Enter Your Password' name='password' value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required />
         <button type='submit' className='login_button'>Log in</button>
         <hr/>
         <div  className='small_button'>
          <button type='button'>Google</button>
          <button type='button'>Instagram</button>
         </div>
        
        </form>
        <button type='button' className='login_button'><Link style={{textDecoration:'none',color: 'white'}} to='/signup'>New user? Sign Up</Link></button>
      </div>
    </div>
        <div className="container mt-5">
           
           
         
            <button className='mt-3'>
                   Don't have an account?<Link to='/signup'>Sign Up</Link>
            </button>
            <p className='mt-3'>
                Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
            </p>
        </div>
        </>
  );
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { login })(Login);
