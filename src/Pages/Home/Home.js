import React from "react";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";
import EasyScheduling from "./Component/EasyScheduling";
import LeftContent from "./Component/EasyScheduling";
import SimplifiedSchedule from "./Component/SimplifiedScheduling";
const Home = () => {
  return (
    <>
      <Nav />
      <h1>Test1</h1>
      <EasyScheduling />
      <SimplifiedSchedule />
      <Footer />
    </>
  );
};
export default Home;
