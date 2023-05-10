import { insuranceTerms, TermsType } from "../data";
import Breakdown from "./Breakdown";

type CollectionProps = {
  termsByLetter: TermsType[][];
  alphabetRefs: React.RefObject<HTMLDivElement>[];
};

export default function Overview({
  termsByLetter,
  alphabetRefs,
}: CollectionProps) {
  const termsOverview: JSX.Element[] = termsByLetter.map((terms, index) => {
    const firstLetter: string = terms[0].name.charAt(0);

    return (
      <div
        key={firstLetter}
        id={firstLetter}
        ref={alphabetRefs[index]}
        data-letter={firstLetter}
      >
        <h1>{firstLetter}</h1>
        <Breakdown termsByLetter={terms} />
      </div>
    );
  });

  return <div>{termsOverview}</div>;
}
