import Head from 'next/head';
import About from '../components/about/about';
import Header from '../components/header/header';
export default function Home() {
	return (
		<div>
			<Head>
				<title>WitsTalent | Hiring Top 1%</title>
				<meta
					name="description"
					content="WitsTalent is an online platform which joins Big companies with Top 1% Talent all around the world."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<About />
		</div>
	);
}
