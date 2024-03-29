import React, { useState, useEffect } from "react";
import AOS from "aos";
function Generation() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main
      className="generationWrap"
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      id="ser"
    >
      <section className="gen-h-wrap">
        <h1 className="gen-h">The new generation of media buying is here!</h1>
        <p>
          A complete team is assigned to you to make life easier with top
          quality service and results.
        </p>
      </section>
      <section className="gen-col-wrap">
        <div className="col">
          <img src="images/call.png" alt="" className="avatar" />
          <p>We are easy to reach! Chat with us 24/7!</p>
        </div>
        <div className="col">
          <img src="images/performace.png" alt="" className="avatar" />
          <p>Super High Performance</p>
        </div>
        <div className="col">
          <img src="images/rank.png" alt="" className="avatar" />
          <p>
            Dedicated Account Reps to make sure you are always taken care of
          </p>
        </div>
      </section>
    </main>
  );
}

export default Generation;
