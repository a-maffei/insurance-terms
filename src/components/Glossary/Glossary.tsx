import { createRef, useState } from "react";
import HeaderGlossary from "../Header/HeaderGlossary";
import Search from "../Search/Search";
import Alphabet from "../Alphabet/Alphabet";
import Overview from "../Terms/Overview";
import CTA from "../CTA/CTA";
import { insuranceTerms, TermsType } from "../../data";
import { alphabet } from "../../utils/helper";
import BackButton from "../Terms/BackButton";

export default function Glossary() {
  const [terms, setTerms] = useState<TermsType[]>([...insuranceTerms]);

  /* We create an array of arrays (terms by letter) in order to display the glossary in the children components.
  To avoid looping through the entire glossary for each letter, we temporarily create a dictionary data structure so we can use a more time-efficient bracket notation */

  const termsMap: { [key: string]: TermsType[] } = {};

  terms.forEach((term: TermsType) => {
    const termInitial: string = term.name.charAt(0).toLowerCase();
    if (termsMap[termInitial]) {
      termsMap[termInitial].push(term);
    } else {
      termsMap[termInitial] = [term];
    }
  });

  /* The above data structure would be perfectly fine, but since the rest of the app features are built using an "array approach" we'll have to reconvert our dictionary back into an array. */

  const termsByLetter: TermsType[][] = alphabet.reduce(
    (acc: TermsType[][], letter: string) => {
      if (termsMap[letter.toLowerCase()]) {
        acc.push(termsMap[letter.toLowerCase()]);
      }
      return acc;
    },
    []
  );

  /* We create an array of refs, which we'll use to allow scrolling down to a certain letter when clicking on the respective button */

  const refsByLetter = alphabet.map(() => createRef<HTMLDivElement>());

  const areTermsFiltered: boolean = terms.length < insuranceTerms.length;

  return (
    <div className="glossary-cont bg-primary-50">
      <header>
        <HeaderGlossary>
          <Search setTerms={setTerms} areTermsFiltered={areTermsFiltered} />
        </HeaderGlossary>
      </header>
      <main>
        <Alphabet refsByLetter={refsByLetter} />
        <Overview
          termsByLetter={termsByLetter}
          refsByLetter={refsByLetter}
        />{" "}
        <BackButton areTermsFiltered={areTermsFiltered} />
        <CTA />
      </main>
    </div>
  );
}
