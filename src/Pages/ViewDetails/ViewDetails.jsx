import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {


  const jobDetails = useLoaderData();


  // console.log(jobDetails)

  return (
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="" >
            <div className=" hover:scale-110 duration-1000 transition-all bg-[#1b1b1b]">
            <img className="w-auto h-[350px] " src={jobDetails.image} alt="" />
           
           <div className="flex justify-between">
  
           <div className="flex flex-col items-start p-8 bg-[#1b1b1b] opacity-70">
            <p className="text-lg mb-2">{jobDetails.title}</p>
            <p className="font-extrabold">Job Description: <span className="text-[14px] text-gray-400">{jobDetails.description}</span> </p>
            <p className="font-extrabold">Category:   <span className="text-[14px] text-gray-400">{jobDetails.category}</span></p>
            <p className="font-extrabold">Visit:  <span className="text-[14px] text-gray-400">{jobDetails.salaryRange}</span> </p>

            <p className="font-extrabold">Season: <span className="text-[14px] text-gray-400">{jobDetails.postingDate}</span> </p>
            <p className="font-extrabold">Season: <span className="text-[14px] text-gray-400">{jobDetails.deadline}</span> </p>
            <p className="font-extrabold">Season: <span className="text-[14px] text-gray-400">{jobDetails.totalApplied}</span> </p>
            </div>
            {/* <div className="p-8 items-center flex">
            <Link to={`/viewdetails/${job._id}`}> <button className="text-gray-400 hover:text-white hover:font-bold transition-all">View Details</button></Link>
          </div> */}
            
           </div>
            
            </div>
            </div>
  );
};

export default ViewDetails;