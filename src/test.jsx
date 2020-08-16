// import React from "react";
// import ReactApexChart from "react-apexcharts";
// import dayjs from "dayjs";

// import "./graph.styles.scss";

// class ApexChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [
//         {
//           name: "candle",
//           data: [
//             {
//               x: new Date(1538865000000),
//               y: [6587.81, 6595, 6583.27, 6591.96],
//             },
//             {
//               x: new Date(1538866800000),
//               y: [6591.97, 6596.07, 6585, 6588.39],
//             },
//             {
//               x: new Date(1538868600000),
//               y: [6587.6, 6598.21, 6587.6, 6594.27],
//             },
//             {
//               x: new Date(1538870400000),
//               y: [6596.44, 6601, 6590, 6596.55],
//             },
//             {
//               x: new Date(1538872200000),
//               y: [6598.91, 6605, 6596.61, 6600.02],
//             },
//             {
//               x: new Date(1538874000000),
//               y: [6600.55, 6605, 6589.14, 6593.01],
//             },
//             {
//               x: new Date(1538875800000),
//               y: [6593.15, 6605, 6592, 6603.06],
//             },
//             {
//               x: new Date(1538877600000),
//               y: [6603.07, 6604.5, 6599.09, 6603.89],
//             },
//             {
//               x: new Date(1538879400000),
//               y: [6604.44, 6604.44, 6600, 6603.5],
//             },
//             {
//               x: new Date(1538881200000),
//               y: [6603.5, 6603.99, 6597.5, 6603.86],
//             },
//             {
//               x: new Date(1538883000000),
//               y: [6603.85, 6605, 6600, 6604.07],
//             },
//             {
//               x: new Date(1538884800000),
//               y: [6604.98, 6606, 6604.07, 6606],
//             },
//           ],
//         },
//       ],
//       options: {
//         chart: {
//           height: 350,
//           type: "candlestick",
//         },
//         title: {
//           //   text: "CandleStick Chart - Category X-axis",
//           align: "left",
//         },
//         annotations: {
//           xaxis: [
//             {
//               x: "Oct 04 14:00",
//               borderColor: "#00E396",
//               label: {
//                 borderColor: "#00E396",
//                 style: {
//                   fontSize: "12px",
//                   color: "#fff",
//                   background: "#00E396",
//                 },
//                 orientation: "horizontal",
//                 offsetY: 7,
//                 // text: "Annotation Test",
//                 text: "No results here",
//               },
//             },
//           ],
//         },
//         tooltip: {
//           enabled: true,
//         },
//         xaxis: {
//           type: "category",
//           labels: {
//             formatter: function (val) {
//               return dayjs(val).format("MMM DD HH:mm");
//             },
//           },
//         },
//         yaxis: {
//           tooltip: {
//             enabled: true,
//           },
//         },
//       },
//     };
//   }

//   render() {
//     return (
//       <div className="chart">
//         <ReactApexChart
//           options={this.state.options}
//           series={this.state.series}
//           type="candlestick"
//           height={350}
//         />
//       </div>
//     );
//   }
// }

// export default ApexChart;

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import dayjs from "dayjs";

import "./graph.styles.scss";

// import ASHOK from "../../Data/ASHOKLEY_NS.json";
import ASHOK from "../../Data/ASHOKLEY.graphData";

function ApexChart() {
  // console.log(ASHOK.ASHOK[0].data);
  let series = ASHOK.ASHOK;
  console.log("SERIES", series);
  const [graph, setGraph] = useState({
    series,
    options: {
      chart: {
        height: 350,
        type: "candlestick",
      },
      title: {
        text: "CandleStick Chart - Category X-axis",
        align: "left",
      },
      annotations: {
        xaxis: [
          {
            x: "Oct 04 14:00",
            borderColor: "#00E396",
            label: {
              borderColor: "#00E396",
              style: {
                fontSize: "12px",
                color: "#fff",
                background: "#00E396",
              },
              orientation: "horizontal",
              offsetY: 7,
              text: "No results here",
            },
          },
        ],
      },
      tooltip: {
        enabled: true,
      },
      xaxis: {
        type: "category",
        labels: {
          // formatter: function (val) {
          //   return dayjs(val).format("MMM DD HH:mm");
          // },
        },
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  });

  return (
    <div className="chart">
      <div className="header">
        <h1>CandleStick Chart</h1>
      </div>
      <div className="dropdown">
        <select name="pets" id="pet-select">
          <option value="">Ashok Leyland</option>
          <option value="">Cipla</option>
          <option value="">Eicher Motors</option>
          <option value="">Reliance Industries Ltd</option>
          <option value="">Tata Steel</option>
        </select>

        <div className="graph">
          <ReactApexChart
            options={graph.options}
            series={graph.series}
            type="candlestick"
            height={350}
          />
        </div>
      </div>
    </div>
  );
}

export default ApexChart;

// <div className="graph">
//         <ReactApexChart
//           options={this.state.options}
//           series={this.state.series}
//           type="candlestick"
//           height={350}
//         />
//       </div>

// series: [
//   {
//     name: "candle",
//     data: [
//       {
//         x: new Date(1538865000000),
//         y: [6587.81, 6595, 6583.27, 6591.96],
//       },
//       {
//         x: new Date(1538866800000),
//         y: [6591.97, 6596.07, 6585, 6588.39],
//       },
//       {
//         x: new Date(1538868600000),
//         y: [6587.6, 6598.21, 6587.6, 6594.27],
//       },
//       {
//         x: new Date(1538870400000),
//         y: [6596.44, 6601, 6590, 6596.55],
//       },
//       {
//         x: new Date(1538872200000),
//         y: [6598.91, 6605, 6596.61, 6600.02],
//       },
//     ],
//   },
// ],

//open, high, low, close
