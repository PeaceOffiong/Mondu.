import React from 'react';
import { ReactComponent as Buildimg } from "../public/Group 427319215.svg";
import {Link} from "react-router-dom"

const BuildSection = () => {
  return (
    <aside className="contained specific">
      <div className="text-container">
        <h1 className="header">Build on our global financial infrastructure</h1>
        <p className="desc">
          Build custom payments experiences with well-documented APIs
        </p>
        <Link to="/Documentation">
          <button id="submit">Explore the Docs &#8594;</button>
        </Link>
      </div>
      <div>
        <Buildimg className="specificImg" />
      </div>
    </aside>
  );
}

export default BuildSection