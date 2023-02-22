import Head from "next/head";
import About from "../components/about/about";
import Community from "../components/community/community";
import Expert from "../components/expert";
import Generation from "../components/generationSec";
import Header from "../components/header/header";
import Results from "../components/results";
export default function Home() {
  return (
    <div>
      <Head>
        <title>StaffHunter | Hiring Top 1%</title>
        <meta
          name="description"
          content="StaffHunter is an online platform which joins Big companies with Top 1% Talent all around the world."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <Header />
      {/* <About /> */}
      {/* <Generation /> */}
      {/* <Results /> */}
      <Community />
      {/* <Expert /> */}
    </div>
  );
}
