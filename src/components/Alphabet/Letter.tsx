import { hasTerms } from "../../utils/helper";

type LetterProps = {
  letter: string;
  handleScrollToLetter: (letter: string) => void;
};

export default function Letter({ letter, handleScrollToLetter }: LetterProps) {
  const isEnabled: boolean = hasTerms(letter);

  return (
    <div className={isEnabled ? "letter-bttn" : "letter-bttn disabled-bttn"}>
      <button
        onClick={() => handleScrollToLetter(letter)}
        disabled={!isEnabled}
      >
        {letter}
      </button>
    </div>
  );
}
