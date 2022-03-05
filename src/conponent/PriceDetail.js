import React from "react";

function PriceDetail() {
  return (
    <>
      <div className="priceDetail">
        <div className="priceDetail_border">
          <h4 className="dark-gray fw-medium font-19">PRICE DETAILS</h4>
        </div>
        <div className="priceDetail_border">
          <div className="d-flex justify-content-between">
            <h5 className="fw-semiBold font-18 light-black">Price (1 items)</h5>
            <h5 className="fw-semiBold font-18 light-black">₹25,288</h5>
          </div>
          <div className="d-flex justify-content-between">
            <h5 className="fw-semiBold font-18 light-black">Discount</h5>
            <h5 className="fw-semiBold font-18 light-green">− ₹25,288</h5>
          </div>
        </div>
        <div className="priceDetail_border">
          <div className="d-flex justify-content-between">
            <h4 className="font-23 dark-blue fw-semiBold">Total Amount</h4>
            <h5 className="font-23 dark-blue fw-semiBold">$0.00</h5>
          </div>
        </div>
        <div className="priceDetail_border">
          <h5 className="light-green fw-semiBold font-16">
            You will save ₹25,288 on this order
          </h5>
        </div>
      </div>
    </>
  );
}

export default PriceDetail;
