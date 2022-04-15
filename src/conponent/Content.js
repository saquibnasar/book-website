import React from "react";
import Card from "./Card";
import RecentData from "./RecentData";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function Content(props) {
  // var host = window.location.hostname;
  return (
    <>
      <div className="recent-book">
        <div className="">
          <h1 className="text-center">{props.title}</h1>
          <div className="content_card">
            <div className="container-fluid">
              <div className="row justify-content-center">
                {RecentData.map((val, index) => {
                  return (
                    <Card
                      book={val.book}
                      images={val.images}
                      link={`/item/${val.id}`}
                      Author={val.Author}
                      Available={val.Available}
                      Price={val.Price}
                      key={val.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
