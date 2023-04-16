import React from "react";
import "../styles.css";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white content "
      //   style={{ paddingTop: "20rem" }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          As a full stack developer, my primary focus is on creating innovative
          solutions that meet the unique needs of clients. I'm passionate about
          building web applications from the ground up, using a wide range of
          technologies and frameworks to create elegant, efficient code. Feel
          free to connect with on Linkedin . I'm open to Job opportunities where
          I can contribute, learn and grow.
        </p>

        <br />

        <p className="text-xl">
          I bring a unique combination of technical expertise, creative
          problem-solving skills, and a strong commitment to collaboration that
          sets me apart from other developers. I specialize in creating dynamic,
          responsive interfaces that are both user-friendly and visually
          appealing. Whether it's a complex e-commerce platform or a simple
          landing page, I have the skills and expertise to turn your vision into
          a reality.I'm passionate about what I do and I'm always looking for
          new challenges. My technical skills include a range of languages such
          as JavaScript, TypeScript, HTML and CSS. I also have experience
          working with various frameworks such as React, Express, Bootstrap and
          Redux. Additionally, I have experience with database management using
          SQL(postgreSQL) and NoSQL databases like MongoDB. From initial concept
          to final deployment, I work tirelessly to ensure that your web
          application is of the highest quality, meeting your exact
          specifications and delivering the results you need.
        </p>
      </div>
    </div>
  );
};

export default About;
