import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { fontSize } from '@mui/system';
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
			<section className="logo-wrap">
				<h1 className="logo">
					Wits<span>Talent.</span>
				</h1>
			</section>
			<section className="navbar-link-wrap">
				<ul>
					<li>Services</li>
					<li>Process</li>
					<li>About Us</li>
					<li>Contact Us</li>
				</ul>
			</section>
			<section className="navbar-btn-wrap">
				<p>Login</p>
				<button>Join Us</button>
			</section>
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
					<li>Contact Us</li>
				</ul>
				<section className="navbar-btn-wrap-inner">
					<p>Login</p>
					<button>Join Us</button>
				</section>
			</Drawer>
		</nav>
	);
}

export default Navbar;
