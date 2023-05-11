import { createRef, useEffect, useState } from "react";
import HeaderGlossary from "../components/HeaderGlossary";
import Search from "../components/Search";
import Alphabet from "../components/Alphabet";
import Overview from "../components/Overview";
import { insuranceTerms, TermsType, alphabet } from "../data";

export default function Glossary() {
  const [terms, setTerms] = useState<TermsType[]>([...insuranceTerms]);

  const termsByLetter: TermsType[][] = [];

  alphabet.forEach((letter) => {
    const letterArray: TermsType[] = terms.filter(
      (term) => term.name.charAt(0).toLowerCase() === letter.toLowerCase()
    );

    if (letterArray.length > 0) {
      termsByLetter.push(letterArray);
    }
  });

  const alphabetRefs: React.RefObject<HTMLDivElement>[] = [];
  alphabet.forEach(() => {
    alphabetRefs.push(createRef());
  });

  const handleScrollToLetter = (clickedLetter: string) => {
    const index = alphabet.findIndex((letter) => clickedLetter === letter);
    if (index !== -1) {
      alphabetRefs[index].current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      <HeaderGlossary />
      <Search terms={terms} setTerms={setTerms} />
      <Alphabet
        alphabet={alphabet}
        handleScrollToLetter={handleScrollToLetter}
      />
      <Overview termsByLetter={termsByLetter} alphabetRefs={alphabetRefs} />
    </section>
  );
}
