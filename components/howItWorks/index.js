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
            We get your candidate requirements and send you a customized job
            description. This automatically triggers our vetting process.
          </p>
        </div>
        <div className="single-icon-con">
          <Image
            src="/images/interview.png"
            alt="icon"
            width={100}
            height={100}
          />
          <h2>Interview</h2>
          <p>
            We present pre-vetted candidates handpicked for your needs with a
            90%+ approval rate.
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
            Our world-class onboarding process where we introduce you to your
            very own customer support representative.
          </p>
        </div>
        <div className="single-icon-con">
          <Image src="/images/growth.png" alt="icon" width={100} height={100} />
          <h2>Step Back & Grow</h2>
          <p>
            Your Agency Future Leader starts hitting the benchmarks set for you.
            It&apos;s time to grow the team!
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
