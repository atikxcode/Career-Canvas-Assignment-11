import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import image from '../../assets/5e85e013516e7adb3d528a3d_rm_bg.jpg'
import NavBar from "../NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaSearch } from "react-icons/fa";


const AllJobs = () => {

  const {theme, setTheme, user} = useContext(AuthContext)

  

 
  

  const {isPending, isError, error,  data: jobLists} = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/joblisted')
      return res.json();
    }
  })

  if(isPending){
    return <span className="loading loading-dots loading-lg"></span>
  }

  if(isError){
    return <p>Error: {error.message}</p>
  }

  console.log(jobLists)

  return (
    <div className=" relative">

      
        
     <div className="flex flex-col gap-24 items-center">


      
     <div className=" w-full h-[900px]  relative" style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <NavBar></NavBar>
        <div className="absolute top-[40%] flex flex-col justify-center text-center  w-full items-center gap-8">
        <h2 className="text-[35px] text-white">Explore Exciting Opportunities: <span className="text-orange-400">Browse Our Job Listings</span></h2>
        <p className="text-[18px] text-white w-[900px] text-center">Welcome to our job listings page! Discover a diverse range of career opportunities waiting for you. Whether you're seeking full-time, part-time, remote, or hybrid positions, we have something for everyone. Browse through our curated collection of job openings and take the next step towards your professional journey. Start exploring now and find your dream job today!</p>
        <button className="btn ">Explore Now</button>
        </div>
        </div>


        <div className="w-[300px]">
        
        <form className={`input rounded-xl  input-bordered flex items-center gap-2 ${
        theme === 'light' ? "text-white bg-black " : "text-white "
      }`}>
        <input type="text" className="grow" placeholder="Search" />
        <button className="text-white"><FaSearch /></button>
        </form>
        </div>
          
      

    <div className="mx-auto container">
    <div className="grid grid-cols-1 gap-12">
          {
            jobLists.map(job => <div key={job._id} className="">

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
            
            <tr className="bg-gray-400 border-[0px] bg-opacity-70 text-white font-bold text-[14px]">
              <td><img className="h-[350px] w-[625px]" src={job.image} alt="" /></td>
              <td className="w-auto xl:w-[250px]">{job.title}</td>
              <td>{job.postingDate}</td>
              <td>{job.deadline}</td>
              <td>{job.salaryRange}</td>
              <td> <Link to={`/viewdetails/${job._id}`}> <button  className=" btn font-light hover:text-white  transition-all">View Details</button></Link></td>
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

