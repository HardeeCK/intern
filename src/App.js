import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import CoverContent from "./components/CoverContent";
import Subscription from './components/Subscription';
import SubQuote from './components/Subquote';
import BookCatalogue from './components/BookCatalogue';

function App() {
  return (
    <Router>
      <Navbar/>
      <Cover/>
      <CoverContent/>
      <Subscription/>
      <SubQuote/>
      <BookCatalogue/>
    </Router>
  );
}

export default App;
