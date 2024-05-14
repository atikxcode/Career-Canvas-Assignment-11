import { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { AuthContext } from "../../Providers/AuthProvider";
import MyAddedJobList from "./MyAddedJobList";
import axios from "axios";
import { Helmet } from "react-helmet";

const MyJobs = () => {

  const {user} = useContext(AuthContext)

  // console.log(user);

  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    if(!user || !user.email){
      return;
    }

    axios.get('https://assignment-11-server-gray-one.vercel.app/joblisted')
    .then(response => {
      const filteredJobs = response.data.filter(job => job.email === user.email);
      setMyJobs(filteredJobs);
      console.log("These are the filtered jobs:", filteredJobs);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });



  },[user])



  return (
    <div className="">
      <Helmet>
      <meta charSet="utf-8" />
      <title>CareerCanvas - My Jobs</title>

      </Helmet> 
      <NavBar></NavBar>

      <div>
        {
          myJobs.map(jobs => <MyAddedJobList key={jobs._id} jobs={jobs}></MyAddedJobList>)
        }
      </div>

     
  </div>
  );
};

export default MyJobs;