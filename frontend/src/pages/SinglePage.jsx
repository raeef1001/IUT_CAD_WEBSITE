import React from 'react';
import { Context } from '../App';
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { SectionWrapper } from "../hoc";
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
      <div>
      <h1 className="text-[1.75rem]  my- text-center ">
            {ourData.attributes.title}
          </h1>
       <div className="rounded-md">
       <img
          src={ourData.attributes.image.data.attributes.formats.small.url}
          alt=""
          className="m-auto w-[50vh] pt-10 pb-10 rounded-md" 
        />
       </div>
      </div>
      <div className="mx-3 mb-3 text-[.875rem] font-semibold">
        <div>
          <h1 className="text-[1.25rem] font-bold my-3 ">
            {ourData.attributes.date}
          </h1>
          <h1 className="text-[1rem] font my-3 ">
            {/* {ourData.attributes.description} */}
            <div dangerouslySetInnerHTML={{__html:ourData.attributes.description }} />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(SinglePage, "");