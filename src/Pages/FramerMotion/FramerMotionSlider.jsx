import {motion, AnimatePresence}  from 'framer-motion'
import image1 from '../../assets/micro chemo bot.jpg'
import image2 from '../../assets/27324.jpg'
import image3 from '../../assets/84409.jpg'
import { useEffect, useState } from 'react';

const FramerMotionSlider = ({isVisible}) => {

  const images = [image1, image2, image3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(oldCurrent => (oldCurrent + 1) % images.length);
    }, 4000)
    return () => clearInterval(timer)
  },[images.length])

  return (
    <AnimatePresence>

      {isVisible && (
        <motion.div 
        initial={{opacity: 0, scale: 0.9,  x: 0}}
        animate={{opacity: 1, scale: 1,  x: 0, transition: {duration: 0.5, ease: 'easeInOut'}}}
        exit={{opacity: 0, scale: 0.9,  x: '-100%', transition: {duration: 0.5, ease: 'easeInOut'}}}
        onAnimationComplete={() => setCurrent(oldCurrent => oldCurrent + 1) % images.length}
        style={{position: 'relative'}}
        >
          <motion.img src={images[current]} style={{width: '100%'}} />
          <motion.div style={{position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <h2 className='text-5xl text-white text-center'>Find Your Next Opportunity Today!</h2>
            <p className='text-lg text-white text-center mt-8'>Discover your dream job, explore new paths, and advance your skills with us. Browse top company listings and take your career to new heights. Start now!</p>
          </motion.div>
        </motion.div>
      )}
     </AnimatePresence>
  );
};

export default FramerMotionSlider;