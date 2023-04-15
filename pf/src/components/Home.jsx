import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { Link } from "react-scroll";

const Home = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/hena-asslam/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/HenaAslam/",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:henaaslam111@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <FaInstagram size={30} />
        </>
      ),
      href: "https://instagram.com/henomnom?igshid=YjNmNGQ3MDY=",
    },
    {
      id: 5,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Resume_Asslam..pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Hey, I'm Hena
          </h2>
          <p
            className=" text-gray-500
    py-4 max-w-md"
          >
            A full stack developer based in Germany. My passion is building
            simple, easy-to-use, user-friendly websites.I love to work on web
            application using technologies like React, Express JS, MongoDB and
            Node JS. Check out my projects!
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-gray-500 cursor-pointer">
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
          <div className="flex text-white lg:hidden  my-2">
            {links.map((link) => (
              <div
                key={link.id}
                className="bg-gray-500 mx-1 p-2 cursor-pointer rounded"
              >
                <a
                  href={link.href}
                  className="flex justify-between items-center w-full text-white"
                  download={link.download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  {link.child}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
