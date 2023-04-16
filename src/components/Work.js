import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";


const Work = () => {
  return (
   <section className='section' id='work'>
   <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row gap-x-10 '>
      <motion.div
         variants={fadeIn("right", 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3}}
      className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
        {/* text */}
        <div>
          <h2 className='h2 leading-tight text-accent'>
          My Latest <br />
          Work.
          </h2>
          <p className='max-w-sm mb-16'> I designed and developed a responsive web application using React. My role in this project was to design and develop the user interface.
          </p>
          <button className='btn btn-sm'  onClick={() => window.open('https://github.com/wolf1131?tab=repositories')} target="_blank">View all projects</button>
        </div>
        {/* image */}
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
          {/* overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          {/* img  */}
          <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''
            onClick={() => window.location.href = 'https://wolf1131portfolio.netlify.app/'} 
            />
          {/* pretitle */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>Web Design</span>
            </div>
          {/* title */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3x1 text-white'>Project Title</span>
          </div>
        </div>
      </motion.div>
      <motion.div 
         variants={fadeIn("left", 0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.3}}
      className='flex-1 flex flex-col gap-y-10'>
        {/* image */}
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
          {/* overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          {/* img  */}
          <img 
          className='group-hover:scale-125 transition-all duration-500'
           src={Img2}
            alt=''  onClick={() => window.location.href = 'https://wolf1131.github.io/portfolio-2/'} style={{ cursor: 'pointer' }} />
          {/* pretitle */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>Web Design</span>
            </div>
          {/* title */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3x1 text-white'>Project Title</span>
          </div>
        </div>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
          {/* overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          {/* img  */}
          <img
           className='group-hover:scale-125 transition-all duration-500' 
           src={Img3} 
           alt='' onClick={() => window.location.href = 'https://wolf1131portfolio.netlify.app/'} />
          {/* pretitle */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>Web Design</span>
            </div>
          {/* title */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3x1 text-white'>Project Title</span>
          </div>
        </div>
      </motion.div>
    </div>
   </div>
    </section>
    );
};

export default Work;
