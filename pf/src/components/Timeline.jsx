import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles.css";
import { MdOutlineWork, MdSchool, MdHome, MdWork } from "react-icons/md";
const Timeline = () => {
  return (
    <div
      name="timeline"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen time"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Timeline
          </p>
        </div>
        <div className="pt-5 w-full ">
          <VerticalTimeline>
              <VerticalTimelineElement
              className="vertical-timeline-element--work text-gray-500"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2023 Jun - 2025 Oct"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<MdOutlineWork />}
            >
              <h3 className="vertical-timeline-element-title font-bold">
                Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                SCHIFFL IT Service GmbH
              </h4>
              <p>
              Developed full-stack web applications using TypeScript, React & PHP Symfony.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work text-gray-500"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2022 Nov - 2023 May"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title font-bold">
                Web Development BootCamp
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                EPICODE GLOBAL
              </h4>
              <p>
                Frontend Development using react, redux, bootstrap, html, css
                and Backend Development using node.js, mongo, express.js
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022 March - 2022 August"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<MdOutlineWork />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-black">
                Operations Associate
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-black">
                GORILLAS
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 Nov- 2022 March"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-black">
                German integration course
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-black">
                B1 level
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2020 July-2021 Jan"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title text-black font-bold">
                Customer Success Expert
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-black">
                BYJU'S App
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--educ text-gray-500ation"
              date="2019-2020"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-black">
                Web Developer - Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-black">
                ABASOFT
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education "
              date="2015 - 2019"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-black">
                Bachelor of Technology in Computer Science and Engineering
              </h3>

              <p className="text-black">
                Graduated in Computer Science and Engineering from Federal
                Institute of Science And Technology.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{
                background: "rgb(16, 204, 82) ",
                color: "#fff",
              }}
              icon={<MdHome />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};
export default Timeline;
