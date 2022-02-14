import React from "react";

function Innercard({ pledge }) {
  return (
    <div className="border-2 border-gray-500 rounded-md my-5 p-5">
      <div className=" flex flex-row justify-between">
        <h1 className="font-bold text-xl">{pledge.title}</h1>
        <p className="text-moderate-cyan font-bold">{pledge.pledge}</p>
      </div>
      <div className="my-4">{pledge.desc}</div>
      <div className="flex flex-row place-items-center justify-between">
        <h2 className="font-bold text-xl">{pledge.left}</h2>
        {pledge.left === 0 ? (
          <button disabled>Out of Stock</button>
        ) : (
          <a href="#" className="button">
            Select Reward
          </a>
        )}
      </div>
    </div>
  );
}

export default Innercard;
