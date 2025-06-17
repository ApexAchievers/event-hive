import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroWithFilter from "../components/HeroWithFilter";
import UpcomingEvents from "../components/UpcomingEvents";
import TrendingColleges from "../components/TrendingColleges";
import OurBlogs from "../components/OurBlogs";
import banner from "../assets/images/banner.png";
import { Link } from "react-router";
import spotify from "../assets/images/spotify.png";
import stripe from "../assets/images/stripe.png";
import google from "../assets/images/google.png";
import microsoft from "../assets/images/microsoft.png";
import medium from "../assets/images/medium.png";
import zoom from "../assets/images/zoom.png";
import uber from "../assets/images/uber.png";
import grab from "../assets/images/grab.png";
import youtube from "../assets/images/youtube.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroWithFilter />
      <UpcomingEvents />
      {/* Make your own event section goes here */}

      <div className="bg-navy-blue flex flex-row px-10 mt-10">
        <img src={banner} alt="banner" className="" />

        <div className="text-white max-w-md mx-auto px-4 sm:px-6 lg:px-0">
          <h2 className="text-3xl mt-10 font-bold">Make your own Event</h2>
          <h1 className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>

          <div className="mt-6">
            <Link
              to={"/create-event"}
              className="bg-primary text-white px-7 py-2 rounded-sm inline-block"
            >
              Create Event
            </Link>
          </div>
        </div>
      </div>

      {/* Join these brands section goes here */}
      <div className="px-10 mt-10">
        <div className="font-bold">
          <h1 className="flex justify-center text-2xl space-x-1">
            <span>Join these</span>
            <span className="text-primary">brands</span>
          </h1>
          <h1 className="text-center mt-3">
            We've had the pleasure of working with industry-defining brands.
            These are <br />
            just some of them.
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 items-center justify-items-center py-10 px-15">
          <img
            src={spotify}
            alt="spotify-logo"
            className="h-14 sm:h-16 object-contain"
          />
          <img
            src={google}
            alt="google-logo"
            className="h-14 sm:h-16 object-contain"
          />
          <img
            src={stripe}
            alt="stripe-logo"
            className="h-14 sm:h-16 object-contain"
          />
          <img
            src={youtube}
            alt="youtube-logo"
            className="h-14 sm:h-16 object-contain"
          />
          <img
            src={microsoft}
            alt="microsoft-logo"
            className="h-14 sm:h-16 object-contain"
          />
          <img
            src={medium}
            alt="medium-logo"
            className="h-14 sm:h-16 object-contain py-2"
          />
          <img
            src={zoom}
            alt="zoom-logo"
            className="h-14 sm:h-16 object-contain py-4"
          />
          <img
            src={uber}
            alt="uber-logo"
            className="h-14 sm:h-16 object-contain py-4"
          />
          <img
            src={grab}
            alt="grab-logo"
            className="h-14 sm:h-16 object-contain py-4"
          />
        </div>
      </div>
      <TrendingColleges />
      <OurBlogs />
      <Footer />
    </>
  );
}
