import { ReactComponent as Imageicon1 } from "../public/brandName.svg";
import { ReactComponent as Imageicon } from "../public/Clear Junction Limited - png.svg";
import { ReactComponent as Imageicon3a } from "../public/path7.svg";
import { ReactComponent as Imageicon3b } from "../public/path5.svg";
import { ReactComponent as Imageicon4 } from "../public/Circle.svg";
import { ReactComponent as Imageicon6 } from "../public/Freemarket Financial.svg";
import { ReactSVG } from "react-svg"

const AnimationBrands = () => {
  return (
    <div className="paymentOptions">
      <div className="scrolling">
        <div className="brands">
          <div className="animationdiv">
            <div className="flex">
              <div className="brandEach">
                <Imageicon1 id="ico" />
                <b className="brandname">Fiat Republic</b>
              </div>
              <div className="brandEach">
                <Imageicon />
              </div>
              <div className="brandEach">
                <Imageicon3a/>
                <Imageicon3b />
              </div>

              <div className="brandEach">
                <Imageicon4 className="brandImgc" />
              </div>
              <div className="brandEach">
                <ReactSVG src="main.svg" className="svg" />
                <Imageicon6 className="name" />
              </div>
            </div>
          </div>
        </div>

        <div className="brands marc">
          <div className="animationdiv">
            <div className="flex">
              <div className="brandEach">
                <Imageicon1 id="ico" />
                <b className="brandname">Fiat Republic</b>
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
                <ReactSVG src="main.svg" className="svg" />
                <Imageicon6 className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimationBrands