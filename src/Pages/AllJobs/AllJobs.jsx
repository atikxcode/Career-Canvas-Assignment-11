import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import image from '../../assets/5e85e013516e7adb3d528a3d_rm_bg.jpg'
import NavBar from "../NavBar/NavBar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaSearch } from "react-icons/fa";
import 'aos/dist/aos.css'
import Aos from "aos";
import { Helmet } from "react-helmet";

const AllJobs = () => {

  const {theme, setTheme, user} = useContext(AuthContext)
  const [searchTerm, setSearchTerm] = useState('');

  
  useEffect(() => {
    Aos.init();
  },[])

 
  

  const {isPending, isError, error,  data: jobLists} = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const res = await fetch('https://assignment-11-server-gray-one.vercel.app/joblisted')
      return res.json();
    }
  })

  if(isPending){
    return <div className="mx-auto container flex justify-center"><span className=" loading loading-dots loading-lg"></span></div>
  }

  if(isError){
    return <p>Error: {error.message}</p>
  }

  // filtered Job
  const filteredJobs = jobLists.filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()));

  // console.log(jobLists)

  return (
    <div className=" relative">

      <Helmet>
      <meta charSet="utf-8" />
      <title>CareerCanvas - AllJobs</title>

      </Helmet> 
        
     <div className="flex flex-col gap-24 items-center">


      
     <div className=" w-full h-[900px]  relative" style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <NavBar></NavBar>
        <div className="absolute top-[40%] flex flex-col justify-center text-center  w-full items-center gap-8">
        <h2 className="text-[24px] md:text-[25px] lg:text-[30px] xl:text-[35px] text-white">Explore Exciting Opportunities: <span className="text-orange-400">Browse Our Job Listings</span></h2>
        <p className="text-[16px] xl:text-[18px] text-white xl:w-[900px] text-center">Welcome to our job listings page! Discover a diverse range of career opportunities waiting for you. Whether you're seeking full-time, part-time, remote, or hybrid positions, we have something for everyone. Browse through our curated collection of job openings and take the next step towards your professional journey. Start exploring now and find your dream job today!</p>
        <button className="btn ">Explore Now</button>
        </div>
        </div>


        <div className="w-[300px]">
        
        <form onSubmit={(e) => e.preventDefault()} className={`input rounded-xl  input-bordered flex items-center gap-2 ${
        theme === 'light' ? "text-white bg-black " : "text-black bg-white"
      }`}>
        <input type="text" className="grow" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" />
        <button className={`${theme === 'light' ? 'text-white' : 'text-black'}`}><FaSearch /></button>
        </form>
        </div>
          
      

    <div className="mx-auto container">
    <div className="grid grid-cols-1 gap-12">
          {
            (searchTerm ? filteredJobs : jobLists).map(job => <div key={job._id} className="">

            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
      
            <div className="overflow-x-auto">
        <table className="table">
        <thead className={theme === 'light' ? "text-black" : "text-white"}>
            <tr>
              <th>Cover</th>
              <th>Job Title</th>
              <th>Job Posting Date</th>
              <th>Application Deadline</th>
              <th>Salary range</th>
              <th>Details</th>
              
      
            </tr>
          </thead>
          
          <tbody>
            
            <tr className={` border-[0px] font-bold text-[14px] ${theme === 'light' ? 'text-white bg-black' : 'text-black bg-white'}`}>
              <td><img className="h-[50px] md:h-[200px] lg:h-[250px] xl:h-[350px] w-[300px] xl:w-[625px]" src={job.image} alt="" /></td>
              <td className="w-auto xl:w-[250px]">{job.title}</td>
              <td>{job.postingDate}</td>
              <td>{job.deadline}</td>
              <td>{job.salaryRange}</td>
              <td> <Link to={`/viewdetails/${job._id}`}> <button  className={`btn font-light transition-all ${theme === 'light' ? 'text-black bg-white' : 'text-white bg-black'}`}>View Details</button></Link></td>
            </tr>
           
          </tbody>
      
        </table>
      </div>
      
      
            </div>
          </div>)
          }
        </div>
    </div>

        
     </div>
      
     
    </div>
  );
};

export default AllJobs;