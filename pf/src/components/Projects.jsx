import React from "react";
import linkedin from "../assets/portfolio/linkedin.png";
import mediumclone from "../assets/portfolio/medium-clone.png";
// import onlinecourse from "../assets/portfolio/online-courses.png";
import quizapp from "../assets/portfolio/quiz-app.png";
import spotifyhome from "../assets/portfolio/spotify-home.png";
import spotify from "../assets/portfolio/spotify.png";
import weather from "../assets/portfolio/weather-app.png";
import portfolio from "../assets/portfolio/portfolio.png";
import linkedinhome from "../assets/portfolio/linkedinhome.png";
import netflix from "../assets/portfolio/netflix2.png";
import "../styles.css";
const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: linkedin,
      project: "LinkedIn Frontend",
      technologies: ["Typescript", "React", "Redux", "Bootstrap", "API"],
      link: "https://github.com/HenaAslam/fs-0522-build-week-3--LinkedIn",
    },
    {
      id: 2,
      src: linkedinhome,
      project: "LinkedIn Backend",
      technologies: [" ExpressJS", "MongoDB", "NodeJS", "API"],
      link: "https://github.com/HenaAslam/BW-4-LinkedIn-BE",
    },
    {
      id: 3,
      src: weather,
      project: "Weather App",
      technologies: ["React", "Bootstrap", "Redux", "API"],
      link: "https://github.com/HenaAslam/weather-app",
    },
    {
      id: 4,
      src: spotify,
      project: "Spotify (Javascript)",
      technologies: ["Javascript", "Bootstrap", "API"],
      link: "https://github.com/HenaAslam/Build-week2-spotify-app",
    },
    {
      id: 5,
      src: spotifyhome,
      project: "Spotify (React)",
      technologies: ["React", "Redux", "API", "Bootstrap"],
      link: "https://github.com/HenaAslam/spotify-react-redux",
    },
    {
      id: 6,
      src: quizapp,
      project: "Quiz App",
      technologies: ["HTML", "CSS", "Javascript"],
      link: "https://github.com/HenaAslam/Build-week-1",
    },
    {
      id: 7,
      src: mediumclone,
      project: "Medium Clone",
      technologies: ["HTML", "CSS", "Javascript"],
      link: "https://github.com/HenaAslam/medium-clone",
    },
    {
      id: 8,
      src: netflix,
      project: "Netflix",
      technologies: ["API", "CRUD", "Bootstrap", "Javascript"],
      link: "https://github.com/HenaAslam/netflix-js",
    },
    {
      id: 9,
      src: portfolio,
      project: "Portfolio",
      technologies: ["React", "Tailwind", "Javascript"],
      link: "https://github.com/HenaAslam/my-portfolio",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen port"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-2xl font-bold">Somethings I've built...</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, technologies, project, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div>
                <a href={link} target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <h6 className="flex justify-center items-center pt-3 pb-2 text-purple-500 text-xl font-bold">
                    {project}
                  </h6>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 font-mono text-white text-sm font-bold leading-6 mb-2 px-2 ">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className=" grid rounded-lg justify-items-center bg-purple-500 duration-200 hover:scale-105 "
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
