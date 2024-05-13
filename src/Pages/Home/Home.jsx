import FramerMotionSlider from "../FramerMotion/FramerMotionSlider";
import JobByCategory from "../JobByCategory/JobByCategory";
import NavBar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";


const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
     {/* <Slider></Slider> */}
     <div className="">
     <FramerMotionSlider isVisible={true}></FramerMotionSlider>
     </div>
     <JobByCategory></JobByCategory>
    </div>
  );
};

export default Home;