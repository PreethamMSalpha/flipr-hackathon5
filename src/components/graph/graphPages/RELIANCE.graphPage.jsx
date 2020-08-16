import React, { useState } from "react";

import ReactApexChart from "react-apexcharts";

import "../graph.styles.scss";

import RELIANCE from "../../../Data/RELIANCE.graphData";

import firebase from "../../../config/firebase";
import Homepage from "../../homepage/homepage.component";

function ApexChart(props) {
  let series = RELIANCE.RELIANCE;

  const [graph, setGraph] = useState({
    series,
    options: {
      chart: {
        type: "candlestick",
        height: "auto",
        width: "100%",
        animations: {
          enabled: false,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 0,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      title: {
        text: "RELIANCE INDUSTRY",
        align: "left",
      },
      xaxis: {
        type: "datetime",
        axisBorder: {
          show: true,
          color: "#78909C",
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: true,
          borderType: "solid",
          color: "#78909C",
          width: 6,
          offsetX: 0,
          offsetY: 0,
        },
      },
      yaxis: {
        show: true,
        showAlways: true,
        showForNullSeries: true,
        seriesName: undefined,
        tickAmount: 8,
        min: 300,
        // max: 6,
        forceNiceScale: false,
        floating: false,
        decimalsInFloat: undefined,
        axisBorder: {
          show: true,
          color: "#78909C",
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: true,
          borderType: "solid",
          color: "#78909C",
          width: 6,
          offsetX: 0,
          offsetY: 0,
        },
        tooltip: {
          enabled: true,
          offsetX: 0,
        },
      },
    },
  });

  if (!firebase.getCurrentUsername()) {
    alert("login is required");
    props.history.push("/login");
    return null;
  }

  function HandleChange(e) {
    const target = e.target.value;
    switch (target) {
      case "ASHOK":
        return props.history.push("/ashok");

      case "CIPLA":
        return props.history.push("/cipla");

      case "EICHER":
        return props.history.push("/eicher");

      case "RELIANCE":
        return props.history.push("/reliance");

      case "TATASTEEL":
        return props.history.push("/tatasteel");

      default:
        return props.history.push("/");
    }
  }

  return (
    <div>
      <Homepage />
      <div className="chart">
        <div className="header">
          <h1>CandleStick Chart</h1>
        </div>
        <div className="dropdown" onChange={HandleChange}>
          <select>
            <option value="RELIANCE">Reliance Industries</option>
            <option value="ASHOK">Ashok Leyland</option>
            <option value="CIPLA">Cipla</option>
            <option value="EICHER">Eicher Motors</option>
            <option value="TATASTEEL">Tata Steel</option>
          </select>
        </div>
        <div className="graph">
          <ReactApexChart
            options={graph.options}
            series={graph.series}
            type="candlestick"
            height={450}
          />
        </div>
      </div>
    </div>
  );
}

export default ApexChart;
