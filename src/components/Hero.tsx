import Carousel from "react-bootstrap/Carousel";
import firstimg from "../assets/totoro019.jpg";
import secondimg from "../assets/chihiro014.jpg";
import thirdimg from "../assets/howl011.jpg";
import fourthimg from "../assets/mononoke023.jpg";
import fifthimg from "../assets/chihiro039.jpg";
import sixthimg from "../assets/ged003.jpg";
import seventhimg from "../assets/howl025.jpg";
import eighthimg from "../assets/baron026.jpg";
import ninthimg from "../assets/onyourmark003.jpg";
import tenthimg from "../assets/tanuki009.jpg";
import eleventhimg from "../assets/omoide036.jpg";


function Hero() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 hero-image" src={firstimg} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 hero-image" src={secondimg} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 hero-image" src={thirdimg} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 hero-image" src={fourthimg} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 hero-image" src={fifthimg} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 hero-image" src={sixthimg} alt="Third slide" />
        </Carousel.Item>

         <Carousel.Item>
          <img className="d-block w-100 hero-image" src={seventhimg} alt="Third slide" />
        </Carousel.Item>

         <Carousel.Item>
          <img className="d-block w-100 hero-image" src={eighthimg} alt="Third slide" />
        </Carousel.Item>

         <Carousel.Item>
          <img className="d-block w-100 hero-image" src={ninthimg} alt="Third slide" />
        </Carousel.Item>

         <Carousel.Item>
          <img className="d-block w-100 hero-image" src={tenthimg} alt="Third slide" />
        </Carousel.Item>

         <Carousel.Item>
          <img className="d-block w-100 hero-image" src={eleventhimg} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Hero;