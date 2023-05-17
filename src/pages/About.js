import {
  ImgSection,
  SignUp,
  Mainfooter,
  Navbar,
  AnimationBrands,
} from "../components";
import { ValueBox } from "../components";
import { ReactComponent as One } from "../public/Icon_12_.svg.svg";
import { ReactComponent as Two } from "../public/Icon_11_.svg.svg";
import { ReactComponent as Three } from "../public/Icon_10_.svg.svg";
import { ReactComponent as Four } from "../public/Icon_9_.svg.svg";
import { ReactComponent as Five } from "../public/Icon_8_.svg.svg";
import { ReactComponent as Six } from "../public/Icon_7_.svg.svg";
import { ReactSVG } from "react-svg";

const About = () => {
  return (
    <>
      <Navbar />
      <article>
        <b className="header two">About Mondu</b>
        <p className="abtp">
          Mondu is a financial technology company that provides enterprise-level
          cross-border payment solutions, foreign exchange services, and banking
          solutions to businesses worldwide. With our advanced platform or API,
          businesses of all sizes can easily accept payments and make payouts on
          a global scale. Mondu offers a single platform for global payment
          acceptance and payouts, allowing businesses to connect and transact
          seamlessly anywhere in the world.
        </p>
        <div className="btn-container">
          <button className="abtbtn green">Meet the Team</button>
          <button className="abtbtn white">Our Investors</button>
        </div>
        <AnimationBrands />
        <ul className="abtcards">
          <div className="cards sets abt">
            <b>2,000+</b>
            <p>clients globally</p>
          </div>
          <div className="cards sets abt">
            <b>190+</b>
            <p>Payout countries</p>
          </div>
          <div className="cards sets abt">
            <b>20+</b>
            <p>Exotic currencies</p>
          </div>
          <div className="cards sets abt">
            <b>£1b+</b>
            <p>Processed per annum</p>
          </div>
        </ul>

        <p className="abtp">
          Mondu has been catering to thousands of businesses globally since the
          introduction of our MVP in October 2018. Every year, we process
          billions of dollars worth of payments and offer companies a range of
          solutions such as payment processing, foreign exchange, and
          multi-currency accounts, while simultaneously assisting them in
          cost-saving and hassle-free growth.
        </p>

        <article className="center">
          <div className="contained reverse">
            <ImgSection
              Title="How Mondu Came To be"
              Text="Say Goodbye to Late Payments and Long Processing Times - Our Streamlined Payment System Makes Getting Paid Faster and Easier Than Ever Before"
              Img="/fx.svg (1).svg"
            />
          </div>
        </article>

        <div className="why">
          <h2>Why global brands choose us?</h2>
          <ul className="uls">
            <ValueBox
              Img={One}
              Title="Champion the mission"
              Text="We are driven by curiosity and belief to solve cross-border payments pain points globally.."
            />

            <ValueBox
              Img={Two}
              Title="Be the best"
              Text="We are open, take appropriate risks, adopt a results-driven approach, and are the best at what we do."
            />

            <ValueBox
              Img={Three}
              Title="Run with it"
              Text="We are determined, seek challenges, take ownership of tasks, act fast and deliver results."
            />

            <ValueBox
              Img={Four}
              Title="Go the extra mile"
              Text="We deliver beyond what is possible We make impossible possible."
            />

            <ValueBox
              Img={Five}
              Title="Customer first"
              Text="We are creative in solving existing problems and bold in designing a new and better experience for customers."
            />

            <ValueBox
              Img={Six}
              Title="We work as one"
              Text="We value transparency, we share information, mistakes and successes."
            />
          </ul>
        </div>

        <div className="why">
          <h2>Our Investors</h2>
          <ul>
            <ReactSVG src="/Logo card.svg" />
            <ReactSVG src="/Logo card (1).svg" />
            <ReactSVG src="/Logo card (2).svg" />
            <ReactSVG src="/Logo card (3).svg" />
            <ReactSVG src="/Logo card (4).svg" />
            <ReactSVG src="/Logo card (5).svg" />
            <ReactSVG src="/Logo card (6).svg" />
            <ReactSVG src="/Logo card (7).svg" />
          </ul>
        </div>

        <SignUp />

        <Mainfooter />
      </article>
    </>
  );
};

export default About;
