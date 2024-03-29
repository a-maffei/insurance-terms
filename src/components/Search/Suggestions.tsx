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
    <article className="suggestion-cont p-p--small">
      Tip:
      {randomizedTerms.map((term) => (
        <button
          className="suggestion-buttn"
          key={term.id}
          onClick={() => {
            handleSuggestion(term);
          }}
          data-testid="suggestion-button"
        >
          {term.name}
        </button>
      ))}
    </article>
  );
}

export default memo(Suggestions);
