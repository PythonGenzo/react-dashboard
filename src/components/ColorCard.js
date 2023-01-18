import React from "react";
import colors from "../data/colorData";

const ColorCard = () => {
  return (
    <div className="row">
      {colors.map((color, i) => {
        return (
          <div key={i} className="col-lg-6 mb-4">
            <div
              className={`card bg-${color.name.toLowerCase()} text-${
                color.name === "Light" ? "black" : "white"
              } shadow`}
            >
              <div className="card-body">
                {color.name}
                <div
                  className={`text-${
                    color.name === "Light" ? "black" : "white"
                  }-50 small`}
                >
                  {color.code}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ColorCard;
