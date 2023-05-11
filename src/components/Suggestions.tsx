import { memo } from "react";
import { insuranceTerms, TermsType } from "../data";

type SuggestionProps = {
  setTerms: React.Dispatch<React.SetStateAction<TermsType[]>>;
};

function Suggestions({ setTerms }: SuggestionProps) {
  const randomizedTerms: TermsType[] = [...insuranceTerms]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div>
      {randomizedTerms.map((term) => (
        <button key={term.id} onClick={() => setTerms([term])}>
          {term.name}
        </button>
      ))}
    </div>
  );
}

export default memo(Suggestions);
