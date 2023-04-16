import React from "react";
import linkedin from "../assets/portfolio/linkedin.png";
import mediumclone from "../assets/portfolio/medium-clone.png";
import onlinecourse from "../assets/portfolio/online-courses.png";
import quizapp from "../assets/portfolio/quiz-app.png";
import spotifyhome from "../assets/portfolio/spotify-home.png";
import spotify from "../assets/portfolio/spotify.png";
import weather from "../assets/portfolio/weather-app.png";
import installNode from "../assets/portfolio/installNode.jpg";
const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: linkedin,
    },
    {
      id: 2,
      src: linkedin,
    },
    {
      id: 3,
      src: linkedin,
    },
    {
      id: 4,
      src: linkedin,
    },
    {
      id: 5,
      src: linkedin,
    },
    {
      id: 6,
      src: linkedin,
    },
    {
      id: 7,
      src: linkedin,
    },
    {
      id: 8,
      src: linkedin,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-2xl font-bold">Somethings I've built...</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
