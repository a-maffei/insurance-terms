import logo from "../assets/logo.png";
import logoMobile from "../assets/logo-mobile.png";

export default function Navbar() {
  const handleClick = () => {
    window.open(
      `${process.env.PUBLIC_URL}/AlessandraMaffei_CV_Feather.pdf`,
      "_blank"
    );
  };

  return (
    <nav className="navbar">
      <div className="logo-cont">
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
      </div>
      <button onClick={handleClick}>Alessandra's CV</button>
    </nav>
  );
}
