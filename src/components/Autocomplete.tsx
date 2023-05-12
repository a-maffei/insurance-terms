import { useEffect, useRef } from "react";
import { TermsType, insuranceTerms } from "../data";

type AutoTypes = {
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
}: AutoTypes) {
  const autocompleteRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target as Node)
      ) {
        setAutocomplete([]);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [setAutocomplete]);

  useEffect(() => {
    if (query === "") {
      return setAutocomplete([]);
    }

    const matchingTerms: TermsType[] = insuranceTerms.filter(
      (term: TermsType) => {
        return term.name.toLowerCase().startsWith(query.toLowerCase());
      }
    );

    if (matchingTerms.length > 0) {
      setAutocomplete(matchingTerms);
    }
  }, [query, setAutocomplete]);

  const autoCompleteResults: JSX.Element[] = autocomplete
    .slice(0, 4)
    .map((term) => (
      <li key={term.id}>
        <button
          onClick={() => {
            setQuery("");
            setAutocomplete([]);
            setTerms([term]);
          }}
        >
          {term.name}
        </button>
      </li>
    ));

  return (
    <>
      <ul className="autocomplete-cont" ref={autocompleteRef}>
        {autocomplete.length > 0 && autoCompleteResults}
      </ul>
    </>
  );
}
