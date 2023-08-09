import React from "react";
import NewCourses from "./NewCourses";
import axios from "axios";
import { useEffect, useState } from "react";

const AllCourses = () => {
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
    <>
      <NewCourses courses={courses} title={"Barcha"} />
    </>
  );
};

export default AllCourses;
