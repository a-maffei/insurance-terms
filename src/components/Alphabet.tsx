import Letter from "./Letter";
import { TermsType } from "../data";

type CollectionProps = {
  alphabet: string[];
  handleScrollToLetter: (letter: string) => void;
};

export default function Collection({
  alphabet,
  handleScrollToLetter,
}: CollectionProps) {
  const alphabetButtons: JSX.Element[] = alphabet.map((letter, index) => (
    <Letter
      key={index}
      letter={letter}
      handleScrollToLetter={handleScrollToLetter}
    />
  ));

  return <div>{alphabetButtons}</div>;
}
