import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { events } from "@react-three/fiber";
const ExperienceCard = ({ experience }) => {
  
    
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        // padding: "1rem",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      // date={experience.date}
      iconStyle={{ background: "#1d1836", color: "#fff" }}
      // icon={
      //   <div className="flex justify-center items-center w-full h-full">
      //     {/* <img
      //       src={experience.icon}
      //       alt={experience.company_name}
      //       className='w-[60%] h-[60%] object-contain'
      //     /> */}
      //   </div>
      // }
      position="right"
      // iconOnClick={() => window.open("google.com", "_blank")}
    >
      <div>
        <h3 className="text-white text-[14px] font-bold">{experience.attributes.event_name}</h3>
        <p
          className="text-secondary text-[13px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.attributes.event_date}
        </p>
      </div>

      {/* <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul> */}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [events, setevents] = useState([
        
    {
        id: 1,
        attributes: {
            event_name: "rafy",
            event_date: 3,
            
        }
    },
    {
        id: 2,
        attributes: {
          event_name: "rafy",
          event_date: 3,
        }
    }, {
        id: 3,
        attributes: {
          event_name: "rafy",
          event_date: 3,
        }
    },
  ]);
  useEffect(() => {
    const fetchevents = async () => {
      const reqOptions = {
        Headers: {
          Authorization:
            "4097452d319c351f0804df6fe25a0b50f1ed06549537d5cc80b7d78d5d716e405f3a2586c1965c770f2e016c3770cc051b317d1c24e48b939fd105da2fe9d3bee95a19c968d65f1bd9f4c0389c940d5f8ed18d58c1ca352cf1632faecb820f34f52b08a8fad7182c7367d1aa8c9563bd804ee48ef4d6b5bf83fc94046073fccf",
        },
      };
      const request = await fetch(
        "http://localhost:1337/api/events?populate=*",
        reqOptions
      );
      const response = await request.json();
      setevents(response.data);
      console.log("eventss at homeevents after setting", events);
      console.log(events)
      return response;
    };

    try{
    const eventsss = fetchevents();
  } catch (err) {
    console.log(err);
  }
  }, [events]);
  return (
    <div className="">
     <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Upcoming Events.</h2>
      </motion.div>

     



<div className="flex flex-col md:flex-row  ">
<div className="mb-10 items-center content-center">
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
     </div>
        <div className="w-full">
          <VerticalTimeline>
            {events.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
</div>









     </div>
  );
};

export default SectionWrapper(Experience, "work");
