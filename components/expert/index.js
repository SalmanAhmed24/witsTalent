import React, { useState, useEffect } from 'react';
import AOS from 'aos';
function Expert() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<main
			className="expert-wrap"
			data-aos="fade-right"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			data-aos-once="false"
		>
			<section className="content-wrap">
				<h1>We are funnel experts in our industry!</h1>
				<h4>JUST ASK REYHAN KHAN OUR CEO!</h4>
				<p>
					Reyhan is on his journey to becoming a full-time Digital nomad. He’s worked in operations for 5
					years with a significant focus on Process Optimization, Marketing Stacks, Outreach Automation, and
					Adaptive Strategies. He has also played almost every sport in the book, but Cristiano Ronaldo is his
					idol. I guess you could say that Reyhan has a Ronaldoesque impact on our team as well
				</p>
				<button>Book a free call now</button>
			</section>
			<section className="img-wrap">
				<img src="images/reyhan-blob.png" />
			</section>
		</main>
	);
}

export default Expert;
