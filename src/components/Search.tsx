import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Autocomplete from "./Autocomplete";
import Suggestions from "./Suggestions";
import { TermsType } from "../data";
import { insuranceTerms } from "../data";

type SearchProps = {
  areTermsFiltered: boolean;
  setTerms: React.Dispatch<React.SetStateAction<TermsType[]>>;
};

export default function Search({ setTerms, areTermsFiltered }: SearchProps) {
  const [query, setQuery] = useState<string>("");
  const [autocomplete, setAutocomplete] = useState<TermsType[]>([]);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setAutocomplete([]);
    const filtertedTerms: TermsType[] = insuranceTerms.filter((term) =>
      term.name.toLowerCase().startsWith(query.toLowerCase())
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
    <section className="search-macro-cont">
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
        <button
          className="p-btn--primary"
          onClick={handleClearInput}
          disabled={!areTermsFiltered}
        >
          All
        </button>
      </div>
      <div className="error-cont">
        <p className="error">{message}</p>
      </div>
    </section>
  );
}
