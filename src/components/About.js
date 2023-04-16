import React from 'react';
// countup
import CountUp from 'react-countup';
//intersection observer hook
import { InView, useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';

import MyPDF from '../assets/cv-Adi.pdf';

const About = () => {
  const [ref, InView] = useInView({
   threshold: 0.5,
  });

  return (
<section className='section' id='about' ref={ref}>
  <div className='container mx-auto'>
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-y-0 h-screen'>
      {/* img */}
      <motion.div
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3}}
      className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
      </motion.div>
       {/* text */}
       <motion.div
       variants={fadeIn("left", 0.5)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once: false, amount: 0.3}}
       className='flex-1'>
        <h2 className='h2 text-accent'>About me.</h2>
        <h3 className='h3 mb-4'>I'm a Fullstack Developer with specialization in both Front-end Developer and Back-end Developer.
        </h3>
       <p className='mb-6'>I designed and developed a responsive web application using React. My role in this project was to design and develop the user interface, and optimize the performance and scalability of the application. To achieve these goals, I used React. js to build a modular and scalable front-end architecture that can easily accommodate new features and functionality. I also used Redux to manage the application state and provide a centralized data store that can be accessed by different components.The application is fully responsive and optimized for different screen sizes, including desktops, tablets, and mobile devices.
       </p>
       {/* stats */}
       <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
        <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
            {
              InView ? <CountUp start={0} end={2} duration={3} /> : null}
              
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
            Years of <br />
            experience
            </div>
        </div>
        <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
            {
              InView ? <CountUp start={0} end={20} duration={3} /> : null}
              
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
            Project <br />
            Completed
            </div>
        </div>
        <div>
          <div className='text-[40px] font-tertiary text-gradient mb-2'>
            {
              InView ? <CountUp start={0} end={800} duration={3} /> : null}
              +
          </div>
          <div className='font-primary text-sm tracking-[2px]'>
            Linkedin <br />
           Followers
            </div>
        </div>
       </div>
       <div className='flex gap-x-8 items-center'>
        <button className='btn btn-lg' onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
          Contact me
          </button>
        <a href={MyPDF} className='text-gradient btn-link' download="">
         My Portfolio 
        </a>
       </div>
       </motion.div>
    </div>
  </div>
  </section>
  );
};

export default About;
