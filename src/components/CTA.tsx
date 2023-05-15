import insuranceExpert2 from "../assets/support2.jpeg";
import React, { useState, useEffect } from "react";

export default function CTA() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let currentWidth = 0;

    function increaseLineWidth() {
      currentWidth += 1;
      setWidth(currentWidth);

      if (currentWidth < 20) {
        animationFrame = requestAnimationFrame(increaseLineWidth);
      }
    }

    animationFrame = requestAnimationFrame(increaseLineWidth);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="cta-cont">
      <div className="cta-inner-cont">
        <div className="cta-text">
          <div>
            <h3 className="p-h2 cta-title">Do you have questions left?</h3>
            <div className="show-line" style={{ width: `${width}%` }}></div>
          </div>
          <p className="p-p">
            Whether you're new to Germany or still haven't wrapped your head
            around the system after years of living here (we get it!) this
            glossary is for you.
          </p>
          <a target="_blank" href="https://feather-insurance.com/support">
            <button className="p-btn--primary">Get in touch</button>
          </a>
        </div>
        <img
          className="cta-img"
          src={insuranceExpert2}
          alt="Insurance expert at Feather"
        />
      </div>
    </section>
  );
}
