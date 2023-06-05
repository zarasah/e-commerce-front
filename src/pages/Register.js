import './Login.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registrationRequest } from '../store/registrationSlice';

export default function Register() {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.registration.isLoading);
    const isSuccess = useSelector((state) => state.registration.isSuccess);
    const error = useSelector((state) => state.registration.error);

    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
        mode: 'onChange'
    });

    function onSubmit(data) {
        dispatch(registrationRequest(data));
        reset();
    }
        
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
                    {/* <button disabled = {!isValid}>{loading ? 'Submitting...' : 'Submit'}</button> */}
                    <p className="message">Already registered? <Link to = "/login">Sign In</Link></p>
                </form>
                <div>
                    {isLoading && <p>Loading...</p>}
                    {isSuccess && <p>Registration successful!</p>}
                    {error && <p>Error: {error}</p>}
                </div>
            </div>
        </div>
    )
}

// import './Login.css';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Register() {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const [showModal, setShowModal] = useState(false);
//     const [isError, setIsError] = useState(false);

//     function register(event) {
//         event.preventDefault();

//         if (!(name && email && password)) {
//             setMessage('All fields are required');
//             setIsError(true);
//             return;
//         }

//         const data = {
//             name,
//             email,
//             password
//         }

//         fetch('http://localhost:4000/register', {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             }
//         })
//         .then(res => {
//             if (res.status === 409) {
//                 setMessage('Email already exists');
//                 setIsError(true);
//                 return
//             } else {
//                 setMessage('Congratulations! Your registration was successful.');
//                 setShowModal(true);
//             }
//         })
//         .catch(error => {console.log(error)})
//     }
    
//     return (
//         <div className="login-page">
//             <div className="form">
//                 {
//                     !showModal ? (
//                         <form className="register-form" onSubmit = {register}>
//                             <input type="text" placeholder="First Name" onChange={(event) => setFirstName(event.target.value)}/>
//                             <input type="text" placeholder="Last Name" onChange={(event) => setLastName(event.target.value)}/>
//                             <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)}/>
//                             <input type="text" placeholder="Email Address" onChange={(event) => setEmail(event.target.value)}/>
//                             <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
//                             <button>create</button>
//                             <p className="message">Already registered? <Link to = "/login">Sign In</Link></p>
//                             <p className = {isError ? "error-active" : "error"}>{message}</p>
//                         </form>
//                     ) : (
//                         <div>
//                             <p className='registered'>{message}</p>
//                             <Link to = "/login">Go to login page</Link>
//                         </div>
//                     )
//                 }
//             </div>
//         </div>
//     )
// }