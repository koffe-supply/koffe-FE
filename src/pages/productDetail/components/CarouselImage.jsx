import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function CarouselImage() {
  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay={true}
        centerMode={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdg2M6jYd_VXOom72AZcp3t3YTcnEGDxSzmA&s" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdg2M6jYd_VXOom72AZcp3t3YTcnEGDxSzmA&s" />
        </div>
        {/* <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdg2M6jYd_VXOom72AZcp3t3YTcnEGDxSzmA&s" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdg2M6jYd_VXOom72AZcp3t3YTcnEGDxSzmA&s" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdg2M6jYd_VXOom72AZcp3t3YTcnEGDxSzmA&s" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdg2M6jYd_VXOom72AZcp3t3YTcnEGDxSzmA&s" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdg2M6jYd_VXOom72AZcp3t3YTcnEGDxSzmA&s" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdg2M6jYd_VXOom72AZcp3t3YTcnEGDxSzmA&s" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdg2M6jYd_VXOom72AZcp3t3YTcnEGDxSzmA&s" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdg2M6jYd_VXOom72AZcp3t3YTcnEGDxSzmA&s" />
        </div> */}
      </Carousel>
    </div>
  );
}
