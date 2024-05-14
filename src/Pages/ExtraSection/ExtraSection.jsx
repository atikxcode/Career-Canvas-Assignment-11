import Aos from "aos";
import { useContext, useEffect } from "react";
import image from '../../assets/pay-2.webp'
import { FaCheck } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import 'aos/dist/aos.css'

const ExtraSection = () => {

  const {theme} = useContext(AuthContext);

  useEffect(() => {

    Aos.init();
  },[])

  
  return (
    <div className="mx-auto container my-20">
      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">

      <div className={`text-3xl md:text-3xl lg:text-4xl xl:text-5xl  flex justify-center my-10 font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        <h2 className="text-center">Trusted & Popular Job Portal</h2>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center">
        {/* div 1 */}

        <div className={`w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-2 md:p-2 lg:p-4 xl:p-0 ${theme === 'light' ? 'text-black' : 'text-white'} order-2 md:order-1 lg:order-1 xl:order-1`}>
        <h2 className="text-lg md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-10">Best Job Search Platform Experience for you</h2>
        <p className="mb-8 text-[15px] md:text-lg lg:text-lg xl:text-lg">Elevate your job search experience with our intuitive platform, designed to simplify the process while maximizing opportunities. Explore a diverse range of roles, set personalized preferences, and receive instant notifications for new listings. With user-friendly features and seamless navigation, finding your ideal job has never been easier. Join us today and embark on your journey towards professional fulfillment.</p>

        <div className="grid grid-cols-2 gap-4">
          <p className={`flex flex-row items-center gap-2 text-lg p-1 rounded-xl ${theme === 'light' ? ' text-black' : ' text-white'}`}><span className="bg-blue-400 text-white p-1 rounded-[50%]"><FaCheck /></span><span></span>Corporate Business Jobs</p>
          <p className={`flex flex-row items-center gap-2 text-lg p-1 rounded-xl ${theme === 'light' ? ' text-black' : ' text-white'}`}><span className="bg-blue-400 text-white p-1 rounded-[50%]"><FaCheck /></span><span>Company Showcase</span></p>
          <p className={`flex flex-row items-center gap-2 text-lg p-1 rounded-xl ${theme === 'light' ? ' text-black' : ' text-white'}`}><span className="bg-blue-400 text-white p-1 rounded-[50%]"><FaCheck /></span><span>Creative Service</span></p>
          <p className={`flex flex-row items-center gap-2 text-lg p-1 rounded-xl ${theme === 'light' ? ' text-black' : ' text-white'}`}><span className="bg-blue-400 text-white p-1 rounded-[50%]"><FaCheck /></span><span>Easy To Upload Resume</span></p>
          <p className={`flex flex-row items-center gap-2 text-lg p-1 rounded-xl ${theme === 'light' ? ' text-black' : ' text-white'}`}><span className="bg-blue-400 text-white p-1 rounded-[50%]"><FaCheck /></span><span>Online E-commerce</span></p>
          <p className={`flex flex-row items-center gap-2 text-lg p-1 rounded-xl ${theme === 'light' ? ' text-black' : ' text-white'}`}><span className="bg-blue-400 text-white p-1 rounded-[50%]"><FaCheck /></span><span>Hire Expert Candidates</span></p>
        </div>

        </div>

        {/* div 2 */}

        <div className="w-full md:w-[40%] lg:w-[40%] xl:w-[40%] order-1 md:order-2 lg:order-2 xl:order-2">
        <img src={image} alt="" />
        </div>

      </div>


      </div>
    </div>
  );
};

export default ExtraSection;