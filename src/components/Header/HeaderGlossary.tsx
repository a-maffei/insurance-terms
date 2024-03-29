import { ReactNode } from "react";
import insuranceExpert1 from "../../assets/support1.jpeg";

type HeaderType = {
  children: ReactNode;
};

export default function HeaderGlossary({ children }: HeaderType) {
  return (
    <header className="header-cont">
      <div className="header-content-cont">
        <h1 className="tc-grey-900 p-h1 header-title">Insurance Glossary</h1>
        <p className="tc-grey-900 p-p header-paragraph">
          Fully jargon-free, made by our team of insurance experts. Whether
          you're new to Germany or still haven't wrapped your head around the
          system after years of living here (we get it!) this is for you.
        </p>
        {children}
      </div>
      <img
        className="header-img"
        src={insuranceExpert1}
        alt="Sandra insurance expert at Feather"
      ></img>
    </header>
  );
}
