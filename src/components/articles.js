import React from "react";
import { ReactComponent as One } from "../public/global-account.svg.svg";
import { ReactComponent as Two } from "../public/global-account.svg (1).svg";
import { ReactComponent as Three } from "../public/treasury-management.svg.svg";
import { ReactComponent as Four } from "../public/fx.svg.svg";
import { ImgSection } from "../components";

const Articles = () => {
  return (
    <article className="center">
      <div className="contained reverse">
        <ImgSection
          Img={One}
          Title="Receive Payment"
          Text="Say Goodbye to Late Payments and Long Processing Times - Our Streamlined Payment System Makes Getting Paid Faster and Easier Than Ever Before"
        />
      </div>

      <div className="contained">
        <ImgSection
          Img={Two}
          Title="Global Account"
          Text="Expand Your Business Globally with One Account for Worldwide
            Payments - Collect Payments from Customers in Any Country, Currency
            or Language"
        />
      </div>

      <div className="contained reverse">
        <ImgSection
          Img={Three}
          Title="Hold"
          Text="Seamlessly hold 49 currencies and manage enterprise cross-border
            cash flows, transfers and liquidity on one intuitive platform."
        />
      </div>

      <div className="contained">
        <ImgSection
          Img={Four}
          Title="Convert"
          Text="Save Big on Currency Conversion Fees and Get More for Your Money
            with Our Bank-Beating FX Rates - Simplify Your Global Transactions
            Today"
        />
      </div>
    </article>
  );
};

export default Articles;
