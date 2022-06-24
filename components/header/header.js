import React, { useState, useEffect } from 'react';
import Image from 'next/image';
function Header() {
	return (
		<header className="header-wrap">
			<section className="content-wrap">
				<h3>Welcome</h3>
				<h1>
					Connect Silicon Valley Companies With <span>Top 1%</span> Talent
				</h1>
				<button>Book a call</button>
			</section>
			<section className="hero-img-wrap">
				<img src="./images/hero.png" />
			</section>
		</header>
	);
}

export default Header;
