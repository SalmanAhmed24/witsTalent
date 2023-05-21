import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function CarouselComp() {
  return (
    <section className="carousel-wrap">
      <h1 className="testimonial-h">What Our Client Say&apos;s</h1>
      <Carousel
        showIndicators={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div className="testimonial-item">
          <div className="testmonial-card">
            <div className="img-wrap">
              <img
                src="https://media.licdn.com/dms/image/C4D03AQGiT6HDeiMf-A/profile-displayphoto-shrink_800_800/0/1612337634419?e=2147483647&v=beta&t=8E8-1VhERnejZyd7UzhB7plJlhLNBVGA9one6A8jtL0"
                alt="Avatar"
                className="image-avatar"
              />
            </div>
            <div className="content-wrap">
              <h1>Mike Buontempo</h1>
              <h2>CEO & Founder of Client Accelerators</h2>
              <p>
                Staffhunter has been an absolute game-changer for our company.
                As the CEO & Founder of Client Accelerators, I had the pleasure
                of working with them to hire 12 exceptional individuals over the
                past 18 months. What sets Staffhunter apart is their ability to
                find talent that not only sticks around for the long haul but
                also helps our company scale rapidly. Thanks to their expertise,
                we were able to open our second office in Augusta, GA
                seamlessly, placing 6 outstanding resources within the first 4-6
                weeks. The best part is that the average cost of these overseas
                resources ranged between $1,200 to $1,500, providing immense
                value for our investment. Staffhunter has truly been
                instrumental in our success, and I highly recommend their
                services.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="testmonial-card">
            <div className="img-wrap">
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/63ffd6bf8939af8b7dba9341/0x0.jpg?format=jpg&crop=2816,2816,x148,y76,safe&height=416&width=416&fit=bounds"
                alt="Avatar"
                className="image-avatar"
              />
            </div>
            <div className="content-wrap">
              <h1>Kim Sane</h1>
              <h2>Founder & CEO of ScaleRex</h2>
              <p>
                I owe a significant part of my agency&apos;s growth to
                Staffhunter. As the CEO & Founder of ScaleRex, I partnered with
                them to scale my Lead Gen agency from 2 people to an incredible
                team of 15 individuals. Staffhunter&apos;s expertise in placing
                top-notch Account Managers and Data Analysts was invaluable. Not
                only did they find us exceptional talent, but they also did it
                at an unbeatable cost. With Staffhunter, we were able to hire
                these talented professionals at a remarkable 75% less cost
                compared to traditional recruitment methods. Their understanding
                of our specific needs and commitment to finding the perfect fit
                for our company culture made all the difference, I can&apos;t
                recommend Staffhunter enough.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="testmonial-card">
            <div className="img-wrap">
              <img
                src="https://media.licdn.com/dms/image/C4D03AQEQ4kuzDhYTvQ/profile-displayphoto-shrink_800_800/0/1516234358784?e=2147483647&v=beta&t=X-kB9Xpo0aXvJwtwvogoJb_1-PD8LgVfr23XNumUA30"
                alt="Avatar"
                className="image-avatar"
              />
            </div>
            <div className="content-wrap">
              <h1>Daniel Rovira</h1>
              <h2>Co-Founder of Klarity Health</h2>
              <p>
                Staffhunter has been a game-changer for Klarity Health. As the
                Co-Founder of Klarity Health, we were in need of remote web
                development resources at an affordable cost. Staffhunter
                exceeded our expectations by providing us with highly skilled
                resources at just 1/4th of the cost compared to hiring in-house
                in Spain. Their ability to source remote talent without
                compromising on quality has allowed us to save significant
                resources while achieving our development goals seamlessly.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="testmonial-card">
            <div className="img-wrap">
              <img
                src="https://s.yimg.com/ny/api/res/1.2/A5Pvx94g8FltebIr238c7w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ1MA--/https://media.zenfs.com/en/herald_scotland_359/a16a0fe19460b3b120b868dcf2b53d3c"
                alt="Avatar"
                className="image-avatar"
              />
            </div>
            <div className="content-wrap">
              <h1>Jamie Kingsley</h1>
              <h2>COO, PR Genius</h2>
              <p>
                Staffhunter transformed my one-man operation into a thriving
                business. As the COO of PR Genius, I can confidently say that
                our revenue skyrocketed by 5x after finding talent through
                Staffhunter. They helped me locate the best Account Manager and
                Virtual Assistants who played a crucial role in our prospecting
                efforts. What&apos;s even more impressive is that Staffhunter
                provided this exceptional talent at an incredible 1/3rd cost
                compared to local recruitment options.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default CarouselComp;
