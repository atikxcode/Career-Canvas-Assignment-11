import { useContext, useState } from "react";

import 'react-tabs/style/react-tabs.css';
import { AuthContext } from "../../Providers/AuthProvider";

const JobByCategory = () => {

  const  {theme} = useContext(AuthContext);

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="my-24 mx-auto container">

      <div className="flex flex-col items-center gap-20">

        {/* heading and description */}
        <div className={`flex flex-col gap-8 items-center text-center w-[800px] ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          <h2 className="text-5xl">Discover Jobs by Category</h2>
          <p className="text-xl">Explore various job categories tailored to match your expertise and aspirations. From technology to healthcare, we curate a diverse array of opportunities to help you find the perfect fit for your career journey. Start exploring now!</p>
        </div>

        {/* tab data */}

        <div className="border w-full">
        <div className="flex">
          <div onClick={() => setActiveTab(1)}
          className={`w-1/2 py-4 px-6 cursor-pointer ${activeTab === 1 ? 'text-white bg-blue-500' : 'hover:bg-gray-200'}`}
          >
            Tab 1
          </div>

          <div onClick={() => setActiveTab(2)}
          className={`w-1/2 py-4 px-6 cursor-pointer ${activeTab === 2 ? 'text-white bg-blue-500' : 'hover:bg-gray-200'}`}
          >
            Tab 2
          </div>


        </div>

        {activeTab === 1 && <div className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>Tab 1 data</div>}
        {activeTab === 2 && <div className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>Tab 2 data</div>}
       


        </div>

      </div>
      
    </div>
  );
};

export default JobByCategory;
