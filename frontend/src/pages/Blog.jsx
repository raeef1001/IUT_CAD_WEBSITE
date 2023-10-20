import React from 'react';
import { useContext } from "react";
import { Context } from '../App';
import ProjectCard from '../components/ProjectCard';

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const Blog = () => {
    const [banner,BLOG,activities,achievements] = useContext(Context);
    

    return (
       <div className='min-h-[90vh] mt-10 '>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>BLOGS.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Institute of Information Technology is one of the fastest growing
        Institute at University of Dhaka. The study at this Institute is based
        on three core values: professionalism, excellence and respect. By
        establishing these principles, IIT ensures that graduates from this
        Institute can effectively contribute in the industry.
      </motion.p>
      
       
      <div className="mt-20 flex flex-wrap gap-7">
       {BLOG.map((project, index) => (
          <ProjectCard
             key={`project-${index}`}
             index={index}
            {...project}
            stateType="react"
          />
       ))
       }
      
        
      </div>
        </div>
       
    );
};

export default SectionWrapper(Blog, "");