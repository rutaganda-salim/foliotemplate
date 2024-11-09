import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainPage from "@/components/NotFound/MainPage";

function NotFound() {

  return (
    <div className="px-[6vw]">
      <Navbar />
      <main>
        <MainPage/>
      </main>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}

export default NotFound;
