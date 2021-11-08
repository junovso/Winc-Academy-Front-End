import "./App.css";
import Container from "./components/Container";
import About from "./components/About";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
