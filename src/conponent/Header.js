import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { Saquib } from "./Item";
function Header() {
  return (
    <>
      <section id="header" className="header bg-pri">
        <div className="text-center">
          <h1 className="header-title">
            Get Your New Book
            <br /> Collection
          </h1>
          <a href="/upload" className="header-btn">
            Donate
          </a>
        </div>
      </section>
    </>
  );
}

export default Header;
