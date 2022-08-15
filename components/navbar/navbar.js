import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { fontSize } from '@mui/system';
import { motion } from 'framer-motion';
function Navbar() {
	const [ scrollPosition, setScrollPosition ] = useState(0);
	const [ drawerFlag, setDrawerFlag ] = useState(false);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const toggleDrawer = () => {
		setDrawerFlag(!drawerFlag);
	};
	return (
		<nav className={Math.ceil(scrollPosition) < 100 ? 'navbar-wrap' : 'navbar-wrap-fixed scroll-navbar'}>
			<motion.section
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0, scale: 0.8 },
					visible: { opacity: 1, scale: 1, transition: { delay: 0.4 } }
				}}
				className="logo-wrap"
			>
				<img src="./images/logo.png" className="logo" />
			</motion.section>
			<section className="navbar-link-wrap">
				<ul>
					<motion.li
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0.5, y: -100, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, y: 0, transition: { delay: 0.6, ease: 'easeInOut' } }
						}}
					>
						<a href="#ser">Services</a>
					</motion.li>
					<motion.li
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0.5, y: -100, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, y: 0, transition: { delay: 0.65, ease: 'easeInOut' } }
						}}
					>
						<a href="#proc">Process</a>
					</motion.li>
					<motion.li
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0.5, y: -100, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, y: 0, transition: { delay: 0.7, ease: 'easeInOut' } }
						}}
					>
						<a href="#about">About Us</a>
					</motion.li>
					<motion.li
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0.5, y: -100, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, y: 0, transition: { delay: 0.75, ease: 'easeInOut' } }
						}}
					>
						<a href="#contact">Contact Us</a>
					</motion.li>
				</ul>
			</section>
			<motion.section
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0, x: 200, transition: { ease: 'easeInOut' } },
					visible: { opacity: 1, x: 0, transition: { delay: 1, ease: 'easeInOut' } }
				}}
				className="navbar-btn-wrap"
			>
				{/* <p>Login</p> */}
				<a
					target="_blank"
					href="https://calendly.com/reyhankhan/slc-consulting-discovery-call?back=1&month=2022-08"
				>
					Book a call
				</a>
			</motion.section>
			<section className="toggleWrap">
				<MenuIcon className="toggle" onClick={toggleDrawer} sx={{ fontSize: 30 }} />
			</section>
			<Drawer className="drawerMenu" anchor={'left'} open={drawerFlag} onClose={toggleDrawer}>
				<p className="close" onClick={toggleDrawer}>
					x
				</p>
				<ul className="drawer-list">
					<li>Services</li>
					<li>Process</li>
					<li>About Us</li>
					{/* <li>Contact Us</li> */}
				</ul>
				<section className="navbar-btn-wrap-inner">
					{/* <p>Login</p> */}
					<a
						target="_blank"
						href="https://calendly.com/reyhankhan/slc-consulting-discovery-call?back=1&month=2022-08"
					>
						Book a call
					</a>
				</section>
			</Drawer>
		</nav>
	);
}

export default Navbar;
