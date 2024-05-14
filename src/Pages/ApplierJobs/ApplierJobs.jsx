import { useQuery } from "@tanstack/react-query";
import NavBar from "../NavBar/NavBar";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import 'aos/dist/aos.css'
import Aos from "aos";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Helmet } from "react-helmet";



const ApplierJobs = () => {




  useEffect(() => {
    Aos.init();
  },[])





  const {user, theme} = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');


  
  const {isPending, isError, error,  data: appliedJob} = useQuery({
    queryKey: ['appliedjob'],
    queryFn: async () => {
      const res = await fetch('https://assignment-11-server-gray-one.vercel.app/appliedjob')
      return res.json();
    }
  })



  if(isPending){
    return <div className="mx-auto container flex justify-center"><span className=" loading loading-dots loading-lg"></span></div>
  }

  if(isError){
    return <p>Error: {error.message}</p>
  }

  // filtered applied job

  const filteredAppliedJobs = appliedJob.filter(job => job?.email === user?.email);
  // console.log(filteredAppliedJobs)

  const categoryFilter = filteredAppliedJobs.filter(job => job.category.toLowerCase().includes(searchTerm.toLowerCase()));


  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
      <title>CareerCanvas - AppliedJob</title>

      </Helmet> 
      <NavBar></NavBar>
      

      <div className="container mx-auto my-20" id='content'>

      <div className="flex flex-col items-center gap-24">


      <div className="w-[300px]">
        
        <form onSubmit={(e) => e.preventDefault()} className={`input rounded-xl  input-bordered flex items-center gap-2 ${
        theme === 'light' ? "text-white bg-black " : "text-black bg-white"
      }`}>
        <input type="text" className="grow" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" />
        <button className={`${theme === 'light' ? 'text-white' : 'text-black'}`}><FaSearch /></button>
        </form>
        </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-16">
      {
        (searchTerm ? categoryFilter : filteredAppliedJobs).map(jobApplied => <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="" key={jobApplied._id}>
          <div className="mx-auto hover:scale-110 duration-1000 transition-all bg-[#1b1b1b] w-[90%] xl:w-[450px]">
          <img className=" h-[350px] " src={jobApplied?.image} alt="" />
         
         <div className="flex justify-between">

         <div className="flex text-white gap-2 flex-col items-start p-8 bg-[#1b1b1b] opacity-70">
          <p className="text-lg text-orange-500 mb-2">{jobApplied?.title}</p>
          <p className="font-extrabold">Category:   <span className="text-[14px] text-gray-400">{jobApplied?.category}</span></p>
          <p className="font-extrabold">Salary Range:  <span className="text-[14px] text-gray-400">{jobApplied?.salaryRange}</span> </p>
          <p className="font-extrabold">Description:   <span className="text-[14px] text-gray-400">{jobApplied?.description}</span> </p>
          <p className="font-extrabold">Deadline: <span className="text-[14px] text-gray-400">{jobApplied?.deadline}</span> </p>
          </div>
          <div className="p-8 items-center flex">
         <Link to={`/viewdetails2/${jobApplied?._id}`}> <button className="text-gray-400 btn border-orange-400 bg-inherit hover:text-white hover:font-bold hover:border-orange-500 transition-all">View Details</button></Link>
          </div>
         </div>
          
          </div>
          </div>)
      }
      </div>
      </div>


      <div className="flex justify-center my-10">
        <button className="text-gray-400 btn border-orange-400 bg-inherit hover:text-white hover:font-bold hover:border-orange-500 transition-all" onClick={() => window.print()}>Download PDF</button>
      </div>


      </div>

    
    
    </div>
  );
};

export default ApplierJobs;



