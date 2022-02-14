import React from "react";
import Innercard from "./Innercard";

export default function About() {
  const pledges = [
    {
      title: "Bamboo Stand",
      pledge: "Pledge $25 or more",
      desc: "You get an ergonomic stand made of natural bamboo",
      left: "101",
      id: "1",
    },
    {
      title: "Black Edition Stand",
      pledge: "Pledge $75 or more",
      desc: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our blacker mameber list. Shipping is included",
      left: "64",
      id: "2",
    },
    {
      title: "Mahogany",
      pledge: "Pledge 200 or more",
      desc: "You get two special edition mahogany stand, a backer tshirt and a personal thank you",
      left: "0",
      id: "1",
    },
  ];
  return (
    <div className="card">
      <h1 className="text-2xl mb-10 font-bold">About this project</h1>
      <p className="font-light text-gray-600">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you focused on the task
        at hand.
        <br /> <br />
        Featuring artisan craftmanship, the simplicity of the design created
        extra desk space below your computer to allow notepads, pens and USD
        sticks to be stored under the stand
      </p>

      {pledges.map((pledge) => {
        return <Innercard pledge={pledge} />;
      })}
    </div>
  );
}
