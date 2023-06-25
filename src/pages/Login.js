import './Login.css';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../store/loginSlice'; 
import { useNavigate, Link } from "react-router-dom";
// import { logout } from '../store/loginSlice';

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoading = useSelector((state) => state.login.isLoading);
    const error = useSelector((state) => state.login.error);
    const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange'
    });

    function onSubmit(data) {
        dispatch(loginRequest(data));
        reset();
    }
    
    useEffect(() => {
        if (isAuthenticated) {
            const role = localStorage.getItem('role');
            if (role === '1') {
                navigate('/admin');
            } else if (role === '0') {
                navigate('/user');
            }
        }
    }, [isAuthenticated, navigate]);
    
    return (
        <div className = "login-page">
            <div className = "form">
                <form className = "login-form" onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        type = "email" 
                        placeholder = "Email Address*"
                        {
                            ...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'Please enter a valid email address.'
                                },
                            })
                        }
                    />
                    <div className='error'>{errors?.email && <span>{errors?.email?.message || 'Errors'}</span>}</div>
                    <input 
                        type = "password" 
                        placeholder = "Password*"
                        {
                            ...register('password', {
                                required: 'Password is required',
                            })
                        }
                    />
                    <div className='error'>{errors?.password && <span>{errors?.password?.message || 'Errors'}</span>}</div>
                    <button disabled={isLoading}>Sign In</button>
                    <p className = "message" >Not registered? <Link to = "/register">Create an account</Link></p>
                    <p className = {error ? "error-active" : "error"}>{error}</p>
                </form>
            </div>
        </div>
    )
}