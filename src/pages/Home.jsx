import Hero from "../components/Hero";
import NewCourses from "../components/NewCourses";
import PopularCourses from "../components/PopularCourses";
import Road from "../components/Road";
import Services from "../components/Services";
import Main from "../layout/Main";

const Home = () => {
  return (
    <Main>
      <Hero />
      <Road />
      <NewCourses />
      <PopularCourses />
      <Services />
    </Main>
  );
};

export default Home;
