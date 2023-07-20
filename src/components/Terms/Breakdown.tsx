import { TermsType } from "../../data";

type BreakdownProps = {
  termsByLetter: TermsType[];
};

export default function Breakdown({ termsByLetter }: BreakdownProps) {
  return (
    <>
      {termsByLetter.map(({ id, name, description }: TermsType) => {
        return (
          <article
            className="breakdown-def"
            key={id}
            data-testid="term-section"
          >
            <h4 className="p-h4">{name}</h4>
            <p className="p-p">{description}</p>
          </article>
        );
      })}
    </>
  );
}
