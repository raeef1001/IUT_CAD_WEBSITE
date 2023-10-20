import { motion } from "framer-motion";
import React, { useState, useEffect ,useContext} from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Main from "./carousel/Main";
import { Context } from '../App';

const Hero = () => {
  const [banner,BLOG,activities,achievements] = useContext(Context);
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}

        <div className="mx-auto flex flex-col justify-center overflow-hidden">
         <div>
         <h1 className={`${styles.heroHeadText} text-white text-center`}>
             <span className='text-[#915EFF]'>IUTCS</span>
          </h1> 
          <p className={`${styles.heroSubText} mt-2  text-white-100 text-center`}>
            I develop creative and functional user <br className='sm:block hidden' />
            interfaces and web applications 




          </p>
         </div>
      <div className="mt-16 w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1800px]  pl-[50px] md:pl-[50px] lg:pl-[50px] xl:pl-[10vw]">
      <Main data={banner} />
      </div>
        </div>
      </div>
      
     
      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
