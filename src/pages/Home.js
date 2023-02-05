import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

import "./home.css";

function Home() {
  return (
    <>
      <div className="home-overlay"></div>
      <div className="Home">
        <h1 className="welcome-text">Welcome to Snack A Log</h1>
        <Carousel style={{ boxShadow: "1px 2px 9px #999999" }}>
          <Carousel.Item>
            <img
              style={{ width: "680px" }}
              className="d-block"
              src="https://assets.sweat.com/shopify_articles/images/000/002/694/original/EasyHealthySnacks_en65ab5213130c9862172ac11435f055d965ab5213130c9862172ac11435f055d9.jpg?1579654696"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 style={{ color: "#292b2c" }}>Search for Healthy Snacks!</h3>
              <p style={{ color: "#292b2c" }}>
                See in real time how healthy or unhealthy your snacks are.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "680px" }}
              className="d-block"
              src="https://skinnyms.com/wp-content/uploads/2013/08/Snack-Pretzel-Stack-Snack-Recipe-2-1200x799.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 style={{ color: "#292b2c" }}>Keep track of your habits!</h3>
              <p style={{ color: "#292b2c" }}>
                Snack-a-log will help you log your hidden calories.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br></br>
        <Link to="/snacks">
          <button className="button button-secondary">Get Started</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
