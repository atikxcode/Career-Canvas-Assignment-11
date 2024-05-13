import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Aos from 'aos';
import { ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import NavBar from '../NavBar/NavBar';
import img from '../../assets/Untitled design.png'
import 'aos/dist/aos.css'


const UpdateJob = () => {

  useEffect(() => {
    Aos.init();
  },[])


  const updatedJob = useLoaderData();
  console.log("update job list here", updatedJob);

  const {_id, image, title,category, description, postingDate, deadline, salaryRange } = updatedJob;

  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const {user} = useContext(AuthContext);
  useEffect(() => {
    Aos.init();
  },[])


  const notify = () => toast("Updated The Job Details Successfully");


  const handleUpdate = e => {
    e.preventDefault();
   
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const email = user.email;
    const name = user.displayName;
    const category = form.category.value;
    const salaryRange = form.salary.value;
    const description = form.description.value;
    const postingDate = form.posting_date.value;
    const deadline = form.deadline.value;
    const totalApplied = parseInt(form.applied.value);


    const updatedJobPost = {image, title, email, name, category, salaryRange, description,postingDate, deadline, totalApplied };
    console.log('updated job post here', updatedJobPost)

    fetch(`http://localhost:5000/joblisted/${_id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedJobPost)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount > 0){
         notify();
         setTimeout(() => {
          navigate('/myjobs')
         }, 1500);
         
      }
      
      form.reset();
    })
    
  }

  return (
    <div className="relative" >

     

      <div className="" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),  url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

    <NavBar></NavBar>
     
    



<div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" >


<div className=" w-full py-24 md:py-24 lg:py-24 xl:py-16">
<div className="flex flex-col items-center justify-center">
<h2 className="my-10 text-center text-white text-[35px] font-semibold"> <span className="text-orange-400">Update</span> Your Job Details</h2>
<p className="mb-10 text-center text-lg text-white lg:w-[900px]  font-semibold">Make Changes Where you want and Update the Job Details</p>


</div>
<form  className="lg:w-full mx-auto container" onSubmit={handleUpdate}>

<div className="grid grid-cols-2 gap-4">

<div className="form-control">
<label className="label">
<span className="text-white  text-[20px] font-semibold">Image</span>
</label>
<input type="text" placeholder="Enter image URL of the Job Banner" defaultValue={image} name="image" className="input bg-inherit placeholder:text-white placeholder:font-semibold text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
<label className="label">
<span className="text-white  text-[20px] font-semibold">Job Title</span>
</label>
<input type="text" placeholder="Enter Job Title" name="title" defaultValue={title} className="input bg-inherit placeholder:text-white placeholder:font-semibold text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
<label className="label">
<span className="text-white  text-[20px] font-semibold">User Email</span>
</label>
<input  type="email" readOnly defaultValue={user ? user.email : ''} placeholder="Enter your email address" name="email" className="input bg-inherit placeholder:text-white placeholder:font-semibold text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
<label className="label">
<span className="text-white  text-[20px] font-semibold">User Name</span>
</label>
<input type="text" readOnly defaultValue={user ? user.displayName : ''} placeholder="Enter your Name" name="name" className="input bg-inherit placeholder:text-white placeholder:font-semibold text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
<label className="label">
<span className="text-white  text-[20px] font-semibold">Job Category</span>
</label>

<select name="category" defaultValue={category} className="input bg-inherit placeholder:text-white placeholder:font-semibold text-white hover:border-white mb-4 border-[1px] border-gray-400" required>

<option className="bg-[#000000]" value='On Site'>On Site</option>
<option className="bg-[#000000]" value='Remote'>Remote</option>
<option className="bg-[#000000]" value='Part-Time'>Part-Time</option>
<option className="bg-[#000000]" value='Hybrid'>Hybrid</option>
</select>

</div>



<div className="form-control">
<label className="label">
<span className="text-white   text-[20px] font-semibold">Salary Range</span>
</label>
<input type="text" placeholder="Enter Salary Range" defaultValue={salaryRange} name="salary" className="input bg-inherit placeholder:text-white placeholder:font-semibold text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
<label className="label">
<span className="text-white  text-[20px] font-semibold">Job Description</span>
</label>
<input type="text" placeholder="Give a short description about the Job" defaultValue={description} name="description" className="input bg-inherit placeholder:text-white placeholder:font-semibold text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
<label className="label">
<span className="text-white  text-[20px] font-semibold">Job Posting Date</span>
</label>
<input type="date" placeholder="Average cost " name="posting_date" defaultValue={postingDate} className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
<label className="label">
<span className="text-white  text-[20px] font-semibold">Application Deadline</span>
</label>
<DatePicker
  selected={startDate}
  onChange={date => setStartDate(date)}
  placeholderText="Select a date"
  className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400 w-full"
  name="deadline"
  defaultValue={deadline}
  required
/>
</div>

<div className="form-control">
<label className="label">
<span className="text-white  text-[20px] font-semibold">Job Applicants Number</span>
</label>
<input type="number" readOnly defaultValue={0} placeholder="Job Applied for this Post" name="applied" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>





</div>

<div className="form-control mt-6">
<button className="p-3 rounded-xl  text-white text-xl font-semibold bg-gray-400 opacity-70 hover:text-black hover:bg-white duration-700 ">Add</button>
</div>




</form>




</div>

</div>


</div>







     
      <ToastContainer />
    </div>
  );
};

export default UpdateJob;