import FE_1 from "../assets/certificates/FE_1.jpg";
import FE_2 from "../assets/certificates/FE_2.jpg";
import FE_3 from "../assets/certificates/FE_3.jpg";
import FE_4 from "../assets/certificates/FE_4.jpg";
import FE_5 from "../assets/certificates/FE_5.jpg";
import FE_6 from "../assets/certificates/FE_6.jpg";
import FE_7 from "../assets/certificates/FE_7.jpg";
import FE_8 from "../assets/certificates/FE_8.jpg";
import FE_9 from "../assets/certificates/FE_9.jpg";
import BE_1 from "../assets/certificates/BE_1.jpg";
import BE_2 from "../assets/certificates/BE_2.jpg";
import BE_3 from "../assets/certificates/BE_3.jpg";
import BE_4 from "../assets/certificates/BE_4.jpg";
import BE_5 from "../assets/certificates/BE_5.jpg";
import BE_6 from "../assets/certificates/BE_6.jpg";
import degree from "../assets/certificates/Hena Degree certificate.jpg";
import { Dots } from "react-multi-carousel";

import cropped from "../assets/certificates/cropped.jpg";
import "../styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
const Certificates = () => {
  const [modalImgSrc, setModalImgSrc] = useState(null);

  const handleImgClick = (src) => {
    setModalImgSrc(src);
  };

  const closeModal = () => {
    setModalImgSrc(null);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const images = [
    {
      id: 0,

      url: cropped,
    },
    {
      id: 1,
      url: FE_1,
    },
    {
      id: 2,
      url: FE_2,
    },
    {
      id: 3,
      url: FE_3,
    },
    {
      id: 4,
      url: FE_4,
    },
    {
      id: 5,
      url: FE_5,
    },

    {
      id: 6,
      url: FE_6,
    },
    {
      id: 7,
      url: FE_7,
    },
    {
      id: 8,
      url: FE_8,
    },
    {
      id: 9,
      url: FE_9,
    },
    {
      id: 10,
      url: BE_1,
    },
    {
      id: 11,
      url: BE_2,
    },
    {
      id: 12,
      url: BE_3,
    },
    {
      id: 13,
      url: BE_4,
    },
    {
      id: 14,
      url: BE_5,
    },
    {
      id: 15,
      url: BE_6,
    },
  ];
  return (
    <div
      name="certificates"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white cert "
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Certificates
          </p>
        </div>
        <div className="pt-5">
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {images.map((image) => (
              <div key={image.id} className="carousel-item">
                {/* <a href={image.url} target="_blank" rel="noopener noreferrer"> */}{" "}
                <img
                  src={image.url}
                  alt={image.title}
                  onClick={() => handleImgClick(image.url)}
                  style={{ cursor: "pointer" }}
                />
                {/* </a> */}
              </div>
            ))}
          </Carousel>

          {modalImgSrc && (
            <div
              className="modal-background"
              onClick={closeModal}
              style={{ cursor: "pointer" }}
            >
              <div className="modal">
                {console.log(modalImgSrc)}
                {modalImgSrc ===
                "/static/media/cropped.219f1375a5aad97b77e6.jpg" ? (
                  <img src={degree} alt={modalImgSrc} />
                ) : (
                  <img src={modalImgSrc} alt={modalImgSrc} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
