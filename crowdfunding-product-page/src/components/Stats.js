import React from "react";

function Stats() {
  return (
    <div className="card">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="stats-head">$89,914</h1>
          <p className="stats-body">of $100,000 backed</p>
        </div>
        <div>
          <h1 className="stats-head">5,007</h1>
          <p className="stats-body">total backers</p>
        </div>
        <div>
          <h1 className="stats-head">56</h1>
          <p className="stats-body">days left</p>
        </div>
      </div>
      <div className="text-center my-5 bg-gray-200 h-3 rounded-full">
        <div className="bg-moderate-cyan h-3 rounded-full w-72"></div>
      </div>
    </div>
  );
}

export default Stats;
