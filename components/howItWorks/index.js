import Image from "next/image";
import React, { useState, useEffect } from "react";
function HowItWorks() {
  return (
    <section className="how-it-works-wrap">
      <h1>How it works?</h1>
      <div className="icon-wraps">
        <div className="single-icon-con">
          <Image src="/images/phone.png" alt="icon" width={100} height={100} />
          <h2>Discovery Call</h2>
          <p>
            We get your candidate requirements into our system which
            automatically triggers our vetting process. Our team starts sending
            you screened profiles within the next 48 hours.
          </p>
        </div>
        <div className="single-icon-con">
          <Image
            src="/images/interview.png"
            alt="icon"
            width={100}
            height={100}
          />
          <h2>WHO Interview</h2>
          <p>
            We conduct 2 interviews for you, the Initial Screener and the WHO
            interview. WHO is a proven screening method where candidates are
            interviewed against a Scorecard to forecast their compatibility with
            your requirements.
          </p>
        </div>
        <div className="single-icon-con">
          <Image
            src="/images/commitment.png"
            alt="icon"
            width={100}
            height={100}
          />
          <h2>On-Boarding</h2>
          <p>
            We Onboard the Employees on your systems and set KPIs for Weeks 1 to
            4. Our Onboarding templates are Compatible with Asana, Trello,
            ClickUp and Monday.com.
          </p>
        </div>
        <div className="single-icon-con">
          <Image src="/images/growth.png" alt="icon" width={100} height={100} />
          <h2>Sit Back & Scale</h2>
          <p>
            Our Talent turns into your agency&apos;s Future Leader and starts
            hitting the benchmarks set for you. It&apos;s time to scale the
            business!
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
