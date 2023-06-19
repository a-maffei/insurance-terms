import { ChangeEvent, FormEvent, useEffect } from "react";
import { insuranceTerms, TermsType } from "../../data";

export function useSearchbar(
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setAutocomplete: React.Dispatch<React.SetStateAction<TermsType[]>>,
  setTerms: React.Dispatch<React.SetStateAction<TermsType[]>>
) {
  /* Below, we handle the logic for the search bar.
  While here it's kept quite simple, in an ideal scenario we should have considered adding debouncing, so we don't "setQuery" every type the user presses a key. */
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setAutocomplete([]);
    const filteredTerms: TermsType[] = insuranceTerms.filter((term) =>
      term.name.toLowerCase().startsWith(query.toLowerCase())
    );

    if (filteredTerms.length === 0) {
      return setMessage(`We couldn't find any item for: "${query}"`);
    } else {
      setMessage(`Results for: "${query}"`);
      setTerms(filteredTerms);
    }
  };

  const handleClearInput = (): void => {
    setTerms(insuranceTerms);
    setQuery("");
    setMessage("");
  };

  useEffect(() => {
    if (query.length === 0) {
      setMessage("");
    }
  }, [setMessage, query]);

  return {
    handleSubmit,
    handleClearInput,
    handleTextInput,
  };
}
