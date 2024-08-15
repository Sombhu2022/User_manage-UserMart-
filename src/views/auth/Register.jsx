import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthActions from "../../controllers/userControler";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [agreed, setAgreed] = useState(false);

  const navigate = useNavigate()

  const { registerUser } = useAuthActions()

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Error getting location: ", error);
      }
    );
  }, []);

  const handleSubmit =async (e) => {
    e.preventDefault();
    // register user
   const res = await registerUser({
        name,
        email,
        password,
        address,
        latitude,
        longitude,
      })

    if(res.success) navigate('/dashboard')
      
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row max-w-lg md:max-w-4xl">
        {/* Left side: Image and details */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-t-lg md:rounded-t-none md:rounded-l-lg">
          {/* <img src="your-image-url.jpg" alt="Register" className="w-full h-auto rounded-lg mb-4" /> */}
          <h2 className="text-white text-2xl font-bold mb-2">
            Welcome to Our UserMart!
          </h2>
          <p className="text-white text-center">
            Register to access exclusive features like Product list , Product Details and stay updated.
          </p>
        </div>

        {/* Right side: Register form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center rounded-t-3xl mt-[-20px] md:mt-0 rounded-b-lg md:rounded-b-none md:rounded-r-lg md:rounded-tl-none md:rounded-tr-none bg-white">
          <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className='custom-input'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
            <textarea
              placeholder="Address Line : 123, MG Road, Bangalore, Karnataka, 560001, India"
              className='custom-input'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>

            <input
              type="text"
              placeholder="Latitude"
              className='custom-input'
              value={latitude}
              readOnly
              required
            />
            <input
              type="text"
              placeholder="Longitude"
              className='custom-input'
              value={longitude}
              readOnly
              required
            />

             {/* Rules and Regulations Checkbox */}
             <div className="checkbox-group">
              <input
                type="checkbox"
                id="rules"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
              />
              <label htmlFor="rules" className="text-gray-700">
                I have read and agree to the rules and regulations
              </label>
            </div>

            <button
              type="submit"
              className="custom-button"
            >
              Register

            </button>
          </form>
          <p className='mt-3 text-gray-700 '>if you are allrady register then 
            <Link to={'/login'} className='text-indigo-700 ' > Login </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
