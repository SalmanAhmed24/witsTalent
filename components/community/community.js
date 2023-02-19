import React, { useState, useEffect } from "react";
import AOS from "aos";
function Community() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main
      className="community-Wrap"
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      id="ser"
    >
      <section className="comm-h-wrap">
        <h1 className="comm-h">
          Connecting right talent with right opportunities
        </h1>
      </section>
      <section className="comm-col-wrap">
        <div className="comm-card">
          <h1 className="card-h">Individual</h1>
          <p className="card-p">
            Would you like to put your experience & expertise to great use, and
            contribute to something new?
          </p>
          <button className="card-btn">Get started as an Individual</button>
        </div>
        <div className="comm-card">
          <h1 className="card-h">Companies</h1>
          <p className="card-p">
            Does your business have the variety of skills crucial for a
            sustainable success?
          </p>
          <button className="card-btn">Get started as a company</button>
        </div>
      </section>
    </main>
  );
}

export default Community;
