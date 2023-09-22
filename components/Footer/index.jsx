import React from "react";
import styles from "./style.module.css";

const Footer = () => {
  return (
  <div className="flex flex-col bg-black items-center p-8 gap-4">
    <div className="text-2xl font-bold">Amarbold B.</div>
    <div className="flex gap-8 text-xl text-gray-400">
      <div>Home</div>
      <div>About</div>
      <div>Works</div>
      <div>Services</div>
      <div>Contact</div>
    </div>
    <div className="flex">
      <div>®</div>
      <div>All rights Reserved</div>
    </div>
  </div>
  )
};

export default Footer;
