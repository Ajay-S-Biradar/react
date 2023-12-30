import React from "react";
import "./css/Shimmer.css"; 

const ShimmerShow = () => {
  return (<>
    <div className="shimmershow">
      <div className="shimmer-box"></div>

      <div className="shimmer-line"></div>
      <div className="shimmer-line"></div>
    </div>
  </>
  );
};

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Shimmer = () => {
  return (
    <>
      <div>
        <input type="text" className="search-input" placeholder="search" />
        <button>search</button>
      </div>
      <div className="shimmer-container">
        {cards.map((x) => {
          return <ShimmerShow key={x} />;
        })}
      </div>
    </>
  );
};

export default Shimmer;
