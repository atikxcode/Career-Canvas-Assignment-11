import JobByCategory from "../JobByCategory/JobByCategory";
import NavBar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";


const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
     <Slider></Slider>
     <JobByCategory></JobByCategory>
    </div>
  );
};

export default Home;