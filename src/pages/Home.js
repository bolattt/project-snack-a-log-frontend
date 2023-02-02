import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <>
      <div className="home-overlay"></div>
      <div className="Home">
        <h1 className="welcome-text">Welcome to Snack A Log</h1>
        <img
          src="https://s3.amazonaws.com/wawa-kentico-prod/wawa/media/product-images/snacks/snacks2020_final.png"
          alt=""
        />
        <Link to="/index">
          <button className="button button-primary">Get Started</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
