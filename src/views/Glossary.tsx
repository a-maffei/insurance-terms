import { createRef, useState } from "react";
import HeaderGlossary from "../components/HeaderGlossary";
import Search from "../components/Search";
import Alphabet from "../components/Alphabet";
import Overview from "../components/Overview";
import { insuranceTerms, TermsType, alphabet } from "../data";

export default function Glossary() {
  const [terms, setTerms] = useState<TermsType[]>([...insuranceTerms]);

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

  return (
    <section className="bg-primary-50">
      <HeaderGlossary>
        <Search terms={terms} setTerms={setTerms} />
      </HeaderGlossary>
      <Alphabet refsByLetter={refsByLetter} />
      <Overview termsByLetter={termsByLetter} refsByLetter={refsByLetter} />
    </section>
  );
}
