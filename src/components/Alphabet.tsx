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

    console.log(clickedLetter, index);
    console.log(refsByLetter[index]);

    console.log(refsByLetter);

    if (index !== -1) {
      refsByLetter[index].current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const alphabetButtons: JSX.Element[] = alphabet.map(
    (letter: string, index: number) => (
      <Letter
        key={index}
        letter={letter}
        handleScrollToLetter={handleScrollToLetter}
      />
    )
  );

  return <div className="bttn-cont">{alphabetButtons}</div>;
}
