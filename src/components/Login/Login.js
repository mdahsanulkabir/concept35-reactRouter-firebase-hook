import React, { useState } from 'react';
import auth from '../../Firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = useState(false);
    const [userInfo, setUserInfo] = useState({
        email:'',
        password:'',
        confirmPassword:''});
    const [confirmError, setConfirmError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [
        createUserWithEmailAndPassword,
        createUser, 
        createLoading,
        createError] = useCreateUserWithEmailAndPassword(auth);
    const [
        signInWithEmailAndPassword,
        user] = useSignInWithEmailAndPassword(auth);

    const handleFormInput = event => {
        setConfirmError('');
        userInfo[event.target.name] = event.target.value;
    }
    if(user){
        navigate(from, {replace: true});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if(login){
            signInWithEmailAndPassword(userInfo.email, userInfo.password)
        }
        else{
            if(userInfo.password !== userInfo.confirmPassword){
                setConfirmError('Password do not match');
                return;
            }
            else{
                createUserWithEmailAndPassword(userInfo.email, userInfo.password);
            }
        }
    }
    return (
        <div className='container'>
            <form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <h2>
                {
                    login ? "Login" : "Register"
                }
                </h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={(event)=>handleFormInput(event)} type="text" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={(event)=>handleFormInput(event)} type="password" name="password" className="form-control" id="exampleInputPassword1"/>
                </div>

                {
                    !login && 
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input onBlur={(event)=>handleFormInput(event)} type="password" name="confirmPassword" className="form-control" id="exampleInputPassword2"/>
                    </div>
                }

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" 
                        onChange={()=>setLogin(!login)}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Already have an account</label>
                </div>
                <p className='text-danger'>{confirmError}</p>
                <button type="submit" className="btn btn-primary">
                    {
                        login ? "Login" : "Register"
                    }
                </button>
            </form>
        </div>
    );
};

export default Login;