import { ChangeEvent, FormEvent, useState } from "react";
import { TermsType } from "../data";
import { insuranceTerms } from "../data";
import Autocomplete from "./Autocomplete";
import Suggestions from "./Suggestions";

type SearchProps = {
  terms: TermsType[];
  setTerms: React.Dispatch<React.SetStateAction<TermsType[]>>;
};

export default function Search({ terms, setTerms }: SearchProps) {
  const [query, setQuery] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const filtertedTerms: TermsType[] = terms.filter((term) =>
      term.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filtertedTerms.length === 0) {
      return setMessage("Sorry, we couldn't find an term matching your search");
    }

    setTerms(filtertedTerms);
  };

  const handleClearInput = (): void => {
    setTerms(insuranceTerms);
    setQuery("");
    setMessage("");
  };

  return (
    <div>
      <Autocomplete query={query} setTerms={setTerms} />
      <form onSubmit={handleSubmit}>
        <input
          className="p-input wmx5"
          placeholder="Enter your input here"
          type="search"
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
      </form>
      <button onClick={handleClearInput}>Clear</button>
      {message && <p>{message}</p>}
      <Suggestions setTerms={setTerms} />
    </div>
  );
}
