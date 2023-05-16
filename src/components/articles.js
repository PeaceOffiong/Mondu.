import React from "react";
import { ImgSection } from "../components";

const Articles = () => {
  return (
    <article className="center">
      <div className="contained reverse">
        <ImgSection
          Img="/global-account.svg.svg"
          Title="Receive Payment"
          Text="Say Goodbye to Late Payments and Long Processing Times - Our Streamlined Payment System Makes Getting Paid Faster and Easier Than Ever Before"
        />
      </div>

      <div className="contained">
        <ImgSection
          Img="/global-account.svg (1).svg"
          Title="Global Account"
          Text="Expand Your Business Globally with One Account for Worldwide
            Payments - Collect Payments from Customers in Any Country, Currency
            or Language"
        />
      </div>

      <div className="contained reverse">
        <ImgSection
          Img="/treasury-management.svg.svg"
          Title="Hold"
          Text="Seamlessly hold 49 currencies and manage enterprise cross-border
            cash flows, transfers and liquidity on one intuitive platform."
        />
      </div>

      <div className="contained">
        <ImgSection
          Img="/fx.svg.svg"
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
