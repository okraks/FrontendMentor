import React from "react";

import Master from "../assets/images/logo-mastercraft.svg";

import { FaBookmark } from "react-icons/fa";

function Project() {
  return (
    <div className="py-10 bg-white rounded-md card">
      <img src={Master} className="-mt-16 mb-5 mx-auto" alt="mastercraft" />
      <div className="text-center my-10">
        <h1 className="text-3xl text-gray-800 font-bold">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className=" my-4 font-light space-x-8 text-sm text-gray-600">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain
        </p>
      </div>
      <div className="flex flex-row justify-between mx-20">
        <div>
          <a className="button" href="#">
            Back to this project
          </a>
        </div>
        <div className="flex flex-row bg-gray-300 place-items-center px-6 py-4  rounded-full">
          <FaBookmark className="inline-block text-dark " />
          <a href="#">Bookmark</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
