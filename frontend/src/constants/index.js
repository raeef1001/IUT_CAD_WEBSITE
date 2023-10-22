import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  sneakers,
  openai,
  airbnb
  

} from "../assets";
import image4 from "../assets/loading_images/4.gif"
export const navLinks = [
  {
    id: "Blog",
    title: "Blog",
  },
  {
    id: "Achievements",
    title: "Achievements",
  },
 
 
];

const services = [
  {
    title: "Application Development",
    icon: web,
  },
  {
    title: "Robotics",
    icon: mobile,
  },
  {
    title: "Network & Communication",
    icon: backend,
  },
  {
    title: " Multimedia & Gaming",
    icon: creator,
  },
  {
    title: "Programming and Algorithm",
    icon: backend,
  },
  {
    title: "Co-curricular Aid and Projects",
    icon: mobile,
  },
  {
    title: "Liaison and Publication",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "iut cs freshers",
    company_name: "Freelancer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "23/01/2015",
    
  },
  {
    title: "Code rush",
    company_name: "DLD Inc",
    icon: shopify,
    iconBg: "#383E56",
    date: "12/01/2015",
    
  },
  {
    
    title: "Data Seminar",
    company_name: "YUN Creative Agency",
    icon: starbucks,
    iconBg: "#383E56",
    date: "12/01/2015",
   
  },
 
  
  
  
];

const testimonials = [
  {
    testimonial:
    "Unifying Technology Enthusiasts, Fostering Innovation, and Nurturing Digital Literacy. Together, we Code the Future, Connect the World, and Inspire Excellence in the Ever-Evolving Realm of Computing.",

  },
  {
    testimonial:
    "Fueling Progress Through Digital Excellence. We're a Global Community of Innovators, Educators, and Visionaries, Embracing Technology's Challenges and Opportunities to Shape Tomorrow's Digital Landscape.",
   
  },
  {
    testimonial:
      " Dedicated to Advancing Computer Science and Building a Brighter Digital Future. We Encourage Curiosity, Foster Collaboration, and Champion Technological Proficiency, Uniting Members in the Pursuit of Innovation and Excellence.",
   
  },
];

const projects = [
  {
    name: "Sneakers Commerce",
    type : "react",
    description:
      "Full Stack Ecommerce website with React.js, Tailwind, Mongoose, MongoDB, firebase-auth, NodeJS, Express",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
     
      {
        name: "expressJS",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: sneakers,
    source_code_link: "https://commerce-raeef.netlify.app/",
  },
  {
    name: "MERN Airbnb Cloner",
    type : "react",
    description:
      "Full Stack airbnb website with authentication, database, calendar, reservation, custom modals and many more",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
     
      {
        name: "expressJS",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://house-rent-two.vercel.app/",
  },
  {
    name: "Full Stack Dall-E Clone",
    type : "react",
    description:
      "Full Stack Dall-E Clone with React.js, Tailwind, Mongoose, MongoDB, firebase-auth, NodeJS, Express, OpenAI api",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "expressJS",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "OpenAi api",
        color: "pink-text-gradient",
      },
    ],
    image: openai,
    source_code_link: "https://dallerewind.netlify.app/",
  },
  
  {
    name: "portfolio",
    type : "wordpress",
    description:
      "A WordPress portfolio site  that displays creative work with a visually appealing design. It showcases all my projects and features",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "custom-theme",
        color: "green-text-gradient",
      },
      {
        name: "custom-plugin",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://dev-raeef.pantheonsite.io/",
  },
  {
    name: "Alpha commerce",
    type : "wordpress",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "woocommerce",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "custom-plugin",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://dev-alphacommerce.pantheonsite.io/?v=fbd25224d617",
  },
];



// here comes my part 

var blogElements =[
  {
    attributes: {
      title: "blog",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
    },
  },
  {
    attributes: {
      title: "blog",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
    },
  },
  {
    attributes: {
      title: "blog",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
      
    },
  },
]

var achievementsElements =[
  {
    attributes: {
      title: "achievements ",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
    },
  },
  {
    attributes: {
      title: "achievements ",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
    },
  },
  {
    attributes: {
      title: "achievements ",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
      
    },
  },
]  

var activitiesElements =[
  {
    attributes: {
      title: "activity",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
    },
  },
  {
    attributes: {
      title: "activity",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
    },
  },
  {
    attributes: {
      title: "activity",
      description: "loading",
      publishedAt: "2015-14",
      name_of_writer: "akash",
      is_featured: true,
      image: {
        data: {
            
            attributes: {
              
                formats: {
                   small: {
                        url:image4,
                       
                    },
                   
                },
                
            }
        }
    }
      
    },
  },
]
var CommitteeElements =[
  {type:"members",
      id:1,
      title:"Committee 1",
      description:"This is Committee 1",
      image:image4,
      date:"12/12/12"
  },
  {type:"members",
      id:2,
      title:"committee 2",
      description:"This is committee 2",
      image:image4,
      date:"12/12/12"
  },
  {type:"members",
      id:3,
      title:"committee 3",
      description:"This is committee 3",
      image:image4,
      date:"12/12/12"
  },
  {type:"members",
  
      id:4,
      title:"committee 4",
      description:"This is committee 4",
      image:image4,
      date:"12/12/12"
  },
  {type:"members",
  
      id:5,
      title:"committee 5",
      description:"This is committee 5",
      image:image4,
      date:"12/12/12"
  }
]
var totalData = [...blogElements,...achievementsElements,...activitiesElements,...CommitteeElements]

export { services, technologies, experiences, testimonials, projects,blogElements,achievementsElements,activitiesElements,CommitteeElements,totalData};
