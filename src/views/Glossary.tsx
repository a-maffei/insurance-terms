import HeaderGlossary from "../components/HeaderGlossary";
import Search from "../components/Search";
import Alphabet from "../components/Alphabet";
import Overview from "../components/Overview";
import { createRef } from "react";
import { insuranceTerms, TermsType, alphabet } from "../data";

export default function Glossary() {
  const termsByLetter: TermsType[][] = [];

  alphabet.forEach((letter) => {
    const letterArray: TermsType[] = insuranceTerms.filter(
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

  const handleScrollToLetter = (letter: string) => {
    const index = alphabet.findIndex((l) => l === letter);
    if (index !== -1 && alphabetRefs[index].current) {
      alphabetRefs[index].current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      <HeaderGlossary />
      <Search />
      <Alphabet
        alphabet={alphabet}
        handleScrollToLetter={handleScrollToLetter}
      />
      <Overview termsByLetter={termsByLetter} alphabetRefs={alphabetRefs} />
    </section>
  );
}
