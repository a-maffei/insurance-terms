import { Terms } from "../data";

type BreakdownProps = {
  termsByLetter: Terms[];
};

export default function Breakdown(props: BreakdownProps) {
  const { termsByLetter } = props;

  const singleTerm: JSX.Element[] = termsByLetter.map((term) => {
    return (
      <article key={term.id}>
        <h3>{term.name}</h3>
        <p>{term.description}</p>
      </article>
    );
  });

  return <div>{singleTerm}</div>;
}
