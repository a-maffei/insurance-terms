import logo from "../../assets/logo.png";
import logoMobile from "../../assets/logo-mobile.png";
import cv from "../../assets/AlessandraMaffei_CV_Feather.pdf";

export default function Navbar() {
  const handleCVButtonClick = () => {
    window.open(cv, "_blank");
  };

  return (
    <header className="navbar">
      <nav className="navbar-cont">
        <a
          className="logo-cont"
          href="https://feather-insurance.com/"
          rel="noopener noreferrer"
        >
          <img
            className="logo-desktop"
            src={logo}
            alt="feather logo with text"
          ></img>
          <img
            className="logo-mobile"
            src={logoMobile}
            alt="feather logo without text"
          ></img>
        </a>
        <button onClick={handleCVButtonClick}>Alessandra's CV</button>
      </nav>
    </header>
  );
}
