import Aos from "aos";
import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddJobs = () => {

  useEffect(() => {
    Aos.init();
  },[])


  const notify = () => toast("Thanks for adding new Tour-Spot for us.");

  const {user} = useContext(AuthContext)

 
  const handleAddJobs = e => {
    e.preventDefault();
   
    const form = e.target;
    const image = form.image.value;
    const name = form.spot.value;
    const countries = form.country.value;
    const country = countries;
    const location = form.location.value;
    const short_description = form.description.value;
    const cost = form.cost.value;
    const average_cost = parseInt(cost);
    const seasonality = form.season.value;
    const travel_time = form.time.value;
    const visit = form.visit.value;
    const total_visitors_per_year = parseInt(visit);
    const user_email = user.email;
    const user_name = user.displayName;

    const newTourSpot = {image, name, country, location, short_description, average_cost, seasonality, travel_time, total_visitors_per_year, user_email, user_name};
    console.log(newTourSpot)

    fetch('https://assignment-10-server-zeta-smoky.vercel.app/touristspot', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newTourSpot)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
         notify();
         
      }
      
      form.reset();
    })
    
  }


  return (
    <div className="">
    




      <div className="py-24 md:py-24 lg:py-24 xl:py-16">
    <h2 className="my-10 text-center text-white text-[35px] font-semibold">Post A Job</h2>
    

<form  className="lg:w-full mx-auto container" onSubmit={handleAddJobs}>

<div className="grid grid-cols-2 gap-4">
  
<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Image</span>
  </label>
  <input type="text" placeholder="Enter image URL of the Job Banner" name="image" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Job Title</span>
  </label>
  <input type="text" placeholder="Enter Job Title" name="spot" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">User Email</span>
  </label>
  <input type="email" defaultValue={user ? user.email : ''} placeholder="Enter your email address" name="email" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">User Name</span>
  </label>
  <input type="text" defaultValue={user ? user.displayName : ''} placeholder="Enter your Name" name="name" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Job Category</span>
  </label>

  <select name="Category" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required>
    
    <option className="bg-[#000000]" value='onsite'>On Site</option>
    <option className="bg-[#000000]" value='remote'>Remote</option>
    <option className="bg-[#000000]" value='part_time'>Part-Time</option>
    <option className="bg-[#000000]" value='hybrid'>Hybrid</option>
  </select>

    </div>
  


<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Salary Range</span>
  </label>
  <input type="number" placeholder="Enter Salary Range" name="salary" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Job Description</span>
  </label>
  <input type="text" placeholder="Give a short description about the Job" name="description" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Job Posting Date</span>
  </label>
  <input type="date" placeholder="Average cost " name="cost" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Application Deadline</span>
  </label>
  <input type="text" placeholder="Enter Seasonality" name="season" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-white  text-[20px] font-semibold">Job Applicants Number</span>
  </label>
  <input type="text" placeholder="Travel Time" name="time" className="input bg-inherit text-white hover:border-white mb-4 border-[1px] border-gray-400" required />
</div>





</div>

<div className="form-control mt-6">
  <button className="p-3 rounded-xl  text-white text-xl font-semibold bg-gray-400 opacity-70 hover:text-black hover:bg-white duration-700 ">Add</button>
</div>




</form>
    </div>

 

    <ToastContainer />
    </div>
  );
};

export default AddJobs;