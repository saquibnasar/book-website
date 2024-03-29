import React from "react";
import Card from "./Card";
import RecentData from "./RecentData";

export default function Search(props) {
  return (
    <>
      <div className="recent-book ">
        <div className="">
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
      <div className="recent-book">
        <div className="">
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
      <div className="recent-book">
        <div className="">
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
