import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";


import Footer from "../Footer/Footer";



const Login = () => {



  const location = useLocation();
  const navigate = useNavigate();
  

  const notify = () => toast("Wrong Email Or Password");

  const {signIn, handleGoogleSignIn, handleGithubSignIn} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false)
  
  const handleLogin = e => {
    e.preventDefault();

    signIn(email, password)
    .then(result => {
      console.log(result.user)
      navigate(location?.state ? location.state : '/');
      setEmail('')
      setPassword('')
      
    })
    .catch(error => {
      console.error(error)
      notify();
    })
  
  }

  const googleLogin = () => {
    handleGoogleSignIn()
  .then(result => {
    navigate(location?.state ? location.state : '/');
    const user = result.user;
  })
  .catch(error => {
    console.log('error', error.message)
  })
  }

  const githubLogin = () => {
    handleGithubSignIn()
    .then(result => {
      navigate(location?.state ? location.state : '/');
      const loggedInUser = result.user;
      console.log(loggedInUser);
    })
    .catch(error => {
      console.error(error)
    })
  }


 


  return (
    
    <div className=" ">
      <div className=" pb-10" >
          
      
      <div className="">
        
      <div className="text-white">
     <h2 className="my-10 text-center text-white text-[35px] font-semibold">Login your account</h2>
     
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">


      <form className="md:3/4 lg:w-1/2 mx-auto" onSubmit={handleLogin}>
  <div className="form-control">
    <label className="label">
      <span className="text-white text-[20px] font-semibold">Email address</span>
    </label>
    <input type="email" placeholder="Enter your email address" name="email" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" value={email} onChange={e => setEmail(e.target.value)} required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="text-white text-[20px] font-semibold">Password</span>
    </label>
    
   <div className="flex items-center  relative">
   <input 
    type={showPassword ? 'text' : 'password'}
    placeholder="Enter your password"
     name="password" 
     className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400 w-full"
      value={password}
       onChange={e => setPassword(e.target.value)} required />
    <span className="absolute right-[2%] top-[30%] text-white" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
    
   </div>
    
  </div>
  <div className="form-control mt-6">
    <button className="bg-gray-400 bg-opacity-70  p-3 rounded-xl hover:bg-white hover:text-black duration-700 text-white text-xl font-semibold">Login</button>
  </div>
  <button onClick={googleLogin} className="mt-10 border w-full p-3 text-lg hover:text-white hover:bg-gray-600 transition-all rounded-2xl">Sign In with Google</button>
  <button onClick={githubLogin} className="mt-10 border w-full p-3 text-lg hover:text-white hover:bg-gray-600 transition-all rounded-2xl">Sign In with Github</button>
  <p className="text-center mt-6  font-semibold text-gray-400">Don't Have An Account? <Link to='/register'><span className="text-white text-[16px] font-semibold">Register</span></Link></p>
</form>
      </div>

      </div>
      
      </div>
      </div>

  










     
     <div className="">
     <Footer></Footer>
     </div>
     
      <ToastContainer />
  
    </div>
    
  );
};

export default Login;