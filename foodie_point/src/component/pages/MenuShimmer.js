import React from "react";
import "./MenuShimmer.css";

export const MenuShimmer = () => {
  return (
    <div className="menu-shimmer">
      {Array(5)
        .fill("")
        .map((_, idx) => (
          <div key={idx} className="menu-item-shimmer"></div>
        ))}
    </div>
  );
};


