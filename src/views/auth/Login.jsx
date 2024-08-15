import React, { useState } from 'react';
import { FiInfo } from 'react-icons/fi'; // Import info icon from react-icons
import { Link, useNavigate } from 'react-router-dom';
import useAuthActions from '../../controllers/userControler';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isAuthenticated , user} = useSelector(state => state.user)

  const {loginUser } = useAuthActions()

  const navigate = useNavigate()

  const handleSubmit =async (e) => {
    e.preventDefault();

    const res =await loginUser({email , password})
    
    // console.log(res);

    if(res.success){
      navigate('/dashboard')
      toast.success(res.message) 
    } else{
      toast.error(res.message)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row max-w-lg md:max-w-4xl">
        {/* Left side: Image and details */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-t-lg md:rounded-t-none md:rounded-l-lg">
          {/* <img src="your-image-url.jpg" alt="Login" className="w-full h-auto rounded-lg mb-4" /> */}
          <h2 className="text-white text-2xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-white text-center">
            Log in to access your account and continue where you left off.
          </p>
        </div>

        {/* Right side: Login form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center rounded-t-3xl mt-[-20px] md:mt-0 rounded-b-lg md:rounded-b-none md:rounded-r-lg md:rounded-tl-none md:rounded-tr-none bg-white">

          <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className='custom-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
         
              <input
                type="password"
                placeholder="Password"
                className='custom-input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
             
            <button
              type="submit"
              className="custom-button"
            >
              Login
            </button>
          </form>
          <p className='mt-3 text-gray-600 '>if you are not register then 
            <Link to={'/register'} className='text-indigo-700' > Register Now </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
