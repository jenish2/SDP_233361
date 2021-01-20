import "./App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Woman from "./Asserts/media-desktop-gift-a-celebrity-wish-0-2020-12-4-t-10-31-2.jpg";
function App() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };
  return (
    <Router>
      <div>
        <Switch>
          <Navbar></Navbar>
        </Switch>
        <div>
          <h2>Movie Masti </h2>
          <Slider {...settings}>
            <div className="app_slider">
              <img src={Woman} alt="wonder woman"></img>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div className="app_slider">
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div className="app_slider">
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div className="app_slider">
              <h3>7</h3>
            </div>
          </Slider>
        </div>
      </div>
    </Router>
  );
}

export default App;
