import { RefObject } from "react";
import { alphabet, TermsType } from "../data";
import Breakdown from "./Breakdown";

type CollectionProps = {
  termsByLetter: TermsType[][];
  refsByLetter: RefObject<HTMLDivElement>[];
};

export default function Overview({
  termsByLetter,
  refsByLetter,
}: CollectionProps) {
  const termsOverview: JSX.Element[] = termsByLetter.map(
    (terms: TermsType[]) => {
      const firstLetter: string = terms[0].name.charAt(0);

      const index: number = alphabet.indexOf(firstLetter);

      return (
        <div
          className="breakdown-cont"
          key={firstLetter}
          id={firstLetter}
          ref={refsByLetter[index]}
        >
          <h2 className="p-h2">{firstLetter}</h2>
          <Breakdown termsByLetter={terms} />
        </div>
      );
    }
  );

  return <div className="overview-cont">{termsOverview}</div>;
}
