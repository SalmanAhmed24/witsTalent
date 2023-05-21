import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
function Header() {
  return (
    <header className="header-wrap">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1, transition: { delay: 1.5 } },
        }}
        className="content-wrap"
      >
        <h1>Scaling Digital Marketing Agencies</h1>
        <Carousel
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          autoPlay={true}
          showStatus={false}
          infiniteLoop={true}
        >
          <div className="item-cus">
            <h1 className="item-cus-h">Through Strategic Recruitment</h1>
          </div>
          <div className="item-cus">
            <h1 className="item-cus-h">at 70% Less Monthly Cost</h1>
          </div>
          <div className="item-cus">
            <h1 className="item-cus-h">with Globally Proven Talent</h1>
          </div>
        </Carousel>
        <a
          rel="noreferrer"
          href="https://calendly.com/staffhunter/slc-consulting-discovery-call?back=1&month=2023-05"
        >
          Let&apos;s do an ROI Analysis?!
        </a>
      </motion.section>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1, transition: { delay: 1.7 } },
        }}
        className="hero-img-wrap"
      >
        <img src="./images/hero-round.png" />
      </motion.section>
    </header>
  );
}

export default Header;
