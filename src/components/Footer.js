import React from "react";
import data from "../data/index";
import { useGlobalContext } from "../context/context";
import { AnimationBrands } from "../components";
      
          
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
      <div className="full">
        <p>The trusted way to pay and get paid globally</p>
        <AnimationBrands/>
      </div>
    </div>
  );
};

export default Footer;
