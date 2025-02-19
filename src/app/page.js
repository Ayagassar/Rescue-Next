"use client"; // Ensure this is set for client-side rendering

import { useState } from "react";
import Navbar from "./components/navbar";
import Button from "./components/button";
import DonateButton from "./components/donateButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="image-wrapper">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQx4O0jsqV6bQhLqiXu-uEQiqLhxlVV0ecQ&s"
            className="image"
          />
          <h1 className="image-text">Let Us Rescue You</h1>
          <Button /> 
        </div>
      </div>
      <div className="donation-box">
            <input placeholder="First Name" className ="field"/>
            <input placeholder="Amount" className = "field"/>
            <input placeholder="How often?" className = "field"/>
            <DonateButton />
      </div>
    </>
  );
}

