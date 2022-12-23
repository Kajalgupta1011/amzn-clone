import React from "react";
import "./Home.css";
import Product from "./Product";
import Banner1 from "../../BannerImages/Banner1.jpg";
import Banner2 from "../../BannerImages/Banner2.jpg";
import Banner3 from "../../BannerImages/Banner3.jpg";
import Banner4 from "../../BannerImages/Banner4.jpg";
import Banner5 from "../../BannerImages/Banner5.jpg";
import Banner6 from "../../BannerImages/Banner6.jpg";
import Slider from "../Slider/Slider"
function Home() {
  const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];
  return (
    <div className="home">
      <div className="home__container">
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}
        <Slider images={bannerImages} />
          

        <div className="home__row">
          <Product
            id="12321341"
            title="I Can Make You Rich by Paul McKenna and Richard Branson"
            price={500}
            image="https://m.media-amazon.com/images/I/71GuoM0q2NL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="75879863"
            title="2022 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (5th Generation)"
            price={299}
            image="https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_UY218_.jpg"
            rating={3}
          />
          <Product
            id="49538094"
            title="KitchenAid KSM150PSAQ Artisan Series 5-Qt. Stand Mixer with Pouring Shield - Aqua Sky"
            price={399}
            image="https://m.media-amazon.com/images/I/71DAYttsoPL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="54419823"
            title="Apple Watch Series 3 (GPS, 38MM) - Silver Aluminum Case with White Sport Band (Renewed)"
            price={159}
            image="https://m.media-amazon.com/images/I/71UJtA8cFJL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="41098920"
            title="JBL Charge 4 Waterproof Wireless Bluetooth Speaker Bundle with Portable Hard Case - Blue"
            price={118}
            image="https://m.media-amazon.com/images/I/81IoRGCyfgL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="75879863"
            title="2022 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (5th Generation)"
            price={299}
            image="https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_UY218_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="53641287"
            title="Samsung Odyssey 49-in Gaming G9 Computer Monitor LC49G97TSSNXDC"
            price={1099}
            image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
