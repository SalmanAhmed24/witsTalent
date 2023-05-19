import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
        <h1>
          Scaling Digital Marketing Agencies Through
          <span>Strategic Recruitment</span>
        </h1>
        <a
          rel="noreferrer"
          href="https://calendly.com/reyhankhan/slc-consulting-discovery-call?back=1&month=2022-08"
        >
          Want to build a Winning Team for your Agency?
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
        <img src="./images/reyhan-ai.png" />
      </motion.section>
    </header>
  );
}

export default Header;
