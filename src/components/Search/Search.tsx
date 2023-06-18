import { useState } from "react";
import Autocomplete from "./Autocomplete";
import Suggestions from "./Suggestions";
import Searchbar from "./Searchbar";
import { TermsType } from "../../data";

type SearchProps = {
  areTermsFiltered: boolean;
  setTerms: React.Dispatch<React.SetStateAction<TermsType[]>>;
};

export default function Search({ areTermsFiltered, setTerms }: SearchProps) {
  const [query, setQuery] = useState<string>("");
  const [autocomplete, setAutocomplete] = useState<TermsType[]>([]);
  const [message, setMessage] = useState<string>("");

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
        <Searchbar
          query={query}
          areTermsFiltered={areTermsFiltered}
          setQuery={setQuery}
          setTerms={setTerms}
          setAutocomplete={setAutocomplete}
          setMessage={setMessage}
        />
      </div>
      <div className="error-cont">
        <p className="error">{message}</p>
      </div>
    </section>
  );
}
