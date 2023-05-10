import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "../context/context";
import { ReactComponent as Logo1 } from "../public/Vector.svg";
import { ReactComponent as Logo2 } from "../public/Mondu.svg";


const Navbar = () => {
  const { isToggled, setIsToggled } = useGlobalContext();
  return (
    <aside className="nav-header">
      <nav>
        <div className="logo">
          <Logo1/>
          <Logo2/>
        </div>
        <div className={`others ${isToggled ? "show" : "hide"}`}>
          <div className="options">
            <button>
              <div className="each" onClick={() => setIsToggled(false)}>
                Demo
              </div>
            </button>
            <button>
              <div className="each" onClick={() => setIsToggled(false)}>
                Why Mondu
              </div>
            </button>
            <button>
              <div className="each" onClick={() => setIsToggled(false)}>
                Resources
              </div>
            </button>
            <button>
              <div className="each" onClick={() => setIsToggled(false)}>
                Contact us
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
