import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import CoverContent from "./components/CoverContent";

function App() {
  return (
    <Router>
      <Navbar/>
      <Cover/>
      <CoverContent/>
    </Router>
  );
}

export default App;
