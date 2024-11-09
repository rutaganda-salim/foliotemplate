import React from "react";
import { spectralBridgeRegular, satoshiLight } from "@/fonts/font";
import Image from "next/image";
import AboutMain from "../../../public/images/general/about/aboutMain.jpg";
import AboutIntro1 from "../../../public/images/general/about/aboutIntro1.jpg";
import AboutIntro2 from "../../../public/images/general/about/aboutIntro2.jpg";
import AboutOutro1 from "../../../public/images/general/about/aboutOutro1.jpg";
import AboutOutro2 from "../../../public/images/general/about/aboutOutro2.jpg";
import Paragraph from "../Paragraph";
import { items } from "@/utils/resume";
import MainButton from "../MainButton";

function MainPage() {
  return (
    <>
      <section>
        <div className="flex justify-center mt-[8vh]">
          <div className="w-[75%] sm:w-[70%] lg:w-[65%] flex justify-center items-center flex-col">
            <h1 className={`${spectralBridgeRegular.className} dark:mix-blend-exclusion z-[10] text-[10vw] sm:text-[8vw] lg:text-[6.5vw] mb-[-6vh] text-center leading-[.9]`}>
              Cum sociis natoque penatibus et magnis
            </h1>
            <div className="sm:w-[80%] lg:w-[60%] object-cover">
              <Image
                src={AboutMain}
                alt=""
                className="w-full h-full"
                placeholder="blur"
              />
            </div>
            <div className="sm:w-[65%] lg:w-[50%] mt-8">
              <Paragraph
                text="Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum."
                className="text-center"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT ME SUMMARY */}
      <section className="mt-[8vh] pt-[6vh] border-t-[1px] border-t-lightText20 dark:border-t-darkText20">
        <div className="flex flex-col md:flex-row gap-x-[8vw] gap-y-6">
          <p className={`${satoshiLight.className} text-[14px] md:text-[18px]`}>
            About me
          </p>
          <div className="flex-1">
            <h3
              className={`${spectralBridgeRegular.className} indent-[10%] text-[5.5vw] leading-[1]`}
            >
              Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
              libero venenatis faucibus. <span className="italic">Nullam</span>{" "}
              quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
              leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
              magna.
            </h3>
          </div>
        </div>
      </section>
      {/* PORTRAIT IMAGES WITH DETAILED PARAGRAPHS */}
      <section className="mt-[5vh]">
        <div className="flex flex-col md:flex-row items-end gap-6 md:pl-[8vw]">
          <div className="flex-1 object-cover">
            <Image
              src={AboutIntro1}
              alt=""
              className="w-full h-full"
              placeholder="blur"
            />
          </div>
          <div className="flex-[1.5]">
            <div className="w-full object-cover">
              <Image
                src={AboutIntro2}
                alt=""
                className="w-full h-full"
                placeholder="blur"
              />
            </div>
            <div className="mt-[4vh]">
              <h2
                className={`${spectralBridgeRegular.className} text-[10vw] md:text-[7vw] leading-[.9] uppercase`}
              >
                Persistence
              </h2>
              <h2
                className={`${spectralBridgeRegular.className} text-[10vw] md:text-[7vw] leading-[.9] uppercase`}
              >
                & Motivation
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-[5vw] mt-8 md:mt-[8vh] pr-0 pl-[8vw] md:pr-[6vw] md:pl-0">
          <div className="flex-1 hidden md:block"></div>
          <div className="flex-1">
            <div>
              <Paragraph text="Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum." />
            </div>
            <div className="mt-6">
              <Paragraph text="Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum." />
            </div>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <div>
              <Paragraph text="Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum." />
            </div>
            <div className="mt-6">
              <Paragraph text="Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum." />
            </div>
          </div>
        </div>
      </section>
      {/* RESUME SUMMARY */}
      <section className="mt-[6vh] border-b-[1px] border-b-lightText20 dark:border-b-darkText20 md:border-none">
        {items.map((item, l) => {
          return (
            <div
              className="flex flex-col md:flex-row gap-5 border-t-[1px] border-t-lightText20 dark:border-t-darkText20 md:border-none"
              key={item.category}
            >
              <div className="flex-1 py-5">
                <Paragraph text={item.category} />
              </div>
              <div
                className={`flex-[3] md:border-t-[1px] md:border-t-lightText20 md:dark:border-t-darkText20 ${
                  l === items.length - 1 &&
                  "md:border-b-[1px] md:border-b-lightText20 md:dark:border-b-darkText20"
                } md:px-3 py-5`}
              >
                {item.list.map((list, i) => {
                  return (
                    <div
                      key={list.institution}
                      className={`${
                        i !== item.list.length - 1 ? "mb-8" : "mb-0"
                      } flex items-start justify-between gap-8`}
                    >
                      <div>
                        <p className="text-[16px] md:text-[18px]">
                          {list.institution},{" "}
                          <span className="italic">{list.location}</span>
                        </p>
                        <div>
                          <p className="text-[12px] md:text-[13.5px]">
                            {list.role
                              ? list.role
                              : `${list.primary_qualification}, ${list.primary_concentration}`}
                          </p>
                          {list.secondary_concentration ? (
                            <p className="text-[12px] md:text-[13.5px]">{`${list.secondary_qualification}, ${list.secondary_concentration}`}</p>
                          ) : null}
                        </div>
                      </div>
                      <p className="text-[13px] md:text-[16px]">
                        {list.duration}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="flex justify-end mt-8">
          <div>
            <MainButton text="View Full Resume" />
          </div>
        </div>
      </section>
      {/* SAMPLE MOCKUP IMAGES OF MY PAST WORKS */}
      <section className="mt-[8vh]">
        <div className="flex items-start gap-3 pl-[20vw]">
          <div className="flex-1 object-cover mt-16">
            <Image
              src={AboutOutro1}
              alt=""
              className="w-full h-full"
              placeholder="blur"
            />
          </div>
          <div className="flex-1 object-cover">
            <Image
              src={AboutOutro2}
              alt=""
              className="w-full h-full"
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      {/* CLOSING PARAGRAPH WITH SPOTIFY PLAYLIST */}
      <section className="my-[4vh] md:my-[8vh]">
        <h3
          className={`${spectralBridgeRegular.className} indent-[10%] text-[5.5vw] leading-[1]`}
        >
          Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
          Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
          fringilla mauris sit amet nibh. Donec sodales sagittis magna.
        </h3>
        <div className="flex mt-10">
          <div className="flex-1 hidden md:block"></div>
          <div className="flex-[2]">
            <iframe
              title="John Mitchell's Playlist"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/34nezoDEAzvnCSREPqaurN?utm_source=generator"
              width="100%"
              height="152"
              // frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;
