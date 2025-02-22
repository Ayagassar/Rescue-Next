"use client"
import React from 'react';

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="why-choose-us-content">
        
          <div className="why-choose-us-text">
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="section-description">
              We are dedicated to making a difference in the lives of underprivileged children. Here’s why you should choose us:
            </p>
            <ul className="reasons-list">
              <li className="reason-item">
                <h3 className="reason-title">🌍 Real Impact, Real Change</h3>
                <p className="reason-description">
                  We don’t just talk about change—we make it happen. Our initiatives have improved countless lives and continue to create lasting change.
                </p>
              </li>
              <li className="reason-item">
                <h3 className="reason-title">❤️ 100% Transparency</h3>
                <p className="reason-description">
                  Your support goes directly toward making a difference. We provide clear reports on how donations are used to drive real results.
                </p>
              </li>
              <li className="reason-item">
                <h3 className="reason-title">🤝 Community-Driven Approach</h3>
                <p className="reason-description">
                  We believe in working with communities, not just for them. Our programs are designed based on real needs, ensuring sustainable and meaningful impact.
                </p>
              </li>
              <li className="reason-item">
                <h3 className="reason-title">🚀 Trusted & Recognized</h3>
                <p className="reason-description">
                  Backed by strong partnerships and dedicated supporters, we’ve earned the trust of donors, volunteers, and global organizations.
                </p>
              </li>
            </ul>
          </div>

      
          <div className="why-choose-us-image">
            <img
              src="https://www.socialeurope.eu/wp-content/uploads/2022/01/shutterstock_433319491.jpg"
              alt="Why Choose Us"
              className="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
  }
