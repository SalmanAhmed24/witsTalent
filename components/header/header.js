import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
function Header() {
	return (
		<header className="header-wrap">
			<motion.section
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0, scale: 0.5 },
					visible: { opacity: 1, scale: 1, transition: { delay: 1.5 } }
				}}
				className="content-wrap"
			>
				<h3>Welcome</h3>
				<h1>
					Connect Silicon Valley Companies With <span>Top 1%</span> Talent
				</h1>
				<button>Book a call</button>
			</motion.section>
			<motion.section
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0, scale: 0.5 },
					visible: { opacity: 1, scale: 1, transition: { delay: 1.7 } }
				}}
				className="hero-img-wrap"
			>
				<img src="./images/hero.png" />
			</motion.section>
		</header>
	);
}

export default Header;
