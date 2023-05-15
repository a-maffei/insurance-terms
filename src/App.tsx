import "./App.scss";
import Glossary from "./views/Glossary";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <Glossary />
        <CTA />
      </main>
    </div>
  );
}

export default App;
