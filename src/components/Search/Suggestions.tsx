import { memo } from "react";
import { TermsType } from "../../data";
import { useSuggestion } from "../../utils/hooks/useSuggestion";

type SuggestionProps = {
  setAutocomplete: React.Dispatch<React.SetStateAction<TermsType[]>>;
  setTerms: React.Dispatch<React.SetStateAction<TermsType[]>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

function Suggestions({ setAutocomplete, setTerms, setQuery }: SuggestionProps) {
  const { randomizedTerms, handleSuggestion } = useSuggestion(
    setAutocomplete,
    setTerms,
    setQuery
  );

  return (
    <div className="suggestion-cont p-p--small">
      Tip:
      {randomizedTerms.map((term) => (
        <button
          className="suggestion-buttn"
          key={term.id}
          onClick={() => {
            handleSuggestion(term);
          }}
        >
          {term.name}
        </button>
      ))}
    </div>
  );
}

export default memo(Suggestions);
