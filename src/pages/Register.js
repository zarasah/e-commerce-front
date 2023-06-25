import './Login.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registrationRequest, updateinSuccess } from '../store/registrationSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.registration.isLoading);
    const isSuccess = useSelector((state) => state.registration.inSuccess);
    const error = useSelector((state) => state.registration.error);
    
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
        mode: 'onChange'
    });

    function onSubmit(data) {
        dispatch(registrationRequest(data));
        reset();
    }

    useEffect(() => {
        if (error) {
          toast.error('Registration failed. Please try again.', {
            autoClose: 1000
          });
        } else if (isSuccess) {
          toast.success('Registration successful!', {
            autoClose: 1000,
            onClose: () => {
                dispatch(updateinSuccess());
                navigate('/login');
            }
          });

        }
      }, [error, isSuccess, navigate, dispatch]);
  
    return (
        <div className="login-page">
            <div className="form">
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        type="text"
                        placeholder="First Name*"
                        {
                            ...register('firstname', {
                                required: 'Fisrt name is required',
                                minLength: {
                                    value: 3,
                                    message: 'First name must be at least 3 chars'
                                },
                            })
                        }
                    />
                    <div className='error'>{errors?.firstname && <span>{errors?.firstname?.message || 'Errors'}</span>}</div>
                    <input 
                        type="text" 
                        placeholder="Last Name"
                        {
                            ...register('lastname')
                        }
                    />
                    <input 
                        type="text" 
                        placeholder="Email Address*"
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
                        type="password" 
                        placeholder="Password*"
                        {
                            ...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 chars' 
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]*$/,
                                    message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
                                }
                            })
                        }
                    />
                    <div className='error'>{errors?.password && <span>{errors?.password?.message || 'Errors'}</span>}</div>
                    <input className = 'button' type = 'submit' disabled = {!isValid}/>
                    <p className="message">Already registered? <Link to = "/login">Sign In</Link></p>
                </form>
                <div>
                    {isLoading && <p>Loading...</p>}
                    {isSuccess && <p>Registration successful!</p>}
                    {error && <p>Error: {error.message}</p>}
                </div>
            </div>
        </div>
    )
}