import { useContext, useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { AuthContext } from "../../Providers/AuthProvider";
import MyAddedJobList from "./MyAddedJobList";

const MyJobs = () => {

  const {user} = useContext(AuthContext)

  console.log(user);

  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    if(!user || !user.email){
      return;
    }

    fetch('http://localhost:5000/joblisted')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const filteredJobs = data?.filter(job => job?.email === user?.email);
      setMyJobs(filteredJobs)
      console.log("This are the filtered job", filteredJobs)
    })
    .catch(error => {
      console.error('Error fetching data', error)
    })



  },[user])



  return (
    <div className="">
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