import { Link, useLoaderData } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'aos/dist/aos.css'
import Aos from "aos";


const ViewDetails = () => {

  const notify = () => toast("Successfully Applied for the job");
  const notify2 = () => toast("You can't apply for the job that you have posted");
  const notify3 = () => toast("Deadline is over for this job wait for further notice");


  const jobDetails = useLoaderData();

 


  useEffect(() => {
    Aos.init();
  },[])


  const {user} = useContext(AuthContext);
  


  const handleApplyClick = () => {
    const modal = document.getElementById('my_modal_5');
    if (modal) {
      modal.showModal();
    }
  };

  const handleJob = async (id) => {
    console.log(id)
    // const applyUserEmail = user?.email;
    // console.log(applyUserEmail)

    if(user?.email === jobDetails.email){
      return notify2();
    } else {
      try{
        const response = await fetch(`http://localhost:5000/joblisted/${id}/apply`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          
        });
  
        const data = await response.json();
  
        if(!response.ok){
          throw new Error (data.message);
        }
  
        console.log('Applied Successfully', data.updatedTotalApplied);
        notify();
  
  
        const AppliedJobDetails = {image: jobDetails.image, title: jobDetails.title, email: user?.email, name: user?.displayName, category: jobDetails.category, salaryRange: jobDetails.salaryRange, description: jobDetails.description, postingDate: jobDetails.postingDate, deadline: jobDetails.deadline};
      console.log(AppliedJobDetails)
  
      fetch('http://localhost:5000/appliedjob', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(AppliedJobDetails)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
          //  notify();
          console.log('successful')
           
        }
        
        
      })
  
  
  
      
      } catch (error) {
        console.error('Error applying to job: ', error)
        notify3()
      }
    }
  }


  // console.log(jobDetails)

  return (
    <div className="" >
      <NavBar></NavBar>
          <div className="w-full mx-auto container my-32"  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" >
          <div className=" bg-[#1b1b1b]">
           
           <div className="flex flex-row">

          
           <img className="w-full h-auto " src={jobDetails.image} alt="" />
           
           
           <div className="flex flex-col justify-between items-center text-white ">
  
           <div className="flex flex-col   h-full items-start p-8 bg-[#1b1b1b] opacity-70">
            <div className="flex justify-center  w-full">

            <p className="text-2xl mb-2 text-orange-500">{jobDetails.title}</p>
            </div>
            
            <div className="flex flex-col  h-full  gap-4  justify-center">
            <p className="font-extrabold ">Job Description: <span className="text-[14px]  text-gray-400">{jobDetails.description}</span> </p>
            <p className="font-extrabold">Category:   <span className="text-[14px] text-gray-400">{jobDetails.category}</span></p>
            <p className="font-extrabold">Salary Range:  <span className="text-[14px] text-gray-400">{jobDetails.salaryRange}</span> </p>

            <p className="font-extrabold">Number of Applicants: <span className="text-[14px] text-gray-400">{jobDetails.totalApplied}</span> </p>
           
            </div>
            </div>
            <div className="p-8 items-center flex">
            <Link> <button className="text-gray-400 btn border-orange-400 bg-inherit hover:text-white hover:font-bold hover:border-orange-500 transition-all" onClick={handleApplyClick}>Apply</button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">



        <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card shrink-0 w-full max-w-sm bg-base-100">
      <form className="card-body" >

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} readOnly placeholder="Name" className="input input-bordered" required />
         
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} readOnly placeholder="Email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume Link</span>
          </label>
          <input type="text"   placeholder="Your Link Here" className="input input-bordered" required />
        </div>
        
        <div className="form-control mt-6">
          <button  className="btn btn-primary" onClick={() => handleJob(jobDetails._id)}>Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
          
          
          
          
          
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={() => document.getElementById('my_modal_5').close()}>Close</button>
            </form>
          </div>
        </div>
      </dialog></Link>
          </div>
            
           </div>
           </div>
            
            </div>
          </div>
          <ToastContainer />
            </div>
  );
};

export default ViewDetails;