import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Image } from "semantic-ui-react";
import BannerA from "./../img/banner01re.jpg";
import BannerB from "./../img/banner02r.jpg";
import BannerC from "./../img/banner03.jpg";

export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel autoPlay infiniteLoop>
        <div>
          <Image src={BannerA} />
        </div>
        <div>
          <Image src={BannerB} />
        </div>
        <div>
          <Image src={BannerC} />
        </div>
      </Carousel>
    );
  }
}
