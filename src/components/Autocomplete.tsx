import { useState, useEffect, useRef, RefObject } from "react";
import { TermsType } from "../data";
import { insuranceTerms } from "../data";

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

    const matchingTerms = insuranceTerms.filter((term) => {
      return term.name.toLowerCase().startsWith(query.toLowerCase());
    });

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
