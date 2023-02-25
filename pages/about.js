import Head from "next/head";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import AboutImage from "../public/images/about-page.png";
import AdminImage from "../public/images/admin.png";
import ServiceImage from "../public/images/service.png";
import SalesImage from "../public/images/sales.png";
import MarketImage from "../public/images/market.png";
import VideoImage from "../public/images/video.png";
import Clock from "../public/images/clock.png";
import Office from "../public/images/office.png";

function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Head>
        <title>StaffHunter | About Us</title>
        <meta
          name="description"
          content="StaffHunter is an online platform which joins Big companies with Top 1% Talent all around the world."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <main
        className="about-page-wrap"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        id="about"
      >
        <header className="about-page-header">
          <section className="about-page-call-action">
            <h1>
              We aim to help businesses by connecting them with the right talent
              from our available pool of skilled and trained staff in the
              following verticals:
            </h1>
            <div className="list-header">
              <div className="icons-wrap">
                <Image
                  src={AdminImage}
                  alt="Admin Support"
                  width={50}
                  height={50}
                />
                <p>Admin support</p>
              </div>
              <div className="icons-wrap">
                <Image
                  src={ServiceImage}
                  alt="Client Success"
                  width={50}
                  height={50}
                />
                <p>Customer Service/Client Success</p>
              </div>
              <div className="icons-wrap">
                <Image
                  src={MarketImage}
                  alt="Marketing"
                  width={50}
                  height={50}
                />
                <p>Marketing & Advertising</p>
              </div>
              <div className="icons-wrap">
                <Image src={SalesImage} alt="Sales" width={50} height={50} />
                <p>Sales</p>
              </div>
              <div className="icons-wrap">
                <Image
                  src={VideoImage}
                  alt="Video Editing"
                  width={50}
                  height={50}
                />
                <p>Video editing</p>
              </div>
            </div>
          </section>
          <section className="about-page-hero-image">
            <Image src={AboutImage} alt="About Us" width={570} />
          </section>
        </header>
        <section className="time-section">
          <div className="bg-time">
            <Image src={Clock} width={250} height={250} />
          </div>
          <div className="text-time-wrap">
            <p>
              Time is money. You don&apos;t have to spend your precious hours
              digging through proposals and interviewing potential candidates.
              We&apos;ve got that covered for you! We hand-pick the right staff
              and train them for 2 weeks to get them up to speed
            </p>
          </div>
        </section>
        <section className="office-section">
          <div className="text-office-wrap">
            <p>
              We are keen on building long-term relationships and making the
              best match. Hence we use a laser-focused approach and go through a
              thorough background check coupled with personality assessments and
              a points-based system to qualify each candidate.
            </p>
          </div>
          <div className="bg-office">
            <Image src={Office} width={580} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;
