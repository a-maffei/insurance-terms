import { insuranceTerms } from "../data";

type LetterProps = {
  letter: string;
  handleScrollToLetter: (letter: string) => void;
};

export default function Letter({ letter, handleScrollToLetter }: LetterProps) {
  const hasTerms: boolean = insuranceTerms.some(
    (term) => term.name.charAt(0) == letter
  );

  return (
    <button onClick={() => handleScrollToLetter(letter)} disabled={!hasTerms}>
      {letter}
    </button>
  );
}
