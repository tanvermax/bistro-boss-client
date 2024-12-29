import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1  from './../assets/home/banner.jpg'
import banner2  from './../assets/menu/banner3.jpg'
import banner3  from './../assets/home/featured.jpg'

const Banner = () => {
    return (
        <div>
             <Carousel>
                <div>
                    <img src={banner1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={banner2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={banner3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;