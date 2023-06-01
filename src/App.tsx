import Glossary from "./views/Glossary";
import Navbar from "./views/Navbar";
import Footer from "./views/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Glossary />
      <Footer />
    </div>
  );
}

export default App;
