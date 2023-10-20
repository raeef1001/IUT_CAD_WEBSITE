import React from 'react';
import { Context } from '../App';
import { useParams } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { useContext } from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";
const SinglePage = () => {
  const [banner, BLOG, activities, achievements] = useContext(Context);
  const routeParams = useParams();
  const tags = routeParams.id.split("-");
  console.log(tags[0]);
  var ourData;
  if (tags[0] == "blogs") {
    console.log("got into blogs");
    BLOG.map((data) => {
      if (data.id == tags[1]) {
        ourData = data;
        console.log(ourData);
      }
    });
  }
  if (tags[0] == "achievements") {
    achievements.map((data) => {
      if (data.id == tags[1]) {
        ourData = data;
        console.log(ourData);
      }
    });
  }
  if (tags[0] == "activities") {
    activities.map((data) => {
      console.log("this is data", data);
      if (data.id == tags[1]) {
        ourData = data;
        console.log(ourData);
      }
    });
  }
  return (
    <div>
      <div className='min-h-[90vh] mt-10 '>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{tags[0]}</p>
        <h2 className='text-white font-500 md:text-[30px] sm:text-[20px] xs:text-[15px] text-[10px]'>{ourData.attributes.title}</h2>
      </motion.div>
     <div className='rounded-xl overflow-hidden'>
     <img
          src={ourData.attributes.image.data.attributes.formats.small.url}
          alt=""
          className=" w-[50vh] pt-10 pb-10 rounded-xl overflow-hidden" 
        />
     </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {ourData.attributes.description }
      </motion.p>
      
    </div>
    </div>
  );
};

export default SectionWrapper(SinglePage, "");