import React from "react";

import "./dashboard.styles.scss";

function Range({ range, low, high }) {
  return (
    <div>
      <h3 className="lighter">{range}</h3>
      <div className="hnlValues light">
        <h3>{low}</h3>
        <h3>{high}</h3>
      </div>
      <div className="slider">
        <h5 className="lighter">L</h5>

        <svg height="5" width="300" className="light">
          <line
            x1="0"
            y1="0"
            x2="300"
            y2="0"
            style={{
              stroke: "black",
              strokeWidth: "3",
            }}
          />
          Sorry, your browser does not support inline SVG.
        </svg>
        <h5 className="lighter">H</h5>
      </div>
    </div>
  );
}

function PriceList({ name, value }) {
  return (
    <div className="priceList">
      <h3 className="name">{name}</h3>
      <h3 className="value">{value}</h3>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dropdown">
        <select>
          <option value="NSE">NSE</option>
          <option value="BSE">BSE</option>
        </select>
      </div>
      <div className="heading">
        <h2>NIFTY 50</h2>
      </div>
      <hr
        style={{
          border: "3px solid #dbf7ff",
        }}
      />

      <div className="overview">
        <div className="col1">
          <h1 className="headingGap">11,323.85</h1>
          <h4 className="headingGap">&#9650;23.40(0.21%)</h4>
          <h6 className="headingGap">As on 14 Aug 2020 10.46 IST</h6>
        </div>
        <div className="col2">
          <div className="range">
            <Range range="Day Range" low="11,315.25" high="11,361.40" />
          </div>
          <div className="range">
            <Range range="52 week Range" low="7,511.10" high="12,430.50" />
          </div>
        </div>
      </div>
      <hr
        style={{
          border: "1px dashed rgb(94, 235, 181)",
          marginBottom: "20px",
        }}
      />

      <div className="price">
        <hr />
        <h2>OVERVIEW</h2>
        <hr />
        <div className="contents">
          <div className="column1">
            <PriceList name="Open" value="11,353.30" />
            <PriceList name="Previous Close" value="11,300.45" />
            <PriceList name="Day High" value="11,361.40" />
          </div>
          <div className="column2">
            <PriceList name="Day Low" value="11,315.25" />
            <PriceList name="52 Week High" value="12,430.50" />
            <PriceList name="52 Week Low" value="7,511.10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
