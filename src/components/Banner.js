import React from 'react';
//images
import Image from "../assets/avatar.svg";
//icons
import {FaGithub, FaYoutube, FaDribbble, FaFacebook, FaInstagram, FaLinkedin, FaDownload } from "react-icons/fa";
// type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from "../variants";
//download cv
import MyPDF from '../assets/cv-Adi.pdf';



const Banner = () => {
  return (
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
    id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
{/* text */}
    <div className='flex-1 text-center font-secondary lg:text-left'>
      <motion.h1 
      variants={fadeIn('up', 0.3)}
        initial="hidden" 
        whileInView={"show"} 
        viewport={{once: false, amount: 0.7}}
        className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
        Adi <span>Gridman</span>
        </motion.h1>
        <motion.div 
        variants={fadeIn('up', 0.4)}
        initial="hidden" 
        whileInView={"show"} 
        viewport={{once: false, amount: 0.7}}
        className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[-1]'>
          <span className='text-white mr-4'>I am a</span>         
        
          <TypeAnimation sequence={[
          "FullStack",
          2000,
          "BackEnd",
          2000,
          "FrontEnd",
          2000,
          ]} 
            speed={50}  
            className='text-accent' 
            wrapper='span'
            repeat={Infinity}     
            />

        </motion.div>
        <motion.p
          variants={fadeIn('up', 0.5)}
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount: 0.7}}
          className='mb-8 max-w-lg mx-auto lg:mx-0'>
My name is Adi Gridman. I'm a mechanical engineer and a Full stack developer specializing in the "MERN" stack.
I got exposed to coding in some of my practical engineering courses, and immediately I fell in love with the idea of creating
solutions to day-to-day problems using only lines of code! I continued to code for fun for a while,
and now I'm doing it professionally as my main career path!.
  </motion.p>
  <motion.div 
    variants={fadeIn('up', 0.6)}
    initial="hidden" 
    whileInView={"show"} 
    viewport={{once: false, amount: 0.7}}
  className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
    <button className='btn btn-lg' onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact me</button>
    <a href={MyPDF} className='text-gradient btn-link' download=''>
      My Portfolio
      </a>
  </motion.div>
  {/* socials */}
  <motion.div 
    variants={fadeIn('up', 0.7)}
    initial="hidden" 
    whileInView={"show"} 
    viewport={{once: false, amount: 0.7}}
  className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
    <a href='https://www.linkedin.com/in/adi-gridman-a19360183/' target='_blank'>
      <FaLinkedin />
    </a>
    <a href='https://github.com/wolf1131?tab=repositories' target='_blank'>
      <FaGithub />
    </a>
    <a href='https://www.instagram.com/adi_grid/' target='_blank'>
      <FaInstagram />
    </a>
  </motion.div>
    </div>
    {/* image */}
    <motion.div 
      variants={fadeIn('down', 0.5)}
      initial="hidden" 
      whileInView={"show"} 
    className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
    <img src={Image} alt='' />
    </motion.div>
      </div>
    </div>
    </section>
);
};

export default Banner;
