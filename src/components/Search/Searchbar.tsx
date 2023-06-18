import { useSearchbar } from "../../utils/hooks/useSearchbar";
import { TermsType } from "../../data";

type SearchBarTypes = {
  query: string;
  areTermsFiltered: boolean;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setTerms: React.Dispatch<React.SetStateAction<TermsType[]>>;
  setAutocomplete: React.Dispatch<React.SetStateAction<TermsType[]>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

export default function Searchbar({
  query,
  setQuery,
  setMessage,
  setAutocomplete,
  setTerms,
  areTermsFiltered,
}: SearchBarTypes) {
  const { handleSubmit, handleClearInput, handleTextInput } = useSearchbar(
    query,
    setQuery,
    setMessage,
    setAutocomplete,
    setTerms
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="p-input search-input"
          placeholder="Search term here..."
          type="search"
          value={query}
          onChange={handleTextInput}
        />
      </form>
      <button
        className="p-btn--primary"
        onClick={handleClearInput}
        disabled={!areTermsFiltered}
      >
        All
      </button>
    </>
  );
}
