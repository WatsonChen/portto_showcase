import logo from "./logo.svg";
import "./App.css";
import { List, Detail } from "pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
