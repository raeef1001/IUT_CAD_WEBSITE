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
  // const [featurendBlog,setfeaturendBlog] =useState([])
  // const [featuredAchievements,setfeaturedAchievemnet] = useState([]);
//  useEffect(() => {
    // setfeaturendBlog(BLOG.filter((b) => b.is_featured===true))
    // setfeaturedAchievemnet(BLOG.filter((a) => a.is_featured===true))

var featuredBLOG = BLOG.slice(0,3)
var featuredachievements = achievements.slice(0,3)
//  BLOG.map((b)=>{
//     if(b.attributes.is_featured===false){
//       var temp = [...featurendBlog]
//       temp.push(b)
//       setfeaturendBlog(temp)
//     }
//   })
//   achievements.map((a)=>{
//     if(a.attributes.is_featured===false){
//       var temp = [...featuredAchievements]
//       temp.push(a)
//       setfeaturedAchievemnet(temp)
//     }
//   })
// console.log(featurendBlog)
//   }, [BLOG,achievements])
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
          My portfolio highlights my skills and experience with real-world
          examples of my work. Each project is briefly described and includes
          links to its code repository and live demo. This reflects my ability
          to solve complex problems, work with a variety of technologies, and
          manage projects effectively.
        </motion.p>
      </div>
      {/* <div id="button-project">
        <button onClick={() => setWorkType("react")}>React</button>
        <button onClick={() => setWorkType("wordpress")}>Wordpress</button>
        <button onClick={() => setWorkType("fullstack")}>Full Stack</button>
      </div> */}
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
