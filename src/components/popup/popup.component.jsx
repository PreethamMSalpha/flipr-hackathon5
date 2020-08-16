import React from "react";

import "./popup.styles.scss";

function Popup() {
  return (
    <div className="popup">
      <div className="header">
        <div>
          <h3>NSE</h3>
          <h2>NIFTY 50</h2>
          <div className="price">
            <h1>11,325.10</h1>
            <div className="prevClose">
              <h4 id="prevClose">Prev Close</h4>
              <h4 id="prevClosePrice">11,3000.45</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Popup;
