import insuranceExpert2 from "../assets/support2.jpeg";
import Line from "./Line";

export default function CTA() {
  return (
    <aside className="cta-cont">
      <div className="cta-inner-cont">
        <div className="cta-text">
          <header>
            <h3 className="p-h2 cta-title">Do you have questions left?</h3>
            <Line />
          </header>
          <p className="p-p">
            Reach out to us. Our insurance experts will be happy to guide you
            and provide recommendations based on your needs.
          </p>
          <a
            target="_blank"
            href="https://feather-insurance.com/support"
            rel="noopener noreferrer"
          >
            <button className="p-btn--primary">Get in touch</button>
          </a>
        </div>
        <div className="cta-img">
          <img src={insuranceExpert2} alt="Insurance expert at Feather" />
        </div>
      </div>
    </aside>
  );
}
