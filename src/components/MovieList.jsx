import React, { useState } from "react";
import ImgTemp from "../assets/temp-1.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "react-modal";
import YouTube from "react-youtube";
import { fetchMovieTrailer } from "../api/apiServices";

const MovieList = ({ title, data }) => {
  console.log(data);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  /* Responsive from carousel lib */
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  /* configs for react youtube video */
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  /* handle trailer when click to item*/
  const handleTrailer = async (id) => {
    fetchMovieTrailer(id)
      .then((res) => {
        setTrailerKey(res.results[0].key);
        setModalIsOpen(true);
      })
      .catch((err) => console.log(err));
  };

  /* render item films  */
  const renderItem = (data) => {
    return data.map((item) => (
      <div
        key={item.id}
        onClick={() => handleTrailer(item.id)}
        className="w-[200px] h-[300px] relative group"
      >
        {/* mask item */}
        <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer text-white/80">
          <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
          <img
            src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {/* name film */}
          <div className="absolute bottom-4 left-4 overflow-hidden">
            <p className="uppercase text-md text-white/100">
              {item.title || item.original_title}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="text-white p-10 mb-10">
      {/* title */}
      <h2 className="uppercase text-xl my-4">{title}</h2>
      {/* list film */}
      <Carousel responsive={responsive} className="items-center space-x-4">
        {/* item film */}
        {data && renderItem(data)}
      </Carousel>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            background: "black",
            padding: "0",
          },
        }}
        contentLabel="Example Modal"
      >
        <YouTube videoId={trailerKey} opts={opts} />;
      </Modal>
    </div>
  );
};

export default MovieList;
