import data from "../data/index";
import { useGlobalContext } from "../context/context";
import { ReactSVG } from "react-svg";

const Home = () => {
  const { index, touchStart, touchEnd, touchMove } = useGlobalContext();

  return (
    <aside
      className="home"
      onTouchEnd={touchEnd}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
    >
      <div className="text-container">
        <p className="offers">Mondu's offering</p>
        <h1 className="header">{data[index].header}</h1>

        <p className="desc">{data[index].p}</p>
        <h3 className="count">{data[index].count}</h3>
        <small className="countdesc">{data[index].small}</small>
        <label htmlFor="email" className="label1">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <input type="submit" value="Get an account" id="submit" />
        </label>
      </div>

      <div className="graph-images">
        <ReactSVG src={data[index].img} id="imgs" />
      </div>
    </aside>
  );
};

export default Home;
