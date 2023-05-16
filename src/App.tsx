import "./App.scss";
import Glossary from "./views/Glossary";
import CTA from "./components/CTA";
import Navbar from "./views/Navbar";
import Footer from "./views/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Glossary />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
