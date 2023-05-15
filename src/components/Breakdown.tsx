import { TermsType } from "../data";

type BreakdownProps = {
  termsByLetter: TermsType[];
};

export default function Breakdown({ termsByLetter }: BreakdownProps) {
  const singleTerm: JSX.Element[] = termsByLetter.map((term: TermsType) => {
    return (
      <article className="breakdown-def" key={term.id}>
        <h4 className="p-h4">{term.name}</h4>
        <p className="p-p">{term.description}</p>
      </article>
    );
  });

  return <div>{singleTerm}</div>;
}
