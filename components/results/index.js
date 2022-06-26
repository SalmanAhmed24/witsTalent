import React, { useState, useEffect } from 'react';
import AOS from 'aos';

function Results() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<main
			className="result-wrap"
			data-aos="fade-left"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			data-aos-once="false"
		>
			<section className="heading-wrap">
				<h1>We Will Take Care Of The Results</h1>
			</section>
			<section className="card-wrap">
				<div className="card-cus">
					<h2>Facebook Ads</h2>
					<p>
						Let our In-House Agency Create Eye Catching Video Ads For You That Increase Click-Through Rates,
						Decrease Cost Per Lead, and Ultimately Put More Money in Your Pocket.
					</p>
				</div>
				<div className="card-cus">
					<h2>Google Display Network</h2>
					<p>
						Do you need to go Larger than Facebook? Then look no further than to the Google Display Network,
						which has Multitudes of Traffic for 5-10 Cents per Click.
					</p>
				</div>
				<div className="card-cus">
					<h2>Youtube Ads</h2>
					<p>
						Our Team creates all of your Youtube Ads In-House and you sit back and watch as the Leads and
						Sales come in.
					</p>
				</div>
			</section>
			<div className="btn-call-wrap">
				<button>Book a Free call</button>
			</div>
		</main>
	);
}

export default Results;
