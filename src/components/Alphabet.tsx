import Letter from "./Letter";
import { alphabet } from "../data";

type CollectionProps = {
  refsByLetter: React.RefObject<HTMLDivElement>[];
};

export default function Collection({ refsByLetter }: CollectionProps) {
  const handleScrollToLetter = (clickedLetter: string): void => {
    const index: number = alphabet.findIndex(
      (letter: string) => clickedLetter === letter
    );

    if (index !== -1) {
      refsByLetter[index].current?.scrollIntoView();
    }
  };

  const alphabetButtons: JSX.Element[] = alphabet.map((letter: string) => (
    <Letter
      key={letter}
      letter={letter}
      handleScrollToLetter={handleScrollToLetter}
    />
  ));

  return <div className="bttn-cont">{alphabetButtons}</div>;
}
