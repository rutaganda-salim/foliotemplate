"use client";
import React, { useState } from "react";
import { spectralBridgeRegular } from "@/fonts/font";
import { motion, easeInOut } from "framer-motion";
import MainButton from "../MainButton";
import Paragraph from "../Paragraph";
import Loading from "../Loading";

function MainPage() {
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const EASING = [0.83, 0, 0.17, 1];

  const rise = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: EASING,
        delay: 0.5,
      },
    },
  };

  const scale = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: easeInOut,
        delay: 0.7,
      },
    },
  };

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easeInOut,
        delay: 0.7,
      },
    },
  };

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    const emailRegex =
      /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;

    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("user_message");

    if (!name || !email || !message) {
      setError("No entries can be left empty");

      setTimeout(function () {
        setError("");
      }, 5000);
    } else if (!RegExp(emailRegex).exec(email.toString())) {
      setError("Invalid email format");

      setTimeout(function () {
        setError("");
      }, 5000);
    } else {
      setLoading(true);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          setError(`Failed to send message.`);

          setTimeout(function () {
            setError("");
          }, 5000);
        }

        await response.json();

        setSuccess("Message sent successfully!");

        setTimeout(function () {
          setSuccess("");
        }, 5000);

        setValues({
          user_name: "",
          user_email: "",
          user_message: "",
        });
      } catch (err: any) {
        setError(err.message);

        setTimeout(function () {
          setError("");
        }, 5000);
      }

      setLoading(false);
    }
  }

  return (
    <div>
      <section className="my-[8vh]">
        <div className="sm:w-[75%] md:w-[60%] mx-auto">
          <div className="overflow-hidden">
            <motion.h1
              variants={rise}
              initial="initial"
              animate="animate"
              className={`${spectralBridgeRegular.className} leading-[1] uppercase text-center text-[20vw] sm:text-[12vw]`}
            >
              Let&apos;s <span className="italic lowercase">get</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={rise}
              initial="initial"
              animate="animate"
              className={`${spectralBridgeRegular.className} leading-[1] uppercase text-center text-[20vw] sm:text-[12vw]`}
            >
              <span className="italic lowercase">in</span> touch
            </motion.h1>
          </div>
          <div className="flex justify-end">
            <motion.div variants={appear} initial="initial" animate="animate" className="w-[70%] sm:w-[60%] md:w-[55%]">
              <Paragraph text="Ready to bring your vision to life? Simply fill out the form, and let&apos;s start turning your ideas into reality. Or if you&apos;re reaching out to offer a new opportunity, feel free to message me—let&apos;s connect today!" />
            </motion.div>
          </div>
          <div className="mt-14">
            <form onSubmit={handleSubmit} className="">
              <div className="flex flex-col xs:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-y-2">
                  <motion.label
                    variants={appear}
                    initial="initial"
                    animate="animate"
                    className="text-[14px]"
                    htmlFor="name"
                  >
                    Name *
                  </motion.label>
                  <motion.input
                    variants={scale}
                    initial="initial"
                    animate="animate"
                    className="py-2 px-2 origin-left border-b-[1.5px] border-b-lightText dark:border-b-darkText outline-none bg-transparent"
                    id="name"
                    name="user_name"
                    type="text"
                    onChange={handleChange}
                    value={values.user_name}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-y-2">
                  <motion.label
                    variants={appear}
                    initial="initial"
                    animate="animate"
                    className="text-[14px]"
                    htmlFor="email"
                  >
                    Email *
                  </motion.label>
                  <motion.input
                    variants={scale}
                    initial="initial"
                    animate="animate"
                    className="py-2 px-2 origin-left border-b-[1.5px] border-b-lightText dark:border-b-darkText outline-none bg-transparent"
                    id="email"
                    name="user_email"
                    type="email"
                    onChange={handleChange}
                    value={values.user_email}
                  />
                </div>
              </div>
              <div className="mt-6">
                <div className="flex-1 flex flex-col gap-y-2">
                  <motion.label
                    variants={appear}
                    initial="initial"
                    animate="animate"
                    className="text-[14px]"
                    htmlFor="email"
                  >
                    Message *
                  </motion.label>
                  <motion.textarea
                    variants={scale}
                    initial="initial"
                    animate="animate"
                    className="py-2 px-2 origin-left border-b-[1.5px] border-b-lightText dark:border-b-darkText outline-none bg-transparent"
                    id="message"
                    name="user_message"
                    rows={3}
                    onChange={handleChange}
                    value={values.user_message}
                  ></motion.textarea>
                </div>
              </div>
              {error.length || success.length ? (
              <div className={` mt-2`}>
                <p className={`${error.length ? "text-red-500" : success.length ? "text-green-600" : "text-transparent"} text-[15px]`}>{error.length ? error : success}</p>
              </div>
            ) : null}
              <div className="mt-6">
                <motion.button
                  variants={appear}
                  initial="initial"
                  animate="animate"
                  type="submit"
                  className="group hover:bg-lightText hover:text-lightBg dark:hover:bg-darkText dark:hover:text-darkBg duration-300 text-[16px] 2xl:text-[26px] w-full sm:w-[45%] py-2 border-[1px] border-lightText dark:border-darkText rounded-full outline-none"
                >
                  {loading ? <Loading classNameSize="w-7 h-7"/> : "Submit"}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
