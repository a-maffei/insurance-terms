import Letter from "./Letter";
import { alphabet, findLetterIndex } from "../../utils/helper";

type CollectionProps = {
  refsByLetter: React.RefObject<HTMLDivElement>[];
};

export default function Collection({ refsByLetter }: CollectionProps) {
  const handleScrollToLetter = (clickedLetter: string): void => {
    const index: number = findLetterIndex(clickedLetter);

    if (index !== -1) {
      refsByLetter[index].current?.scrollIntoView();
    }
  };

  return (
    <div className="bttn-cont">
      {alphabet.map((letter: string) => (
        <Letter
          key={letter}
          letter={letter}
          handleScrollToLetter={handleScrollToLetter}
        />
      ))}
    </div>
  );
}
