import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { TermsType } from "../data";
import { insuranceTerms } from "../data";
import Autocomplete from "./Autocomplete";
import Suggestions from "./Suggestions";

type SearchProps = {
  terms: TermsType[];
  areTermsFiltered: boolean;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setTerms: React.Dispatch<React.SetStateAction<TermsType[]>>;
};

export default function Search({
  terms,
  setTerms,
  message,
  setMessage,
  areTermsFiltered,
}: SearchProps) {
  const [query, setQuery] = useState<string>("");
  const [autocomplete, setAutocomplete] = useState<TermsType[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setAutocomplete([]);
    const filtertedTerms: TermsType[] = insuranceTerms.filter((term) =>
      term.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filtertedTerms.length === 0) {
      return setMessage(`We could find any item for: "${query}"`);
    } else {
      setMessage(`Results for: "${query}"`);
      setTerms(filtertedTerms);
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
  }, [query]);

  return (
    <div className="search-macro-cont">
      <Suggestions
        setQuery={setQuery}
        setTerms={setTerms}
        setAutocomplete={setAutocomplete}
      />
      <div className="input-cont">
        <Autocomplete
          query={query}
          setQuery={setQuery}
          setTerms={setTerms}
          autocomplete={autocomplete}
          setAutocomplete={setAutocomplete}
        />
        <form onSubmit={handleSubmit}>
          <input
            className="p-input search-input"
            placeholder="Search term here..."
            type="search"
            value={query}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
          />
        </form>
        {areTermsFiltered && (
          <button className="p-btn--primary" onClick={handleClearInput}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
