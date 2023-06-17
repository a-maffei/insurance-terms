import Glossary from "./components/Glossary/Glossary";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
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
