import { useContext,  useEffect, useState } from "react";
import 'aos/dist/aos.css'
import Aos from "aos";
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
const JobByCategory = () => {

  const  {theme} = useContext(AuthContext);

  const [activeTab, setActiveTab] = useState(1);

  const [filteredTerm, setFilteredTerm] = useState('');

  
  useEffect(() => {
    Aos.init();
  },[])

 
  

  const {isPending, isError, error,  data: jobLists} = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/joblisted')
      return res.json();
    }
  })

  console.log(jobLists)

  if(isPending){
    return <div className="mx-auto container flex justify-center"><span className=" loading loading-dots loading-lg"></span></div>
  }

  if(isError){
    return <p>Error: {error.message}</p>
  }

  const sliceJobLists = jobLists.slice(0, 6);

  const filteredJobs = jobLists.filter(job => job.category.toLowerCase().includes(filteredTerm.toLowerCase()));
  const sliceJobLists2 = filteredJobs.slice(0, 6);



  return (
    <div className="my-24 mx-auto container">

      <div className="flex flex-col items-center gap-20">

        {/* heading and description */}
        <div className={`flex flex-col gap-8 items-center text-center w-[800px] ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          <h2 className="text-5xl">Discover Jobs by Category</h2>
          <p className="text-xl">Explore various job categories tailored to match your expertise and aspirations. From technology to healthcare, we curate a diverse array of opportunities to help you find the perfect fit for your career journey. Start exploring now!</p>
        </div>

        {/* tab data */}

        <div className=" w-full">
        <div className="flex">
          <div onClick={() => {
            setActiveTab(1),
            setFilteredTerm('All Jobs')
          }}
          className={`w-1/2 py-4 px-6 cursor-pointer ${activeTab === 1 ? 'text-white bg-blue-500' : 'bg-gray-200'}`}
          >
            All Jobs
          </div>

          <div  onClick={() => {
            setActiveTab(2),
            setFilteredTerm('Remote')
          }}
          className={`w-1/2 py-4 px-6 cursor-pointer ${activeTab === 2 ? 'text-white bg-blue-500' : 'bg-gray-200'}`}
          >
            Remote
          </div>

          <div onClick={() => {
            setActiveTab(3),
            setFilteredTerm('On Site')
          }}
          className={`w-1/2 py-4 px-6 cursor-pointer ${activeTab === 3 ? 'text-white bg-blue-500' : 'bg-gray-200'}`}
          >
            On Site
          </div>

          <div onClick={() => {
            setActiveTab(4),
            setFilteredTerm('Part-Time')
          }}
          className={`w-1/2 py-4 px-6 cursor-pointer ${activeTab === 4 ? 'text-white bg-blue-500' : 'bg-gray-200'}`}
          >
            Part-Time
          </div>

          <div onClick={() => {
            setActiveTab(5),
            setFilteredTerm('Hybrid')
          }}
          className={`w-1/2 py-4 px-6 cursor-pointer ${activeTab === 5 ? 'text-white bg-blue-500' : 'bg-gray-200'}`}
          >
            Hybrid
          </div>


        </div>

        {activeTab === 1 && <div className={`mt-24 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          <div className="grid grid-cols-3 gap-10">
          {
          sliceJobLists.map(job => <div key={job._id}>
             <div className=" hover:scale-110 duration-1000 transition-all bg-[#1b1b1b] w-[450px]">
          <img className=" h-[350px] " src={job?.image} alt="" />
         
         <div className="flex justify-between">

         <div className="flex text-white gap-2 flex-col items-start p-8 bg-[#1b1b1b] opacity-70">
          <p className="text-lg text-orange-500 mb-2">{job?.title}</p>
          <p className="font-extrabold">Posted By:   <span className="text-[14px] text-gray-400">{job?.name}</span></p>
          <p className="font-extrabold">Category:   <span className="text-[14px] text-gray-400">{job?.category}</span></p>
          <p className="font-extrabold">Salary Range:  <span className="text-[14px] text-gray-400">{job?.salaryRange}</span> </p>
          <p className="font-extrabold">Description:   <span className="text-[14px] text-gray-400">{job?.description}</span> </p>
          <p className="font-extrabold">Deadline: <span className="text-[14px] text-gray-400">{job?.deadline}</span> </p>
          </div>
          <div className="p-8 items-center flex">
         <Link to={`/viewdetails/${job?._id}`}> <button className="text-gray-400 btn border-orange-400 bg-inherit hover:text-white hover:font-bold hover:border-orange-500 transition-all">View Details</button></Link>
          </div>
         </div>
          
          </div>
          </div>)
          }
          </div>
          
          
          </div>}


        {activeTab === 2 && <div className={`mt-24 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          <div className="grid grid-cols-3 gap-10">
          {
          sliceJobLists2.map(job => <div key={job._id}>
             <div className=" hover:scale-110 duration-1000 transition-all bg-[#1b1b1b] w-[450px]">
          <img className=" h-[350px] " src={job?.image} alt="" />
         
         <div className="flex justify-between">

         <div className="flex text-white gap-2 flex-col items-start p-8 bg-[#1b1b1b] opacity-70">
          <p className="text-lg text-orange-500 mb-2">{job?.title}</p>
          <p className="font-extrabold">Posted By:   <span className="text-[14px] text-gray-400">{job?.name}</span></p>
          <p className="font-extrabold">Category:   <span className="text-[14px] text-gray-400">{job?.category}</span></p>
          <p className="font-extrabold">Salary Range:  <span className="text-[14px] text-gray-400">{job?.salaryRange}</span> </p>
          <p className="font-extrabold">Description:   <span className="text-[14px] text-gray-400">{job?.description}</span> </p>
          <p className="font-extrabold">Deadline: <span className="text-[14px] text-gray-400">{job?.deadline}</span> </p>
          </div>
          <div className="p-8 items-center flex">
         <Link to={`/viewdetails/${job?._id}`}> <button className="text-gray-400 btn border-orange-400 bg-inherit hover:text-white hover:font-bold hover:border-orange-500 transition-all">View Details</button></Link>
          </div>
         </div>
          
          </div>
          </div>)
          }
          </div>
          
          
          </div>}


        {activeTab === 3 && <div className={`mt-24 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          <div className="grid grid-cols-3 gap-10">
          {
          sliceJobLists2.map(job => <div key={job._id}>
             <div className=" hover:scale-110 duration-1000 transition-all bg-[#1b1b1b] w-[450px]">
          <img className=" h-[350px] " src={job?.image} alt="" />
         
         <div className="flex justify-between">

         <div className="flex text-white gap-2 flex-col items-start p-8 bg-[#1b1b1b] opacity-70">
          <p className="text-lg text-orange-500 mb-2">{job?.title}</p>
          <p className="font-extrabold">Posted By:   <span className="text-[14px] text-gray-400">{job?.name}</span></p>
          <p className="font-extrabold">Category:   <span className="text-[14px] text-gray-400">{job?.category}</span></p>
          <p className="font-extrabold">Salary Range:  <span className="text-[14px] text-gray-400">{job?.salaryRange}</span> </p>
          <p className="font-extrabold">Description:   <span className="text-[14px] text-gray-400">{job?.description}</span> </p>
          <p className="font-extrabold">Deadline: <span className="text-[14px] text-gray-400">{job?.deadline}</span> </p>
          </div>
          <div className="p-8 items-center flex">
         <Link to={`/viewdetails/${job?._id}`}> <button className="text-gray-400 btn border-orange-400 bg-inherit hover:text-white hover:font-bold hover:border-orange-500 transition-all">View Details</button></Link>
          </div>
         </div>
          
          </div>
          </div>)
          }
          </div>
          
          
          </div>}


        {activeTab === 4 && <div className={`mt-24 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          <div className="grid grid-cols-3 gap-10">
          {
          sliceJobLists2.map(job => <div key={job._id}>
             <div className=" hover:scale-110 duration-1000 transition-all bg-[#1b1b1b] w-[450px]">
          <img className=" h-[350px] " src={job?.image} alt="" />
         
         <div className="flex justify-between">

         <div className="flex text-white gap-2 flex-col items-start p-8 bg-[#1b1b1b] opacity-70">
          <p className="text-lg text-orange-500 mb-2">{job?.title}</p>
          <p className="font-extrabold">Posted By:   <span className="text-[14px] text-gray-400">{job?.name}</span></p>
          <p className="font-extrabold">Category:   <span className="text-[14px] text-gray-400">{job?.category}</span></p>
          <p className="font-extrabold">Salary Range:  <span className="text-[14px] text-gray-400">{job?.salaryRange}</span> </p>
          <p className="font-extrabold">Description:   <span className="text-[14px] text-gray-400">{job?.description}</span> </p>
          <p className="font-extrabold">Deadline: <span className="text-[14px] text-gray-400">{job?.deadline}</span> </p>
          </div>
          <div className="p-8 items-center flex">
         <Link to={`/viewdetails/${job?._id}`}> <button className="text-gray-400 btn border-orange-400 bg-inherit hover:text-white hover:font-bold hover:border-orange-500 transition-all">View Details</button></Link>
          </div>
         </div>
          
          </div>
          </div>)
          }
          </div>
          
          
          </div>}


        {activeTab === 5 && <div className={`mt-24 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          <div className="grid grid-cols-3 gap-10">
          {
          sliceJobLists2.map(job => <div key={job._id}>
             <div className=" hover:scale-110 duration-1000 transition-all bg-[#1b1b1b] w-[450px]">
          <img className=" h-[350px] " src={job?.image} alt="" />
         
         <div className="flex justify-between">

         <div className="flex text-white gap-2 flex-col items-start p-8 bg-[#1b1b1b] opacity-70">
          <p className="text-lg text-orange-500 mb-2">{job?.title}</p>
          <p className="font-extrabold">Posted By:   <span className="text-[14px] text-gray-400">{job?.name}</span></p>
          <p className="font-extrabold">Category:   <span className="text-[14px] text-gray-400">{job?.category}</span></p>
          <p className="font-extrabold">Salary Range:  <span className="text-[14px] text-gray-400">{job?.salaryRange}</span> </p>
          <p className="font-extrabold">Description:   <span className="text-[14px] text-gray-400">{job?.description}</span> </p>
          <p className="font-extrabold">Deadline: <span className="text-[14px] text-gray-400">{job?.deadline}</span> </p>
          </div>
          <div className="p-8 items-center flex">
         <Link to={`/viewdetails/${job?._id}`}> <button className="text-gray-400 btn border-orange-400 bg-inherit hover:text-white hover:font-bold hover:border-orange-500 transition-all">View Details</button></Link>
          </div>
         </div>
          
          </div>
          </div>)
          }
          </div>
          
          
          </div>}
       


        </div>

      </div>
      
    </div>
  );
};

export default JobByCategory;
