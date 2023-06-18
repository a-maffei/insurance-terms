import { insuranceTerms, TermsType } from "../../data";

export function useSuggestion(
  setAutocomplete: React.Dispatch<React.SetStateAction<TermsType[]>>,
  setTerms: React.Dispatch<React.SetStateAction<TermsType[]>>,
  setQuery: React.Dispatch<React.SetStateAction<string>>
) {
  const randomizedTerms: TermsType[] = Array.from({ length: 3 }, () => {
    const randomIndex: number = Math.floor(
      Math.random() * insuranceTerms.length
    );
    return insuranceTerms[randomIndex];
  });

  function handleSuggestion(term: TermsType) {
    setQuery("");
    setAutocomplete([]);
    setTerms([term]);
  }

  return { randomizedTerms, handleSuggestion };
}
