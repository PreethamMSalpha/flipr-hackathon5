import React, { useState } from "react";

// import ASHOK from "./Data/ASHOKLEY_NS.json";
// import BSE from "./Data/BSE_SENSEX.json";
// import CIPLA from "./Data/CIPLA_NS.json";
// import EICHER from "./Data/EICHERMOT_NS.json";
// import NSE from "./Data/NSE_NIFTY.json";
// import RELIANCE from "./Data/RELIANCE_NS.json";
import TATASTEEL from "./Data/TATASTEEL_NS.json";

function Converter() {
  const [demo, setDemo] = useState({ TATASTEEL });

  let seriesArray = [
    {
      name: "TATASTEEL",
      data: [],
    },
  ];

  console.log(demo.TATASTEEL.data.length);

  for (let i = 0; i < demo.TATASTEEL.data.length; i++) {
    const { Date, Open, High, Low, Close } = demo.TATASTEEL.data[i];
    const yValues = [Open, High, Low, Close];
    seriesArray[0].data.push({
      x: Date,
      y: yValues,
    });
  }

  console.log(JSON.stringify(seriesArray));

  return (
    <div>
      <h2>this is Converter</h2>
    </div>
  );
}

export default Converter;
