import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function Home() {
  return (
    <div className=" bg-slate-300">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
