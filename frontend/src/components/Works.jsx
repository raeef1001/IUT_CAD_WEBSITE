import React, { useState, useEffect ,useContext} from "react";
import { motion } from "framer-motion";
import { Link, Route, Routes } from "react-router-dom";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import "./Works.css";
import Tilt from "react-tilt";
import { github } from "../assets";
import { projects } from "../constants";
import { Context } from '../App';
import ProjectCard from "./ProjectCard";
import Achievements from "../pages/Achievements";


const Works = () => {
  const [banner,BLOG,activities,achievements] = useContext(Context);


var featuredBLOG = BLOG.slice(0,3)
var featuredachievements = achievements.slice(0,3)

  const [workType, setWorkType] = useState("react");
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>IUTCS</p>
        <h2 className={`${styles.sectionHeadText}`}>Blogs</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore our thought-provoking blogs where technology meets storytelling.
        Dive into a world of insights, trends, and solutions. Our blogs provide
        a platform for knowledge-sharing and innovation, offering a fresh
        perspective on the ever-evolving landscape of computing. Delve into our
        diverse collection of blogs, where the intersection of technology and
        storytelling takes center stage. Uncover an abundance of insights,
        trends, and solutions. Our blogs serve as a rich resource for
        knowledge-sharing and innovation.
        </motion.p>
      </div>
  
      <h1 className="typeProject" id="react">Blogs</h1>
      <div className="mt-20 flex flex-wrap gap-7">
       { workType==="react" && featuredBLOG.map((project, index) => (
          <ProjectCard
             key={`project-${index}`}
             index={index}
            {...project}
            stateType='react'
          />
          
       ))
       }
       </div>
       <h1 className="typeProject">Achievements</h1>
      <div className="mt-20 flex flex-wrap gap-7">
       { workType==="react" && featuredachievements.map((project, index) => (
          <ProjectCard
             key={`project-${index}`}
             index={index}
            {...project}
            stateType="wordpress"
          />
       ))
       }
      
        
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
