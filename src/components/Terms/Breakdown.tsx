import { TermsType } from "../../data";

type BreakdownProps = {
  termsByLetter: TermsType[];
};

export default function Breakdown({ termsByLetter }: BreakdownProps) {
  const termElements: JSX.Element[] = termsByLetter.map(
    ({ id, name, description }: TermsType) => {
      return (
        <article className="breakdown-def" key={id}>
          <h4 className="p-h4">{name}</h4>
          <p className="p-p">{description}</p>
        </article>
      );
    }
  );

  return <div>{termElements}</div>;
}
