import { TermsType } from "../data";
import Breakdown from "./Breakdown";

type CollectionProps = {
  termsByLetter: TermsType[][];
  refsByLetter: React.RefObject<HTMLDivElement>[];
};

export default function Overview({
  termsByLetter,
  refsByLetter,
}: CollectionProps) {
  const termsOverview: JSX.Element[] = termsByLetter.map(
    (terms: TermsType[], index: number) => {
      const firstLetter: string = terms[0].name.charAt(0);

      return (
        <div key={firstLetter} id={firstLetter} ref={refsByLetter[index]}>
          <h1>{firstLetter}</h1>
          <Breakdown termsByLetter={terms} />
        </div>
      );
    }
  );

  return <div>{termsOverview}</div>;
}
