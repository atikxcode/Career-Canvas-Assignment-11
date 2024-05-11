import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

const MyAddedJobList = ({jobs}) => {
  console.log('Here are the jobs', jobs)

  const {_id, image, title, category, salaryRange, postingDate, deadline} = jobs;

  useEffect(() => {
    Aos.init();
  },[])


  const handleDelete = id => {
    // Display Swal confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      
    }).then((result) => {
      if (result.isConfirmed) {
        // If user confirms deletion, send DELETE request to server
        fetch(`http://localhost:5000/joblisted/${id}`, {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            }).then(() => {
              // Reload the page after deletion
              window.location.reload();
            });
          }
        })
        .catch(error => {
          console.error('Error deleting file:', error);
          Swal.fire({
            title: "Error",
            text: "An error occurred while deleting the file.",
            icon: "error"
          });
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // If user cancels deletion, display a message
        Swal.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  };



  return (
    <div className='mx-auto container'>
         <div className="overflow-x-auto"  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
  <table className="table">
   
    <thead className="text-white">
      <tr>
        <th>Image</th>
        <th>Title</th>
        <th>Category</th>
        <th>salary Range</th>
        <th>posting Date</th>
        <th>Deadline</th>
        <th>Delete</th>
        <th>Update</th>

      </tr>
    </thead>
    <tbody>
      
      <tr className="bg-gray-400 border-[0px] bg-opacity-70 text-white font-bold text-[14px]">
        <td><img className="xl:h-[100px] xl:w-[150px]" src={image} alt="" /></td>
        <td className="w-auto xl:w-[250px]">{title}</td>
        <td>{category}</td>
        <td>{salaryRange}</td>
        <td>{postingDate}</td>
        <td>{deadline}</td>

        <td><button onClick={() => handleDelete(_id)} className="btn bg-gray-400 bg-opacity-70 border-0 text-white hover:text-black hover:bg-white duration-700">Delete</button></td>
        <td>
          <Link to={`/updatejob/${_id}`}>
          <button className="btn bg-gray-400 bg-opacity-70 border-0 text-white hover:text-black hover:bg-white duration-700">Update</button>
          </Link>
         </td>
      </tr>
     
    </tbody>

  </table>
</div>
    </div>
  );
};

export default MyAddedJobList;