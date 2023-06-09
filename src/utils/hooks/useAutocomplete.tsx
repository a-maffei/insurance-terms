import { useEffect } from "react";
import { insuranceTerms, TermsType } from "../../data";

export function useAutocomplete(
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  setAutocomplete: React.Dispatch<React.SetStateAction<TermsType[]>>,
  setTerms: React.Dispatch<React.SetStateAction<TermsType[]>>
) {
  function fetchMatchingTerms(query: string): TermsType[] {
    return insuranceTerms.filter((term: TermsType) => {
      return term.name.toLowerCase().startsWith(query.toLowerCase());
    });
  }

  function handleAutocomplete(term: TermsType) {
    setQuery("");
    setAutocomplete([]);
    setTerms([term]);
  }

  useEffect(() => {
    const matchingTerms: TermsType[] = fetchMatchingTerms(query);

    if (matchingTerms.length > 0) {
      setAutocomplete(matchingTerms);
    }

    if (query === "" || matchingTerms.length === 0) {
      return setAutocomplete([]);
    }
  }, [query, setAutocomplete]);

  return { handleAutocomplete };
}
