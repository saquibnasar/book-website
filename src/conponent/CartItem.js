import React, { useState } from "react";
function CartItem() {
  const [num, setNum] = useState(0);
  const plus = () => {
    setNum(num + 1);
  };
  const minus = () => {
    if (num === 0) {
      alert("max decrement reached");
    } else {
      setNum(num - 1);
    }
  };

  return (
    <>
      <div className="book-container bg-white">
        <div className="row">
          <div className="col-xl-5 col-lg-12 col-md-12 margin">
            <img
              src="https://m.media-amazon.com/images/P/1408855704.01._SCLZZZZZZZ_SX500_.jpg"
              alt=""
              className="w-100 h-100"
            />
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 margin">
            <div className="card-body d-grid gap-3 p-0">
              <h5 className="card-title font-21">
                Harry Potter and the Half Blood Prince
              </h5>
              <h5 className="author font-18">Writer Name - J. K. Rowling</h5>
              <h5 className="available font-16">Available - (1,978)</h5>
              <div className="card-text">
                <h5 className="dark-blue font-26">$0</h5>
                <h5 className="grey-75 line-through font-22">$938</h5>
              </div>
              <div className="card-text cart-list">
                <a href="/" className="me-3">
                  SAVE FOR LATER
                </a>
                <a href="/">REMOVE</a>
              </div>
            </div>
            <div className="d-flex mt-3">
              <button
                type="button"
                className="card p-4 rounded-circle"
                onClick={minus}
              >
                <i class="fa-solid fa-minus"></i>
              </button>
              <button
                type="button"
                className="card py-1 px-5 fs-3 mx-3 text-dark lh-lg"
              >
                {num}
              </button>
              <button
                type="button"
                className="card p-4 rounded-circle"
                onClick={plus}
              >
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
