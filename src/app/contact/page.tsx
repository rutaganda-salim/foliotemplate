import MainPage from "@/components/Contact/MainPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function Contact() {
  return (
    <div className="px-[6vw]">
      <Navbar />
      <main>
        <MainPage />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
