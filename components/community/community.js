import React, { useState, useEffect } from "react";
import AOS from "aos";
import IndividualModal from "../Modals/individualModal";
import CompanyModal from "../Modals/companyModal";

function Community() {
  const [individualFlag, setIndividualFlag] = useState(false);
  const [companyFlag, setCompanyFlag] = useState(false);
  const toggleModal = () => {
    setIndividualFlag(!individualFlag);
  };
  const toggleCompModal = () => {
    setCompanyFlag(!companyFlag);
  };
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
      <section className="comm-col-wrap">
        <div className="comm-card">
          <h1 className="card-h">Individual</h1>
          <p className="card-p">
            <span>
              Work from Anywhere: Find Your Next Remote Opportunity with Us.
            </span>
            Are you tired of commuting to the same office day in and day out?
            Want the flexibility to work from anywhere in the world? Look no
            further than our remote job board. Our platform is dedicated to
            connecting professionals like you with top remote opportunities
            across a range of industries. Whether you&apos;re a seasoned pro or
            just starting out, we have something for everyone
          </p>
          <button onClick={toggleModal} className="card-btn">
            Get started as an Individual
          </button>
        </div>
        <div className="comm-card">
          <h1 className="card-h">Companies</h1>
          <p className="card-p">
            <span>Connecting You with the Right Talent at 50% Less Cost.</span>
            Are you looking for the right talent to join your team? Look no
            further than our platform! We specialize in connecting employers
            with top-notch talent whether it&apos;s remote or in-house at a
            fraction of the cost. Our platform offers a wide range of job
            opportunities across various industries, so you can find the perfect
            fit for your company. Plus, we make it easy to calculate your net
            salary and get detailed information about potential candidates.
          </p>
          <button className="card-btn" onClick={toggleCompModal}>
            Get started as a company
          </button>
        </div>
      </section>
      {individualFlag ? (
        <IndividualModal open={individualFlag} handleClose={toggleModal} />
      ) : null}
      {companyFlag ? (
        <CompanyModal open={companyFlag} handleClose={toggleCompModal} />
      ) : null}
    </main>
  );
}

export default Community;
