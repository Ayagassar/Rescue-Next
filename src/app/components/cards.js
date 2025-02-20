"use client";
import React from "react";
import Image from "next/image";
import water from "../assets/water2.png"
import Education from "../assets/education.png"
import Medical from "../assets/medicalcare.png"
import Food from "../assets/food2.png"


export default function Cards() {
    return (
        <section className="services">
            <h1 className="service-t">We are Here to Help!</h1>
            <p className="service-p">Providing essential assistance, guidance, and care to uplift lives and create a brighter future.</p>
        <div className="card-container">
        <div className="card">
      <div className="card-action-area">
        <Image
          className="card-media"
          src={water}
          alt="Water"
        />
        <div className="card-content">
          <h2 className="card-title">Pure Water</h2>
          <p className="card-description">
          Access to clean water is a basic human right, yet millions still face water scarcity. Our project ensures communities receive safe, clean water, empowering them to live healthier, more productive lives. With each drop, we restore dignity and hope.
          </p>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-action-area">
        <Image
          className="card-media"
          src={Food}
          alt="Food"
        />
        <div className="card-content">
          <h2 className="card-title">Healthy Food</h2>
          <p className="card-description">
          Nutrition is the foundation of a thriving community. We provide nourishing meals to those in need, promoting overall health and well-being. By offering balanced, wholesome food, we help individuals grow stronger and reach their full potential.
          </p>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-action-area">
        <Image
          className="card-media"
          src={Medical}
          alt="Medical"
        />
        <div className="card-content">
          <h2 className="card-title">Medical Care</h2>
          <p className="card-description">
          Every person deserves access to quality healthcare. Through our medical programs, we provide essential services to underserved communities, ensuring people get the treatment they need to lead healthier lives. We’re here to heal and uplift, one patient at a time.
          </p>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-action-area">
        <Image
          className="card-media"
          src={Education}
          alt="Education"
        />
        <div className="card-content">
          <h2 className="card-title">Education</h2>
          <p className="card-description">
          Education is the key to breaking the cycle of poverty. We offer free, accessible education to children and adults, equipping them with the skills and knowledge to transform their futures. By fostering a love for learning, we empower individuals to build better lives for themselves and their families.
          </p>
        </div>
      </div>
    </div>
    </div>
    </section>
    )

}
