import React from "react";
import { ReactComponent as One } from "../public/global-account.svg.svg";
import { ReactComponent as Two } from "../public/global-account.svg (1).svg";
import { ReactComponent as Three } from "../public/treasury-management.svg.svg";
import { ReactComponent as Four } from "../public/fx.svg.svg";

const Articles = () => {
  return (
    <article className="center">
      <div className="contained reverse">
        <aside className="text-container ">
          <h3>Receive Payment</h3>
          <p>
            Say Goodbye to Late Payments and Long Processing Times - Our
            Streamlined Payment System Makes Getting Paid Faster and Easier Than
            Ever Before
          </p>
        </aside>
        <aside className="inner">
          <div className="graph-images">
            <One/>
          </div>
        </aside>
      </div>

      <div className="contained">
        <aside className="text-container">
          <h3>Global Account</h3>
          <p>
            Expand Your Business Globally with One Account for Worldwide
            Payments - Collect Payments from Customers in Any Country, Currency
            or Language
          </p>
        </aside>
        <aside className="inner">
          <div className="graph-images">
            <Two/>
          </div>
        </aside>
      </div>

      <div className="contained reverse">
        <aside className="text-container">
          <h3>Hold</h3>
          <p>
            Seamlessly hold 49 currencies and manage enterprise cross-border
            cash flows, transfers and liquidity on one intuitive platform.
          </p>
        </aside>
        <aside className="inner">
          <div className="graph-images">
           <Three/>
          </div>
        </aside>
      </div>

      <div className="contained">
        <aside className="text-container">
          <h3>Convert</h3>
          <p>
            Save Big on Currency Conversion Fees and Get More for Your Money
            with Our Bank-Beating FX Rates - Simplify Your Global Transactions
            Today
          </p>
        </aside>
        <aside className="inner">
          <div className="graph-images">
            <Four/>
          </div>
        </aside>
      </div>
    </article>
  );
};

export default Articles;
