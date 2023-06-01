import { ReactNode } from "react";
import insuranceExpert1 from "../assets/support1.jpeg";

type HeaderType = {
  children: ReactNode;
};

export default function HeaderGlossary({ children }: HeaderType) {
  return (
    <section className="header-cont">
      <header className="header-content-cont">
        <h1 className="tc-grey-900 p-h1 header-title">
          Jargon-free Insurance Glossary
        </h1>
        <p className="tc-grey-900 p-p header-paragraph">
          Whether you're new to Germany or still haven't wrapped your head
          around the system after years of living here (we get it!) this
          glossary is for you.
        </p>
        {children}
      </header>
      <img
        className="header-img"
        src={insuranceExpert1}
        alt="Sandra insurance expert at Feather"
      ></img>
    </section>
  );
}
