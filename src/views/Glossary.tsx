import { createRef, useRef, useState } from "react";
import HeaderGlossary from "../components/HeaderGlossary";
import Search from "../components/Search";
import Alphabet from "../components/Alphabet";
import Overview from "../components/Overview";
import { insuranceTerms, TermsType, alphabet } from "../data";

export default function Glossary() {
  const [terms, setTerms] = useState<TermsType[]>([...insuranceTerms]);
  const [message, setMessage] = useState<string>("");

  const termsByLetter: TermsType[][] = [];

  alphabet.forEach((letter: string) => {
    const sigleLetterArray: TermsType[] = terms.filter(
      (term: TermsType) =>
        term.name.charAt(0).toLowerCase() === letter.toLowerCase()
    );

    if (sigleLetterArray.length > 0) {
      termsByLetter.push(sigleLetterArray);
    }
  });

  const refsByLetter = alphabet.map(() => createRef<HTMLDivElement>());
  const headerRef = useRef<HTMLHeadingElement>(null);

  const handleBackToTop = () => {
    if (headerRef.current)
      headerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const areTermsFiltered: boolean = terms.length < insuranceTerms.length;

  return (
    <section className="glossary-cont bg-primary-50">
      <HeaderGlossary headerRef={headerRef}>
        <Search
          terms={terms}
          message={message}
          setMessage={setMessage}
          setTerms={setTerms}
          areTermsFiltered={areTermsFiltered}
        />
      </HeaderGlossary>
      <div className="error-cont">
        <p className="error">{message}</p>
      </div>
      <Alphabet refsByLetter={refsByLetter} />
      <Overview termsByLetter={termsByLetter} refsByLetter={refsByLetter} />
      {!areTermsFiltered && (
        <button
          className="p-btn--primary back-button"
          onClick={handleBackToTop}
        >
          Back to top
        </button>
      )}
    </section>
  );
}
