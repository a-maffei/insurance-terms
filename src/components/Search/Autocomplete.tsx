import { useEffect, useRef } from "react";
import { TermsType } from "../../data";
import { useAutocomplete } from "../../utils/hooks/useAutocomplete";

type AutoProps = {
  query: string;
  autocomplete: TermsType[];
  setAutocomplete: React.Dispatch<React.SetStateAction<TermsType[]>>;
  setTerms: React.Dispatch<React.SetStateAction<TermsType[]>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function Autocomplete({
  autocomplete,
  setAutocomplete,
  query,
  setTerms,
  setQuery,
}: AutoProps) {
  const { handleAutocomplete } = useAutocomplete(
    query,
    setQuery,
    setAutocomplete,
    setTerms
  );

  /* After defining the logic for the autocomplete, imported from the custom hook, we take care of the UI logic to hide the autocomplete container if the user clicks outside of it */

  const autoCompleteRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        autoCompleteRef.current &&
        !autoCompleteRef.current.contains(e.target as Node)
      ) {
        setAutocomplete([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setAutocomplete]);

  return (
    <>
      <ul className="autocomplete-cont" ref={autoCompleteRef}>
        {autocomplete.length > 0 &&
          autocomplete.slice(0, 2).map((term) => (
            <li key={term.id} data-testid="autocomplete-option">
              <button onClick={() => handleAutocomplete(term)}>
                {term.name}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
