import { useEffect, useRef } from "react";
import { TermsType, insuranceTerms } from "../../data";

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

  useEffect(() => {
    const matchingTerms: TermsType[] = insuranceTerms.filter(
      (term: TermsType) => {
        return term.name.toLowerCase().startsWith(query.toLowerCase());
      }
    );

    if (matchingTerms.length > 0) {
      setAutocomplete(matchingTerms);
    }

    if (query === "" || matchingTerms.length === 0) {
      return setAutocomplete([]);
    }
  }, [query, setAutocomplete]);

  const autoCompleteResults: JSX.Element[] = autocomplete
    .slice(0, 2)
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
      <ul className="autocomplete-cont" ref={autoCompleteRef}>
        {autocomplete.length > 0 && autoCompleteResults}
      </ul>
    </>
  );
}
