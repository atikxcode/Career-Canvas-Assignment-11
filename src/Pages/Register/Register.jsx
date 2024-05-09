import 'animate.css';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './Register.css'





const Register = () => {

  const isValidURL = (string) => {
    var res = string.match(/\bhttps?:\/\/\S+\.(jpeg|jpg|gif|png|bmp|svg|webp|tiff|ico)\b/i);
    return (res!== null)
  };




  const navigate  = useNavigate();

  const notify1 = () => toast("Password must have an uppercase letter, a lowercase letter, and a minimum length of 6 characters.");
  const notify2 = () => toast("Thanks for joining with us");

  const [showPassword, setShowPassword] = useState(false)

  const {createUser, updateUser} = useContext(AuthContext);


  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

  

    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);

    if (!isValidPassword) {
      notify1();
      return;
    }

    // Creating user here
    createUser(email, password)
    .then(result => {
      
      
      updateUser(result.user, name, isValidURL(photo) ? photo :  'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg')
      .then(() => {
        
        setTimeout(() => {
          notify2();
          setName('')
          setPhoto('')
          setEmail('')
          setPassword('')
          
        }, 500);

        setTimeout(() => {
          
          navigate(location?.state ? location.state : '/');
          window.location.reload();
        }, 2000);
        
        
      })
      .catch(error => {
        console.error(error)
      })
      
    })
    .catch(error => {
      console.error(error)
    })


  
  }

  return (
    <div className='bg-[#000000]  .page-container '>
    <div className='pb-10'>
 

   
    
    <div className=''>

    <div>
    <h2 className="my-10 text-center text-white text-[35px] font-semibold">Register your account</h2>
    

<form  className="md:3/4 lg:w-1/2 mx-auto" onSubmit={handleRegister}>

<div className="form-control">
  <label className="label">
    <span className="text-white text-[20px] font-semibold">Your Name</span>
  </label>
  <input type="text" placeholder="Enter your name" name="name" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" value={name} onChange={e => setName(e.target.value)} required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Photo URL</span>
  </label>
  <input type="text" placeholder="Enter your photo URL" name="photo" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" value={photo} onChange={e => setPhoto(e.target.value)} required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Email address</span>
  </label>
  <input type="email" placeholder="Enter your email address" name="email" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" value={email} onChange={e => setEmail(e.target.value)} required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Password</span>
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
  <label className="label">
    
  </label>
</div>
<div className="form-control mt-6">
  <button className="p-3 rounded-xl  text-white text-xl font-semibold bg-gray-400 opacity-70 hover:text-black hover:bg-white duration-700 ">Register</button>
</div>
<p className="text-center mt-6 text-gray-400 font-semibold">Already Have An Account? <Link to='/login'><span className="text-white text-[16px] font-semibold">Login</span></Link></p>
</form>
    </div>
    
    </div>
    </div>

    
      
    
      <ToastContainer />
  </div>
  );
};

export default Register;