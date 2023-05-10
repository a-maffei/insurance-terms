import { insuranceTerms, Terms } from "../data";
import Breakdown from "./Breakdown";

type CollectionProps = {
  alphabet: string[];
};

export default function Overview(props: CollectionProps) {
  const { alphabet } = props;

  const termsByLetter: Terms[][] = [];

  alphabet.forEach((letter) => {
    const letterArray: Terms[] = insuranceTerms.filter(
      (term) => term.name.charAt(0).toLowerCase() === letter.toLowerCase()
    );

    if (letterArray.length > 0) {
      termsByLetter.push(letterArray);
    }
  });

  const termsOverview: JSX.Element[] = termsByLetter.map((terms) => {
    const firstLetter: string = terms[0].name.charAt(0);

    return (
      <div key={firstLetter} id={firstLetter}>
        <h1>{firstLetter}</h1>
        <Breakdown termsByLetter={terms} />
      </div>
    );
  });

  return <div>{termsOverview}</div>;
}
