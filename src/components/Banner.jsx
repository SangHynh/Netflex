import React from "react";
import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";
/* Banner là 1 component tĩnh */

const Banner = () => {
  return (
    /* container */
    <div className="w-full h-[90vh] bg-banner bg-center bg-no-repeat bg-cover relative">
      {/* mask */}
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-60" />
      {/* content */}
      <div className="w-full h-full flex items-center justify-center space-x-8 p-4 relative z-10">
        {/* left */}
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          {/* movie genres */}
          <p className="text-white bg-gradient-to-r from-blue-500 to-blue-300 py-1 px-3 text-xl">
            Phim truyền hình
          </p>
          {/* ratings */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-3xl">Nghe nói em thích tôi</h2>
            <div className="flex items-center gap-4">
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
            </div>
            <p className="text-white">
              Giữa nhịp sống hối hả, hai trái tim cô đơn tình cờ gặp gỡ và tìm
              thấy nhau. Bộ phim cuốn hút người xem bằng những khung cảnh tuyệt
              đẹp, diễn xuất tinh tế, và những khoảnh khắc chân thực, lãng mạn.
              "Nghe Nói Em Thích Tôi" sẽ dẫn dắt bạn qua những cung bậc cảm xúc
              từ ngọt ngào đến xúc động, để rồi cuối cùng cảm nhận sự kỳ diệu
              của tình yêu đích thực.
            </p>
          </div>
          {/* buttons */}
          <div className="gap-4 flex">
            <button className="p-3 text-white bg-black font-bold text-sm opacity-80">
              Chi tiết
            </button>
            <button className="p-3 text-white bg-blue-600 font-bold text-sm opacity-80">
              Xem phim
            </button>
          </div>
        </div>
        {/* right */}
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative group cursor-pointer">
            <img
              src={ImgTemp}
              alt="temp"
              className="w-full h-full object-cover "
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center opacity-0 backdrop-blur-sm group-hover:opacity-100 transition-opacity duration-700">
                <img src={IconPlay} alt="play" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
