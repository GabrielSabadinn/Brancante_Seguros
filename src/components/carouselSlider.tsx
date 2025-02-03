import { useState } from "react";
import "../styles/cardCarouselStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ADS } from "../utils/ads";
import { register } from "swiper/element/bundle";

register();

import "swiper/swiper-bundle.css";
import AdCardModal from "./adCardModal";

const CarouselSlider = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [index, setIndex] = useState(0);

  function handleOpenModal(id: number) {
    setIndex(id);
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      <div className="card-slider">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {ADS.map((ad, index) => (
            <SwiperSlide key={index}>
              <div className="card-container">
                <div
                  className="ad-card-content"
                  onClick={() => handleOpenModal(index)}
                >
                  <div className="ad-card-left">
                    <h2 className="ad-card-title">{ad.title}</h2>
                    <p className="ad-card-description">{ad.description}</p>
                  </div>
                  <img
                    className="ad-card-image"
                    src={ad.imageSource}
                    alt={ad.title}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <AdCardModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        title={ADS[index].title}
        description={ADS[index].description}
        imageSrc={ADS[index].imageSource}
        hasWhatsAppButton={ADS[index].hasWhatsAppButton}
      />
    </>
  );
};

export default CarouselSlider;
