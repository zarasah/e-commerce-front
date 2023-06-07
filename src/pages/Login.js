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

    // useEffect(() => {
    //     return () => {
    //         if (!isAuthenticated) {
    //             dispatch(logout());
    //         }
    //     };
    // }, [isAuthenticated, dispatch]);
    
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

// export default function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const [isError, setIsError] = useState(false);
//     const navigate = useNavigate();

//     function handleSubmit(event) {
//         event.preventDefault();
        
//         if (!email || !password) {
//             setMessage('All fields are required');
//             setIsError(true);
//             return;
//         }

//         const data = {
//             email,
//             password
//         }

//         fetch('http://localhost:4000/login', {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             }
//         })
//         .then(res => {
//             if (res.status === 401) {
//                 setMessage('Incorrect email or password');
//                 setIsError(true);
//             }
//             return res.json();
//         })
//         .then(res => {
//             const user = JSON.stringify(res);
//             localStorage.setItem('user', user);
            
//             if (res.role === 1) {
//                 navigate('/admin');
//             } else if (res.role === 0){
//                 navigate('/user');
//             } else {
//                 navigate('/login');
//             }
//         })
//         .catch(error => {console.log(error)})
//     }

//     return (
//         <div className = "login-page">
//             <div className = "form">
//                 <form className = "login-form" onSubmit={handleSubmit}>
//                     <input type = "email" placeholder = "Email Address*" onChange={(event) => setEmail(event.target.value)}  required />
//                     <input type = "password" placeholder = "Password*" onChange={(event) => setPassword(event.target.value)}  required />
//                     <button>Sign In</button>
//                     <p className = "message" >Not registered? <Link to = "/register">Create an account</Link></p>
//                     <p className = {isError ? "error-active" : "error"}>{message}</p>
//                 </form>
//             </div>
//         </div>
//     )
// }



// const role = localStorage.getItem('role')
//     console.log('role', role)
//     useEffect(() => {
//         if(true) {
//             console.log('useEffect')
            
//             // navigate('/')
//         }
//     }, [isAuthenticated, navigate])