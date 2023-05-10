import HeaderGlossary from "../components/HeaderGlossary";
import Search from "../components/Search";
import Alphabet from "../components/Alphabet";
import Overview from "../components/Overview";

const asciiArray: number[] = Array(26)
  .fill(0)
  .map((el, i) => i + 65);
const alphabet: string[] = asciiArray.map((el) => String.fromCharCode(el));

export default function Glossary() {
  return (
    <section>
      <HeaderGlossary />
      <Search />
      <Alphabet alphabet={alphabet} />
      <Overview alphabet={alphabet} />
    </section>
  );
}
