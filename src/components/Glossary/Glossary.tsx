import { createRef } from "react";
import HeaderGlossary from "../Header/HeaderGlossary";
import Search from "../Search/Search";
import Alphabet from "../Alphabet/Alphabet";
import Overview from "../Terms/Overview";
import BackButton from "../Terms/BackButton";
import CTA from "../CTA/CTA";
import { alphabet } from "../../utils/helper";
import { useTermSetup } from "../../utils/hooks/useTermSetup";

export default function Glossary() {
  const { setTerms, termsByLetter, areTermsFiltered } = useTermSetup();

  /* We create an array of refs, which we'll use to allow scrolling down to a certain letter when clicking on the respective button */

  console.log(termsByLetter);
  const refsByLetter = alphabet.map(() => createRef<HTMLDivElement>());

  return (
    <div className="glossary-cont bg-primary-50">
      <header>
        <HeaderGlossary>
          <Search areTermsFiltered={areTermsFiltered} setTerms={setTerms} />
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
