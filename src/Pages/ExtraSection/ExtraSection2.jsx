import { useContext } from 'react'
import image1 from '../../assets/cand-2.webp'
import image2 from '../../assets/cand-3.webp'
import image4 from '../../assets/cand-4.webp'
import image5 from '../../assets/cand-5.webp'
import '../../Pages/ExtraSection/ExtraSection2.css'
import { AuthContext } from '../../Providers/AuthProvider'


const ExtraSection2 = () => {

  const {theme} = useContext(AuthContext);


  return (
    <div className="container mx-auto my-24">

      <div className={` flex flex-col items-center my-20 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-10'>From Dream to Reality</h2>
        <p className='text-lg md:text-xl lg:text-2xl xl:text-2xl text-center'>Customers Review of How Our Platform Helped Secure the Perfect Job</p>
      </div>

    


    
      <div className='image-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  justify-center md:justify-between lg:justify-between xl:justify-between'>

<div className="image-wrapper">
  <img className="rounded-t-[40%] rounded-b-[40%] h-[420px] w-[300px]" src={image1} alt="" />
  <div className="review-drawer">
    <p>Life-changing platform! Found my dream job in no time. Highly recommended!</p>
  </div>
</div>

<div className="image-wrapper">
  <img className="rounded-t-[40%] rounded-b-[40%] h-[420px] w-[300px]" src={image2} alt="" />
  <div className="review-drawer">
    <p>Effortlessly navigated through opportunities. Secured a job beyond my expectations!</p>
  </div>
</div>

<div className="image-wrapper">
  <img className="rounded-t-[40%] rounded-b-[40%] h-[420px] w-[300px]" src={image4} alt="" />
  <div className="review-drawer">
    <p>Simplified my job hunt and landed an incredible role. Thank you!</p>
  </div>
</div>

<div className="image-wrapper">
  <img className="rounded-t-[40%] rounded-b-[40%] h-[420px] w-[300px]" src={image5} alt="" />
  <div className="review-drawer">
    <p>Impressed by the personalized recommendations. Got hired within weeks!</p>
  </div>
</div>

</div>


   
    </div>
  );
};

export default ExtraSection2;