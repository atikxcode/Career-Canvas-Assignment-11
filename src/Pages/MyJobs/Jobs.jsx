import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Aos from 'aos';
import MyJobs from './MyJobs';

const Jobs = () => {

  const {user} = useContext(AuthContext);







  useEffect(() => {
    Aos.init();
  },[])

  const [myList, setMyList] = useState([]);

useEffect(() => {

  if(!user || !user.email){
    return;
  }
 fetch('http://localhost:5000/joblisted')
 .then(res => res.json())
 .then(data => {
  const filteredList = data?.filter(item => item?.user_email === user?.email);
      setMyList(filteredList);
      console.log(filteredList);
 })
 .catch(error => {
  console.error('Error fetching data: ', error);
 })
}, [user?.email, user])





 

  return (
    <div className="" >
    
    
    <div className="py-32 mx-auto container">

      <div className="grid grid-cols-1 gap-16">
        {
          myList.map(lists => <MyJobs key={lists._id} lists={lists} setMyList = {setMyList}></MyJobs>)
        }
      </div>

    </div>

  
 
  </div>
  );
};

export default Jobs;