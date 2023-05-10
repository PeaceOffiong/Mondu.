import React from "react";
import data from "../data/index";
import { useGlobalContext } from "../context/context";
import { ReactComponent as Imageicon1 } from "../public/brandName.svg";
import { ReactComponent as Imageicon } from "../public/Clear Junction Limited - png.svg";
import { ReactComponent as Imageicon3a } from "../public/path7.svg";
import { ReactComponent as Imageicon3b } from "../public/path5.svg";
import { ReactComponent as Imageicon4 } from "../public/Circle.svg";
import { ReactComponent as Imageicon6 } from "../public/Freemarket Financial.svg";
import { ReactSVG } from "react-svg";


const Footer = () => {
  const { index, setScreen } = useGlobalContext();
  return (
    <div className="HomeFooter">
      <div className="switchScreens">
        {data.map((each, idx) => {
          return (
            <div
              className={`dot ${index === idx ? "active" : ""}`}
              key={idx}
              onClick={() => setScreen(idx)}
            ></div>
          );
        })}
      </div>
      <div className="paymentOptions">
        <p>The trusted way to pay and get paid globally</p>
        <div className="scrolling">
          <div className="brands">
            <div className="animationdiv">
              <div className="flex">
                <div className="brandEach">
                  <Imageicon1 id="ico" />
                  <p className="brandname">Fiat Republic</p>
                </div>
                <div className="brandEach">
                  <Imageicon />
                </div>
                <div className="brandEach">
                  <Imageicon3a />
                  <Imageicon3b />
                </div>

                <div className="brandEach">
                  <Imageicon4 className="brandImgc" />
                </div>
                <div className="brandEach">
                 <ReactSVG src="main.svg" className="svg"/>
                <Imageicon6 className="name"/>
                </div>
              </div>
            </div>
          </div>

          <div className="brands marc">
            <div className="animationdiv">
              <div className="flex">
                <div className="brandEach">
                  <Imageicon1 id="ico" />
                  <p className="brandname">Fiat Republic</p>
                </div>
                <div className="brandEach">
                  <Imageicon />
                </div>
                <div className="brandEach">
                  <Imageicon3a />
                  <Imageicon3b />
                </div>

                <div className="brandEach">
                  <Imageicon4 className="brandImgc" />
                </div>

                <div className="brandEach">
                  <ReactSVG src="main.svg" className="svg"/>
                  <Imageicon6 className=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
