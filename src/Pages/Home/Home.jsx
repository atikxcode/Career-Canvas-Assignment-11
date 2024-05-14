import { Helmet } from "react-helmet";
import ExtraSection from "../ExtraSection/ExtraSection";
import ExtraSection2 from "../ExtraSection/ExtraSection2";
import FramerMotionSlider from "../FramerMotion/FramerMotionSlider";
import JobByCategory from "../JobByCategory/JobByCategory";
import NavBar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";


const Home = () => {
  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
      <title>CareerCanvas - Home</title>

      </Helmet> 
      <NavBar></NavBar>
     {/* <Slider></Slider> */}
     <div className="">
     <FramerMotionSlider isVisible={true}></FramerMotionSlider>
     </div>
     <JobByCategory></JobByCategory>
     <ExtraSection></ExtraSection>
     <ExtraSection2></ExtraSection2>
    </div>
  );
};

export default Home;