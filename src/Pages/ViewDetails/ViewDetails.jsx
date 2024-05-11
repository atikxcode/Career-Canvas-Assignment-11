import { Link, useLoaderData } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const ViewDetails = () => {


  const jobDetails = useLoaderData();


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
            <Link> <button className="text-gray-400 btn border-orange-400 bg-inherit  hover:text-white hover:font-bold hover:border-orange-500 transition-all">Apply</button></Link>
          </div>
            
           </div>
           </div>
            
            </div>
          </div>
            </div>
  );
};

export default ViewDetails;