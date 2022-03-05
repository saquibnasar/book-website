import React from "react";
import CartItem from "./CartItem";
import PlaceOrder from "./PlaceOrder";
import PriceDetail from "./PriceDetail";

function Cart() {
  return (
    <>
      <section className="cartSection">
        <div className="container-fluid container-padding">
          <div className="row justify-content-between">
            <div className="col-xl-7 col-lg-6 col-md-9 order margin-auto">
              <div className="verticalScroll">
                <CartItem />
                <CartItem />
              </div>
              <PlaceOrder />
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 mx-md-auto ">
              <PriceDetail />
            </div>
          </div>
          <div className="row mt-5 ">
            <div className="col-xl-7 col-lg-6 col-md-9 margin-auto">
              <div className="priceDetail_border bg-white">
                <h5 className="fw-medium font-19 dark-white">
                  Saved For Later (2)
                </h5>
              </div>
              <div className="verticalScroll">
                <CartItem />
                <CartItem />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
