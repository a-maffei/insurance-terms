import { ReactNode, RefObject } from "react";
import insuranceExpert1 from "../assets/support1.jpeg";

type HeaderType = {
  headerRef: RefObject<HTMLHeadingElement>;
  children: ReactNode;
};

export default function HeaderGlossary({ headerRef, children }: HeaderType) {
  return (
    <header className="header-cont">
      <div className="header-content-cont">
        <h1 className="tc-grey-900 p-h1 header-title" ref={headerRef}>
          Jargon-free Insurance Glossary
        </h1>
        <p className="tc-grey-900 p-p header-paragraph">
          Whether you're new to Germany or still haven't wrapped your head
          around the system after years of living here (we get it!) this
          glossary is for you.
        </p>
        {children}
      </div>
      <div className="header-img-cont">
        <img
          src={insuranceExpert1}
          alt="Sandra insurance expert at Feather"
        ></img>
      </div>{" "}
    </header>
  );
}
