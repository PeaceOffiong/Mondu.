import React from 'react';
import { ReactComponent as One } from '../public/Icon1.svg.svg';
import { ReactComponent as Two } from "../public/Icon2.svg.svg";
import { ReactComponent as Three } from "../public/Icon3.svg.svg";
import { ReactComponent as Four } from "../public/Icon4.svg.svg";

const WhyMondu = () => {
  return (
    <div className='why'>
      <h2>Why global brands choose us?</h2>
      <ul>
        <div className="cards sets">
          <One/>
          <h3 className="bold">Protection</h3>
          <p>
            Robust security features and protocols to guarantee the safety of
            your funds and accounts.
          </p>
        </div>
        <div className="cards sets">
          <Two/>
          <h3 className="bold">Security</h3>
          <p>
            Our security systems and procedures are based on the highest
            international standards including PCI Level 1 compliance.
          </p>
        </div>
        <div className="cards sets">
         <Three/>
          <h3 className="bold">Seamless integration</h3>
          <p>
            Our systems can be seamlessly integrated with existing payment
            systems and workflows.
          </p>
        </div>
        <div className="cards sets">
          <Four/>
          <h3 className="bold">Compliance</h3>
          <p>
            We have our Financial Transactions and Reports Analysis Centre of
            Canada (Fintrac) licence.
          </p>
        </div>
      </ul>
    </div>
  );
}

export default WhyMondu