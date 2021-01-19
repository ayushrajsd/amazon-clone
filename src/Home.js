import React from "react";
import Product from "./Product";

const Home = () => (
  <div className="home">
    <img className="home__image" src="../public/img/banner.jpg" alt="banner" />
    <div className="home__row">
      <Product
        id="az1"
        title="MacBook"
        image={
          "https://images-na.ssl-images-amazon.com/images/I/811AygnQ-TL._SL1500_.jpg"
        }
        price="83990"
        rating="5"
      />
      <Product
        id="az2"
        title="Apple New A^ Watch Series"
        image={
          "https://images-na.ssl-images-amazon.com/images/I/71dPGtxFLFL._SL1500_.jpg"
        }
        price="43000"
        rating="5"
      />
      <Product
        id="az22"
        title="Boat AirDopes"
        image={
          "https://images-na.ssl-images-amazon.com/images/I/61-1B-m03bL._SL1500_.jpg"
        }
        price="2499"
        rating="5"
      />
    </div>
    <div className="home__row">
      <Product
        id="az3"
        title="Echo Dot 4th Gen with Clock"
        image={
          "https://images-na.ssl-images-amazon.com/images/I/61uPrFKLYdL._SL1000_.jpg"
        }
        price="5499"
        rating="4"
      />
      <Product
        id="az4"
        title="As A Man Thinketh"
        image={
          "https://images-na.ssl-images-amazon.com/images/I/41HGktRdVPL._SX322_BO1,204,203,200_.jpg"
        }
        price="75"
        rating="5"
      />
      <Product
        id="az4"
        title="Groot Pot Infinity War"
        image={
          "https://images-na.ssl-images-amazon.com/images/I/511W25RBXFL.jpg"
        }
        price="490"
        rating="5"
      />
      <Product
        id="az44"
        title="Kadence Acoustic Series"
        image={
          "https://images-na.ssl-images-amazon.com/images/I/41hjwSYfdmL.jpg"
        }
        price="5299"
        rating="4"
      />
    </div>
    <div className="home__row">
      <Product
        id="az5"
        title="WildCraft Grey and Orange Rucksack"
        image={
          "https://images-na.ssl-images-amazon.com/images/I/91T4CGVR6eL._SL1500_.jpg"
        }
        price="1499"
        rating="5"
      />
      <Product
        id="az555"
        title="JBL In-Ear Deep Bass"
        image={
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
        }
        price="799"
        rating="5"
      />
      <Product
        id="az5555"
        title="iMac Pro(27-inch, 8GB RAM)"
        image={
          "https://images-na.ssl-images-amazon.com/images/I/71XyLsP7WjL._SL1500_.jpg"
        }
        price="169900"
        rating="4"
      />
    </div>
  </div>
);

export default Home;
