import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import { ReactComponent as WhatsappIcon } from "../../public/images/whatsapp.png";
function Footer() {
  return (
    <footer className="footer-con">
      <div className="address-col">
        <h1>Address:</h1>
        <div className="address">
          <img src="/images/location-pin.png" alt="Address" />
          <p>
            Staffhunter HQ - 45000 University Dr, Ashburn, Virginia 20147, US
          </p>
        </div>
        <div className="address">
          <img src="/images/location-pin.png" alt="Address" />
          <p>
            Staffhunter EU - R. Cipriano Martins 5, 1700-108 Lisbon, Portugal
          </p>
        </div>
      </div>
      <div className="main-social">
        <div className="social-wrap">
          <WhatsAppWidget
            CompanyIcon={WhatsappIcon}
            phoneNumber="+351910585160"
            companyName="Staffhunter"
          />
        </div>
      </div>
      <div className="call-wrap">
        <h1>Call Us:</h1>
        <div className="call-inner-wrap">
          <p>
            <span>
              <img src="/images/telephone.png" alt="Call Us:" />
            </span>
            <a href="tel:+12143085661">+1 214 308 5661</a>
          </p>
          <p>
            <span>
              <img src="/images/telephone.png" alt="Call Us:" />
            </span>
            <a href="tel:+351910585160">+351 910 585 160</a>
          </p>
        </div>
        <h1>Social Links</h1>
        <a
          className="social-linkedIn"
          href="https://www.linkedin.com/company/staffhunter/"
        >
          <img src="/images/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
