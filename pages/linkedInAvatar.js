import Head from "next/head";
function LinkedInAvatar() {
  return (
    <section>
      <Head>
        <title>StaffHunter | Top LinkedIn Avatars</title>
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
      <header className="linkedIn-main-wrap">
        <h1 className="main-heading">
          Start scaling your outbound marketing with AI-powered avatars
        </h1>
        <p className="main-p">
          Simple plans and prices. Only pay for what you need. No contracts. Use
          StaffHunter AI month by month and quit at any time.
        </p>
      </header>
      <section className="linkedIn-cards-wrap">
        <div className="single-card">
          <h1 className="card-h">Classic Avatar</h1>
          <p className="card-sub-h">Start your outreach in only 24-hours</p>
          <h1 className="money-h">
            $47 <span>per month / per profile</span>
          </h1>
          <ul className="price-list">
            <li>
              <span>&#10003;</span> Pre-aged
            </li>
            <li>
              <span>&#10003;</span> Specify gender
            </li>
            <li>
              <span>&#10003;</span> Specify ethnicity
            </li>
            <li>
              <span>&#10003;</span> Editable headline
            </li>
            <li>
              <span>&#10003;</span> Editable about section
            </li>
            <li>
              <span>&#10003;</span> Human-realistic picture
            </li>
            <li>
              <span>&#10003;</span> Uniquely generated name
            </li>
            <li>
              <span>&#10003;</span> 100+ network connections
            </li>
            <li>
              <span>&#10003;</span> Top 100 US university education
            </li>
            <li>
              <span>&#10003;</span> Specify prior job experience
            </li>
            <li>
              <span>&#10003;</span> Specify present job title
            </li>
          </ul>
          <div className="order-btn-wrap">
            <button className="order-now">Order Today</button>
          </div>
        </div>
        <div className="single-card">
          <h1 className="card-h">Premium Avatar</h1>
          <p className="card-sub-h">
            Pre-aged LinkedIn avatar, with a real human ID
          </p>
          <h1 className="money-h">
            $77 <span>per month / per profile</span>
          </h1>
          <ul className="price-list">
            <li>
              <span>&#10003;</span> ID-ready
            </li>
            <li>
              <span>&#10003;</span> Pre-aged
            </li>
            <li>
              <span>&#10003;</span> Specify gender
            </li>
            <li>
              <span>&#10003;</span> Specify ethnicity
            </li>
            <li>
              <span>&#10003;</span> Editable headline
            </li>
            <li>
              <span>&#10003;</span> Editable about section
            </li>
            <li>
              <span>&#10003;</span> Human-realistic picture
            </li>
            <li>
              <span>&#10003;</span> Uniquely generated name
            </li>
            <li>
              <span>&#10003;</span> 100-500 network connections
            </li>
            <li>
              <span>&#10003;</span> Top 100 US university education
            </li>
            <li>
              <span>&#10003;</span> Specify prior job experience
            </li>
            <li>
              <span>&#10003;</span> Specify present job title
            </li>
          </ul>
          <div className="order-btn-wrap">
            <button className="order-now">Order Today</button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default LinkedInAvatar;
