import React from "react";
import { allProjects } from "@/utils/works";
import MainPage from "@/components/WorkDetail/MainPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function WorkDetail({
  params,
}: {
  readonly params: { readonly title: string };
}) {
  const title: string[] = [];

  // Input => params: { title: 'oracle%20music' }; expected output => 'Oracle Music'
  params.title.split("%20").forEach((char) => {
    // converts lowercase to capitalized form
    title.push(char.charAt(0).toUpperCase() + char.slice(1));
  });

  // Find index where project title matches with the array outputs after
  // array is converted to string using 'join'
  let index = allProjects.findIndex((item) => item.title === title.join(" "));

  return (
    <div className="px-[6vw]">
      <Navbar />
      <main>
        <MainPage project={allProjects[index]} index={index} />
      </main>
      <Footer />
    </div>
  );
}

export default WorkDetail;
