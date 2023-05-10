import React from 'react';
import { ReactComponent as Icon1 } from "../public/Icon placeholder.svg";
import { ReactComponent as Icon2 } from "../public/Icon placeholder (1).svg";
import { ReactComponent as Icon3 } from "../public/Icon placeholder (2).svg";

const Features = () => {
  return (
    <div className="features">
      <h4>Features</h4>
      <h1>Discover the Advantages of Using Mondu</h1>
      <small>
        Make informed decisions for your online business with our real-time
        analytics and insights. stay ahead of the competition in a fast-paced
        online marketplace with mondo
      </small>
      <div className="two">
        <div className="sets">
          <Icon1/>
          <b>Advance Cutting Edge Tech</b>
          <p>
            leveraging on the best and advanced information processing
            techniques to ensure Zero or no transactions timeouts with speed
          </p>
        </div>
        <div className="sets">
          <Icon2/>
          <b>Global reach and support</b>
          <p>
            Mondu supports over 100 different currencies, making it easy for
            users to send and receive payments from anywhere in the world,
            regardless of their location or currency.
          </p>
        </div>
        <div className="sets">
          <Icon3/>
          <b>User-friendly interface</b>
          <p>
            Mondu has been designed to be extremely user-friendly, with a simple
            and intuitive interface that makes it easy for anyone to use.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features