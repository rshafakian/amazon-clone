import React from 'react'
import "../styles/Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/OTC/00-Hero_gw-desktop_01_1x._CB430741129_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
          price={949}
          rating={5}
          image="https://m.media-amazon.com/images/I/71k3fJh5EwL._AC_UY218_.jpg"
        />
        <Product
          id="2"
          title="DEWALT Sliding Compound Miter Saw, 12-Inch (DWS779)"
          price={369}
          rating={5}
          image="https://m.media-amazon.com/images/I/71TPrh4okNL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Samsung QN82Q60RAFXZA Flat 82-Inch QLED 4K Q60 Series (2019) Ultra HD Smart TV with HDR and Alexa Compatibility"
          price={1698.29}
          rating={4}
          image="https://m.media-amazon.com/images/I/91uohwV+k3L._AC_UY218_.jpg"
        />
        <Product
          id="4"
          title="eKids Frozen 2 Bluetooth Portable MP3 Karaoke Machine Player with Light Show Store Hours of Music with Built in Memory Sing Along Using The Real..."
          price={49.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81W1msWOaiL._AC_UL320_.jpg"
        />
        <Product
          id="5"
          title="Townley Girl Disney Frozen 2 Super Sparkly Cosmetic Set with Lip Gloss, Nail Polish and Nail Stickers - 11 Pack"
          price={11.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81kSl-rntqL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Samsung 34-Inch SJ55W Ultrawide Gaming Monitor (LS34J550WQNXZA) – 75Hz Refresh, WQHD Computer Monitor, 3440 x 1440p Resolution, 4ms Response, FreeSync, Split Screen, HDMI, Black"
          price={389.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/91g-Y1B09EL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home
