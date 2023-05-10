import { footerData } from "../data/index";
import { BsInstagram, BsWhatsapp, BsTwitter, BsFacebook } from "react-icons/bs";
import { ReactComponent as MiniLog } from "../public/Vector.svg";

const Mainfooter = () => {
  return (
    <footer className="Footer">
      <div className="details">
        {footerData.map((eachRow) => {
          return (
            <div className="eachRow" key={eachRow.id}>
              <ul className="rowTitle">
                <p>{eachRow.title}</p>
                {eachRow.otherInfo.map((each, index) => {
                  return <li className="index" key={index}>{each}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="otherdetails">
        <div className="minilogo">
          <MiniLog className="logos" />
          <b>Mondu</b>
        </div>
        <p className="copyright">© 2023 Mondo. All Rights Reserved.</p>
        <div className="social-media">
          <BsFacebook />
          <BsTwitter />
          <BsWhatsapp />
          <BsInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Mainfooter;

