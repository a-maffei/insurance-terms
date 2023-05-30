import { memo } from "react";
import { insuranceTerms, TermsType } from "../data";

type SuggestionProps = {
  setAutocomplete: React.Dispatch<React.SetStateAction<TermsType[]>>;
  setTerms: React.Dispatch<React.SetStateAction<TermsType[]>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

function Suggestions({ setAutocomplete, setTerms, setQuery }: SuggestionProps) {
  const randomizedTerms: TermsType[] = [...insuranceTerms]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="suggestion-cont p-p--small">
      Tip:
      {randomizedTerms.map((term) => (
        <button
          className="suggestion-buttn"
          key={term.id}
          onClick={() => {
            setQuery("");
            setAutocomplete([]);
            setTerms([term]);
          }}
        >
          {term.name}
        </button>
      ))}
    </div>
  );
}

export default memo(Suggestions);
