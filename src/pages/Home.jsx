import Contact from "../components/Contact";
import Hero from "../components/Hero";
import NewCourses from "../components/NewCourses";
import PopularCourses from "../components/PopularCourses";
import Road from "../components/Road";
import Services from "../components/Services";
import Main from "../layout/Main";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getAllCourses = async () => {
      const res = await axios.get("http://localhost:8000/api/all-courses");
      setCourses(res.data.courses);
    };
    getAllCourses();
    console.log(courses);
  }, []);

  return (
    <Main>
      <Hero />
      <Road />
      <NewCourses title={"Yangi"} courses={courses.reverse().slice(0, 3)} />
      <PopularCourses courses={courses.reverse().slice(0, 4)} />
      <Services />
      <Contact />
    </Main>
  );
};

export default Home;
