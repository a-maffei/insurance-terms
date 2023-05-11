import { useState, useEffect } from "react";
import { TermsType, insuranceTerms } from "../data";

type AutoTerms = {
  query: string;
  setTerms: React.Dispatch<React.SetStateAction<TermsType[]>>;
};

export default function Autocomplete({ query, setTerms }: AutoTerms) {
  const [autocomplete, setAutocomplete] = useState<TermsType[]>([]);

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
  }, [query]);

  return (
    <div>
      <ul>
        {autocomplete.length > 0 &&
          autocomplete.slice(0, 4).map((term) => (
            <li key={term.id}>
              <button onClick={() => setTerms([term])}>{term.name}</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
