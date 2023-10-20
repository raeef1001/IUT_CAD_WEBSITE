import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import {
  About,
  ContactHome,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
// import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Activities from "./pages/Activities";
import Committee from "./pages/Committee";
import Contact from "./pages/Contact";
import LeaderBoard from "./pages/LeaderBoard";
import RegisterGlobal from "./pages/RegisterGlobal";
import RegisterIUT from "./pages/RegisterIUT";
import SinglePage from "./pages/SinglePage";

import {
  blogElements,
  activitiesElements,
  achievementsElements,
} from "./constants/index";
export const Context = createContext();
const App = () => {
  const [BLOG, setBLOG] = useState(blogElements);
  useEffect(() => {
    const fetchBolgs = async () => {
      const reqOptions = {
        Headers: {
          Authorization:
            "4097452d319c351f0804df6fe25a0b50f1ed06549537d5cc80b7d78d5d716e405f3a2586c1965c770f2e016c3770cc051b317d1c24e48b939fd105da2fe9d3bee95a19c968d65f1bd9f4c0389c940d5f8ed18d58c1ca352cf1632faecb820f34f52b08a8fad7182c7367d1aa8c9563bd804ee48ef4d6b5bf83fc94046073fccf",
        },
      };
      const request = await fetch(
        "http://localhost:1337/api/blogs?populate=*",
        reqOptions
      );
      const response = await request.json();
      setBLOG(response.data);
      console.log("blogs at homeblog after setting", BLOG);
      return response;
    };
    try {
      const blogss = fetchBolgs();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // activities and events
  const [activities, setActivities] = useState(activitiesElements);
  useEffect(() => {
    const fetchActivities = async () => {
      const reqOptions = {
        Headers: {
          Authorization:
            "4097452d319c351f0804df6fe25a0b50f1ed06549537d5cc80b7d78d5d716e405f3a2586c1965c770f2e016c3770cc051b317d1c24e48b939fd105da2fe9d3bee95a19c968d65f1bd9f4c0389c940d5f8ed18d58c1ca352cf1632faecb820f34f52b08a8fad7182c7367d1aa8c9563bd804ee48ef4d6b5bf83fc94046073fccf",
        },
      };
      const request = await fetch(
        "http://localhost:1337/api/activities?populate=*",
        reqOptions
      );
      const response = await request.json();
      setActivities(response.data);
      console.log("blogs at homeblog after setting", activities);
      return response;
    };

    try {
      const active = fetchActivities();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // achievements
  const [achievements, setAchievements] = useState(activitiesElements);
  useEffect(() => {
    const fetchAchievements = async () => {
      const reqOptions = {
        Headers: {
          Authorization:
            "4097452d319c351f0804df6fe25a0b50f1ed06549537d5cc80b7d78d5d716e405f3a2586c1965c770f2e016c3770cc051b317d1c24e48b939fd105da2fe9d3bee95a19c968d65f1bd9f4c0389c940d5f8ed18d58c1ca352cf1632faecb820f34f52b08a8fad7182c7367d1aa8c9563bd804ee48ef4d6b5bf83fc94046073fccf",
        },
      };
      const request = await fetch(
        "http://localhost:1337/api/achievements?populate=*",
        reqOptions
      );
      const response = await request.json();
      setAchievements(response.data);
      console.log("blogs at homeblog after setting", achievements);
      return response;
    };
    try {
      const achievement = fetchAchievements();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // banners
  const [banner, setBanner] = useState({
    data: [
      {
        attributes: {
          title: "loading",
          image: {
            data: {
              attributes: {
                formats: {
                  small: {
                    url: "https://media.tenor.com/TVfAxrSTjEgAAAAM/loading-buffer.gif",
                  },
                },
              },
            },
          },
        },
      },
      {
        attributes: {
          title: "loading",
          image: {
            data: {
              attributes: {
                formats: {
                  small: {
                    url: "https://media.tenor.com/TVfAxrSTjEgAAAAM/loading-buffer.gif",
                  },
                },
              },
            },
          },
        },
      },
      {
        attributes: {
          title: "loading",
          image: {
            data: {
              attributes: {
                formats: {
                  small: {
                    url: "https://media.tenor.com/TVfAxrSTjEgAAAAM/loading-buffer.gif",
                  },
                },
              },
            },
          },
        },
      },
    ],
  });

  // const blogs = useContext(Context);
  // console.log("blog at home",blogs);

  useEffect(() => {
    const fetchBanner = async () => {
      const reqOptions = {
        Headers: {
          Authorization:
            "4097452d319c351f0804df6fe25a0b50f1ed06549537d5cc80b7d78d5d716e405f3a2586c1965c770f2e016c3770cc051b317d1c24e48b939fd105da2fe9d3bee95a19c968d65f1bd9f4c0389c940d5f8ed18d58c1ca352cf1632faecb820f34f52b08a8fad7182c7367d1aa8c9563bd804ee48ef4d6b5bf83fc94046073fccf",
        },
      };
      const request = await fetch(
        "http://localhost:1337/api/banners?populate=*",
        reqOptions
      );
      const response = await request.json();
      setBanner(response);
      console.log("banners after setting", banner);
      return response;
    };
    try {
      const banners = fetchBanner();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // committee members
  const [member, setmember] = useState({
    data: [
      {
        attributes: {
          title: "loading",
          image: {
            data: {
              attributes: {
                formats: {
                  small: {
                    url: "https://media.tenor.com/TVfAxrSTjEgAAAAM/loading-buffer.gif",
                  },
                },
              },
            },
          },
        },
      },
      {
        attributes: {
          title: "loading",
          image: {
            data: {
              attributes: {
                formats: {
                  small: {
                    url: "https://media.tenor.com/TVfAxrSTjEgAAAAM/loading-buffer.gif",
                  },
                },
              },
            },
          },
        },
      },
      {
        attributes: {
          title: "loading",
          image: {
            data: {
              attributes: {
                formats: {
                  small: {
                    url: "https://media.tenor.com/TVfAxrSTjEgAAAAM/loading-buffer.gif",
                  },
                },
              },
            },
          },
        },
      },
    ],
  });

  // const blogs = useContext(Context);
  // console.log("blog at home",blogs);

  useEffect(() => {
    const fetchmember = async () => {
      const reqOptions = {
        Headers: {
          Authorization:
            "4097452d319c351f0804df6fe25a0b50f1ed06549537d5cc80b7d78d5d716e405f3a2586c1965c770f2e016c3770cc051b317d1c24e48b939fd105da2fe9d3bee95a19c968d65f1bd9f4c0389c940d5f8ed18d58c1ca352cf1632faecb820f34f52b08a8fad7182c7367d1aa8c9563bd804ee48ef4d6b5bf83fc94046073fccf",
        },
      };
      const request = await fetch(
        "http://localhost:1337/api/committees?populate=*",
        reqOptions
      );
      const response = await request.json();
      setmember(response);
      console.log("members after setting", member);
      return response;
    };
    try {
      const members = fetchmember();
    } catch (err) {
      console.log(err);
    }
  }, []);
  //  intraRegistrations
  const [intraRegistration, setintraRegistration] = useState({
    data: [
      {
        id: 1,
        attributes: {
          competitionName: "IUT_CS WEB_WIZZ",
          date: "2023-09-30T01:00:00.000Z",
          googleFormLink:
            '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScOKFaIasAYtzd8UPSZV9JD-QDGCSAA3R2fwORfwbd3TLNFzw/viewform?embedded=true" width="640" height="1908" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>',
          description:
            '# IUT_CS WEB_WIZZ: Unleash Your Web Development Prowess!\n\nGet ready for an exhilarating web development challenge like no other! 🌐✨\n\n## Event Details\n- **Date:** November 10-12, 2023\n- **Location:** Virtual\n- **Theme:** "Crafting the Future Web"\n\n## About the Event\nIUT_CS WEB_WIZZ is your chance to showcase your web development skills, push your creative boundaries, and create web solutions that shape the future. Whether you\'re a coding wizard, a design maestro, or a UX enthusiast, this event is tailored for you!\n\n## What to Expect\n- **Challenges:** We\'ll present a variety of web development challenges that align with our "Crafting the Future Web" theme. Choose the one that ignites your passion!\n- **Teamwork:** Form teams of up to 3 members or participate solo. Collaborate with fellow developers and designers to bring your vision to life.\n- **Guidance:** Expert mentors will be available to provide guidance and help you overcome any hurdles.\n- **Prizes:** Win exciting prizes, including cash rewards, web development tools, and recognition for your innovative solutions.\n- **Networking:** Connect with industry experts and fellow participants to expand your professional network.\n- **Learning:** Attend workshops and tech talks to enhance your web development skills.\n\n## How to Participate\n1. Register for the event [here](https://iutcs-webwizz.com/register).\n2. Join our Discord community for updates, team formation, and discussions.\n3. Keep an eye out for challenge announcements and detailed rules.\n\n## Schedule\n- **Day 1 (Nov 10):** Grand opening, challenge reveal, and team formation.\n- **Day 2 (Nov 11):** Hacking, mentorship sessions, and skill-building workshops.\n- **Day 3 (Nov 12):** Project submission, judging, and the dazzling closing ceremony.\n\n## Judging Criteria\n- **Innovation:** How creatively and uniquely have you approached the challenges?\n- **Functionality:** Does your web solution work seamlessly and efficiently?\n- **Design:** How visually appealing and user-friendly is your web application?\n- **Presentation:** Can you effectively present and explain your project?\n\n## Prerequisites\n- Bring your own development environment, tools, and creativity.\n- A passion for web development and a hunger for innovation!\n\nJoin us for an exciting weekend of coding, collaboration, and creativity. Let\'s craft the future of the web together!\n\nSee you at IUT_CS WEB_WIZZ! 👩‍💻👨‍💻',
          registrationDeadline: "2023-09-26",
          Catagory: "Quiz",
        },
      },
    ],
  });

  // const blogs = useContext(Context);
  // console.log("blog at home",blogs);

  useEffect(() => {
    const fetchintraRegistration = async () => {
      const reqOptions = {
        Headers: {
          Authorization:
            "4097452d319c351f0804df6fe25a0b50f1ed06549537d5cc80b7d78d5d716e405f3a2586c1965c770f2e016c3770cc051b317d1c24e48b939fd105da2fe9d3bee95a19c968d65f1bd9f4c0389c940d5f8ed18d58c1ca352cf1632faecb820f34f52b08a8fad7182c7367d1aa8c9563bd804ee48ef4d6b5bf83fc94046073fccf",
        },
      };
      const request = await fetch(
        "http://localhost:1337/api/intra-university-registrations?populate=*",
        reqOptions
      );
      const response = await request.json();
      setintraRegistration(response);
      console.log("intraRegistrations after setting", intraRegistration);
      return response;
    };
    try {
      const intraRegistrations = fetchintraRegistration();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // inter iut registration

  const [interRegistration, setinterRegistration] = useState({
    data: [
      {
        id: 1,
        attributes: {
          competitionDate: "2023-09-30T01:00:00.000Z",
          registrationDeadline: "2023-09-25",
          description:
            'ing challengebout t👩‍💻👨‍💻',
          category: "Hackathon",
        },
      },
    ],
  });

  // const blogs = useContext(Context);
  // console.log("blog at home",blogs);

  useEffect(() => {
    const fetchinterRegistration = async () => {
      const reqOptions = {
        Headers: {
          Authorization:
            "4097452d319c351f0804df6fe25a0b50f1ed06549537d5cc80b7d78d5d716e405f3a2586c1965c770f2e016c3770cc051b317d1c24e48b939fd105da2fe9d3bee95a19c968d65f1bd9f4c0389c940d5f8ed18d58c1ca352cf1632faecb820f34f52b08a8fad7182c7367d1aa8c9563bd804ee48ef4d6b5bf83fc94046073fccf",
        },
      };
      const request = await fetch(
        "http://localhost:1337/api/inter-university-registrations?populate=*",
        reqOptions
      );
      const response = await request.json();
      setinterRegistration(response);
      console.log("interRegistrations after setting", interRegistration);
      return response;
    };
    try {
      const interRegistrations = fetchinterRegistration();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Context.Provider
      value={[
        banner,
        BLOG,
        activities,
        achievements,
        member,
        intraRegistration,
        interRegistration,
      ]}
    >
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Blog" element={<Blog />} />
            {/* <Route path="/About" element={<About />} /> */}
            <Route path="/Achievements" element={<Achievements />} />
            <Route path="/Activities" element={<Activities />} />

            <Route path="/Committee" element={<Committee />} />

            <Route path="/Contact" element={<Contact />} />
            <Route path="/LeaderBoard" element={<LeaderBoard />} />
            <Route path="/RegisterGlobal" element={<RegisterGlobal />} />
            <Route path="/RegisterIUT" element={<RegisterIUT />} />
            <Route path="/SinglePage/:id" element={<SinglePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
