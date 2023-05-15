import { insuranceTerms, TermsType } from "../data";

type LetterProps = {
  letter: string;
  handleScrollToLetter: (letter: string) => void;
};

export default function Letter({ letter, handleScrollToLetter }: LetterProps) {
  const hasTerms: boolean = insuranceTerms.some(
    (term: TermsType) => term.name.charAt(0) === letter
  );

  return (
    <div className={hasTerms ? "letter-bttn" : "letter-bttn disabled-bttn"}>
      <button onClick={() => handleScrollToLetter(letter)} disabled={!hasTerms}>
        {letter}
      </button>
    </div>
  );
}
