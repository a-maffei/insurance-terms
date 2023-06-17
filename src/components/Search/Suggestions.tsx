import { memo } from "react";
import { insuranceTerms, TermsType } from "../../data";

type SuggestionProps = {
  setAutocomplete: React.Dispatch<React.SetStateAction<TermsType[]>>;
  setTerms: React.Dispatch<React.SetStateAction<TermsType[]>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

function Suggestions({ setAutocomplete, setTerms, setQuery }: SuggestionProps) {
  /* We create a random selection of 3 items.
  I'd consider this function "good enough" for the limited purpose of this project.
  In an optimal scenario a more refined algorithm would be need to make sure every term has equal chance of being displayed. */

  const randomizedTerms: TermsType[] = Array.from({ length: 3 }, () => {
    const randomIndex: number = Math.floor(
      Math.random() * insuranceTerms.length
    );
    return insuranceTerms[randomIndex];
  });

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
