import React, { useState, useEffect } from 'react';
import AOS from 'aos';
function About() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<main
			className="about-wrap"
			data-aos="fade-up"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			data-aos-once="false"
			id="about"
		>
			<h1>Join thousands of companies that trust StaffHunter to hire, pay and manage their global team</h1>
			<p>
				StaffHunter has everything you need to compliantly hire, pay and manage contractors and employees in 150
				countries. Think onboarding, contracts, expense management, benefits, payroll and built-in compliance
				for your international team.
			</p>
			<section className="companies-wrap">
				<ul>
					<li>
						<img src="./images/Airtable.svg" alt="Airtable" />
					</li>
					<li>
						<img src="./images/d-local.svg" alt="D-Local" />
					</li>
					<li>
						<img style={{ width: '140px' }} src="./images/intercom.png" alt="Intercom" />
					</li>
					<li>
						<img src="./images/Mercury.svg" alt="Mercury" />
					</li>
					<li>
						<img src="./images/Notion.svg" alt="Notion" />
					</li>
					<li>
						<img src="./images/Shopify.svg" alt="Shopify" />
					</li>
				</ul>
			</section>
		</main>
	);
}

export default About;
