import React from 'react';
import { ReactComponent as One } from '../public/Icon1.svg.svg';
import { ReactComponent as Two } from "../public/Icon2.svg.svg";
import { ReactComponent as Three } from "../public/Icon3.svg.svg";
import { ReactComponent as Four } from "../public/Icon4.svg.svg";
import { ValueBox } from "../components";

const WhyMondu = () => {
  return (
    <div className="why">
      <h2>Why global brands choose us?</h2>
      <ul>
        <ValueBox
          Img={One}
          Title="Protection"
          Text="Robust security features and protocols to guarantee the safety of
            your funds and accounts."
        />

        <ValueBox
          Img={Two}
          Title="Security"
          Text="Our security systems and procedures are based on the highest
            international standards including PCI Level 1 compliance."
        />

        <ValueBox
          Img={Three}
          Title="Seamless integration"
          Text="Our systems can be seamlessly integrated with existing payment
            systems and workflows."
        />

        <ValueBox
          Img={Four}
          Title="Compliance"
          Text=" We have our Financial Transactions and Reports Analysis Centre of
            Canada (Fintrac) licence."
        />
      </ul>
    </div>
  );
}

export default WhyMondu