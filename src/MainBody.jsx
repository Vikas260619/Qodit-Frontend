import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { LogoSection } from "./components/logoSection";
import SmoothScroll from "smooth-scroll";
import axios from "axios";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1,
  speedAsDuration: true,
});

export const MainBody = (props) => {
  const [showServices, setShowServices] = useState(null);
  const [heroBox, setheroBox] = useState(null);
  const [dataFeatures, setDataFeatures] = useState(null);
  const [aboutUs, setAboutUs] = useState(null);
  const [testimonials, setTestimonials] = useState(null);
  const [team, setTeam] = useState(null);
  const [chooseus, setChooseus] = useState(null);

  const API = "https://qoditdev.herokuapp.com";
  useEffect(() => {
    async function getDataFromServer() {
      const { data: heroBox } = await axios.get(`${API}/herobox/`);
      const { data: dataFeatures } = await axios.get(`${API}/features/`);
      const { data: AboutUs } = await axios.get(`${API}/aboutus/`);
      const { data: showservicess } = await axios.get(`${API}/services/`);
      const { data: testimonials } = await axios.get(`${API}/testimonial`);
      const { data: chooseus } = await axios.get(`${API}/whychooseus`);
      setheroBox(heroBox);
      setDataFeatures(dataFeatures);
      setAboutUs(AboutUs);
      setShowServices(showservicess);
      setTestimonials(testimonials);
      setChooseus(chooseus);
      window.scrollTo(0, 0);
    }

    getDataFromServer();
  }, []);
  return heroBox ? (
    <div>
      {process.env.REACT_APP_BASE_URL}

      {heroBox && <Header heroBox={heroBox} />}
      {dataFeatures && <Features dataFeatures={dataFeatures} />}
      {aboutUs && <About chooseus={chooseus} aboutUs={aboutUs} />}
      {showServices && <Services showServices={showServices} />}
      <LogoSection />
      {testimonials && <Testimonials data={testimonials} />}
    </div>
  ) : (
    <div className="loadingClass">
      {/* <Loader
      type="BallTriangle"
      color="white"
      height={80}
      width={80}
    /> */}
    </div>
  );
};
