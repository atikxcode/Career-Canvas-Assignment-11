import Aos from "aos";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";
import DatePicker from "react-datepicker";
import image from '../../assets/city.jpg'
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../NavBar/NavBar";
import axios from "axios";


const AddJobs = () => {

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    Aos.init();
  },[])


  const notify = () => toast("New Job Posted");

  const {user} = useContext(AuthContext)

 
  const handleAddJobs = e => {
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


    const newJobPost = {image, title, email, name, category, salaryRange, description,postingDate, deadline, totalApplied };
    console.log(newJobPost)

  

    axios.post('https://assignment-11-server-gray-one.vercel.app/joblisted', newJobPost, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(res => {
  console.log(res.data);
  if (res.data.insertedId) {
    notify();
  }
  form.reset();
})
.catch(error => {
  console.error('Error:', error);
});
    
  }


  return (
    <div className="relative" >

      <Helmet>
      <meta charSet="utf-8" />
      <title>CareerCanvas - AddJobs</title>

      </Helmet>   

      <div className="" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),  url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
    
    <NavBar></NavBar>




<div className=" w-full py-24 md:py-24 lg:py-24 xl:py-16">
<div className="flex flex-col items-center justify-center">
<h2 className="my-10 text-center text-white text-[35px] font-semibold">Post Your Job Opportunity <span className="text-orange-400">Today!</span></h2>
<p className="mb-10 text-center xl:text-lg text-white xl:w-[900px]  font-semibold">Reach a wide audience by posting your job opportunity on our platform. Whether you're hiring for full-time, part-time, remote, or hybrid positions, we provide the platform for you to connect with talented professionals. Take the next step in finding the perfect candidate for your team. Start posting your job now!</p>


</div>
<form  className="lg:w-full mx-auto container" onSubmit={handleAddJobs}>

<div className="grid grid-cols-2 gap-4">

<div className="form-control">
<label className="label">
<span className="text-white  text-[20px] font-semibold">Image</span>
</label>
<input type="text" placeholder="Enter image URL of the Job Banner" name="image" className="input bg-inherit placeholder:text-white placeholder:font-semibold text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
<label className="label">
<span className="text-white  text-[20px] font-semibold">Job Title</span>
</label>
<input type="text" placeholder="Enter Job Title" name="title" className="input bg-inherit placeholder:text-white placeholder:font-semibold text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
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

<select name="category" className="input bg-inherit placeholder:text-white placeholder:font-semibold text-white hover:border-white mb-4 border-[1px] border-gray-400" required>

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
<input type="text" placeholder="Enter Salary Range" name="salary" className="input bg-inherit placeholder:text-white placeholder:font-semibold text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
<label className="label">
<span className="text-white  text-[20px] font-semibold">Job Description</span>
</label>
<input type="text" placeholder="Give a short description about the Job" name="description" className="input bg-inherit placeholder:text-white placeholder:font-semibold text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
<label className="label">
<span className="text-white  text-[20px] font-semibold">Job Posting Date</span>
</label>
<input type="date" placeholder="Average cost " name="posting_date" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
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
  required
/>
</div>

<div className="form-control">
<label className="label">
<span className="text-white  text-[20px] font-semibold">Job Applicants Number</span>
</label>
<input type="number" defaultValue={0} placeholder="Job Applied for this Post" name="applied" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>





</div>

<div className="form-control mt-6">
<button className="p-3 rounded-xl  text-white text-xl font-semibold bg-gray-400 opacity-70 hover:text-black hover:bg-white duration-700 ">Add</button>
</div>




</form>
</div>




      </div>
      <ToastContainer />
    </div>
  );
};

export default AddJobs;