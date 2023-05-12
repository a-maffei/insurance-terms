import { ReactNode } from "react";

type HeaderType = {
  children: ReactNode;
};

export default function HeaderGlossary({ children }: HeaderType) {
  return (
    <header className="header-cont">
      <div className="header-content-cont">
        <h2 className="tc-grey-900 p-h1 header-title">Insurance Glossary</h2>
        <p className="tc-grey-900 p-p header-paragraph">
          Whether you're new to Germany or still haven't wrapped your head
          around the system after years of living here (we get it!) this
          glossary is for you.
        </p>
        {children}
      </div>{" "}
    </header>
  );
}
