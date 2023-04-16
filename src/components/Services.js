import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

//services data
const services = [
  {
name: "UI/UX Design",
describe: "understanding user behavior, conducting user research, creating user personas, and designing user flows and interactions. creating a seamless and intuitive experience that meets the user's needs and expectations.",
link: "Learn more",
  },
  {
    name: "Development",
    describe: "developing and managing the entire technology stack of a web application and software,besides having a wide range of technical skills, including both front-end and back-end development, as well as database management and server-side.",
    link: "Learn more",
      },
      {
        name: "Product Branding",
        describe: "understanding the product's target audience, value proposition, and branding guidelines, creating a consistent visual identity, focusing on user experience, implementing responsive design, and using analytics and feedback.",
        link: "Learn more",
          },
];


const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row '>
        {/* text & images */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
          A little bit more...
          </h3>
          <button className='btn btn-sm'  onClick={() => document.getElementById("work").scrollIntoView({ behavior: "smooth" })}>
            See my work
            </button>
        </motion.div>
         {/* services*/}
         <motion.div 
           variants={fadeIn("left", 0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once: false, amount: 0.3}}
         className='flex-1'>
          {/* service list */}
          <div>
            {services.map((service, index)=> {
              // destructure service
              const {name, describe, link} = service;

            return ( 
            <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
              <div className='max-w-[476px]'>
                <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                  {name}
                  </h4>
                <p className='font-secondary leading-tight'>
                  {describe}
                  </p>
              </div>
              <div className='flex flex-col flex-1 items-end'>
               <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                <BsArrowUpRight /> 
                </a>
                <a href='#' className='text-gradient text-sm'>
                  {link}
                  </a>
              </div>
            </div>
            );
          })}
          </div>
         </motion.div>
      </div>
    </div>
  
    </section>
  );
};

export default Services;
