import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "../context/context";
import { ReactComponent as Logo1 } from "../public/Vector.svg";
import { ReactComponent as Logo2 } from "../public/Mondu.svg";
import { Link } from "react-router-dom";


const Navbar = () => {
  const { isToggled, setIsToggled } = useGlobalContext();
  return (
    <aside className="nav-header">
      <nav>
        <Link to="/">
          <div className="logo">
            <Logo1 />
            <Logo2 />
          </div>
        </Link>
        <div className={`others ${isToggled ? "show" : "hide"}`}>
          <div className="options">
            <button>
              <div className="each" onClick={() => setIsToggled(false)}>
                <Link to="/">Home</Link>
              </div>
            </button>
            <button>
              <div className="each" onClick={() => setIsToggled(false)}>
                <Link to="/About">Why Mondu</Link>
              </div>
            </button>
            <button>
              <div className="each" onClick={() => setIsToggled(false)}>
                <Link to="/Documentation">Resources</Link>
              </div>
            </button>
            <button>
              <div className="each" onClick={() => setIsToggled(false)}>
                <Link to="/ContactUs"> Contact us</Link>
              </div>
            </button>
          </div>

          <div className="getiIn">
            <button className="login">
              <div className="each">Login</div>
            </button>
            <button>
              <div className="each signUp">Get Started</div>
            </button>
          </div>
        </div>
        <div className="tooglebutton" onClick={() => setIsToggled(!isToggled)}>
          {isToggled ? "X" : <AiOutlineMenu />}
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;
