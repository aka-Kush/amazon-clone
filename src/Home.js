import React from 'react'
import "./Home.css";
import Product from './Product';

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className='home__image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="amazon-banner" />
            </div>
            <div className="home__row">
                <Product
                    title='The lean startup'
                    price={19.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    rating={3}
                />
                <Product
                    title='JBL Tune 225TWS True Wireless Earbud Headphones'
                    price={49.95}
                    image='https://m.media-amazon.com/images/I/71JLWGZmfBL._AC_SL1500_.jpg'
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product
                    title='AMD Ryzen 9 5900X 12-core, 24-Thread Unlocked Desktop Processor'
                    price={498.97}
                    image='https://m.media-amazon.com/images/I/616VM20+AzL._AC_SL1384_.jpg'
                    rating={5}
                />
                <Product
                    title="Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor "
                    price={23.95}
                    image='https://m.media-amazon.com/images/I/71RZiWPcj8L._AC_SL1500_.jpg'
                    rating={4}
                />
                <Product
                    title='Keychron K2 Wireless Bluetooth/USB Wired Gaming Mechanical Keyboard'
                    price={94.99}
                    image='https://m.media-amazon.com/images/I/614chmBNoqL._AC_SL1200_.jpg'
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
                    price={1,153.59}
                    image='https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg'
                    rating={5}
                />
            </div>
        </div>
    )
}

export default Home