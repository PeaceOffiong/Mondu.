import data from "../data/index";
import { useGlobalContext } from "../context/context";

const Home = () => {
  const { index, touchStart, touchEnd, touchMove } = useGlobalContext();

  const originalSentence = data[index].header.split(" ");
  const firstWord = originalSentence[0];
  const remainingText = originalSentence.slice(1).join(" ");
  

  return (
    <aside
      className="home"
      onTouchEnd={touchEnd}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
    >
      <div className="text-container">
        <p className="offers">Mondu's offering</p>
        <h1 className="header">
          {firstWord} <span style={{ color: "black" }}>{remainingText}</span>
        </h1>

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
        <svg width="100%" height="100%">
          <image href={data[index].img} width="100%" height="100%" id="imgs" />
        </svg>
      </div>
    </aside>
  );
};

export default Home;
