import React from "react";
import Companies from "../../assets/Companies.png";

function Product() {
  return (
    <div className="mt-24">
      <h3 className="font-grotesk font-bold text-[28px] text-[#1E2121] text-center mb-12">
        Trusted by 10,000+ users worldwide
      </h3>
      <img src={Companies} alt="" />
    </div>
  );
}

export default Product;
