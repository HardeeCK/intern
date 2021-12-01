import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import CoverContent from "./components/CoverContent";
import Subscription from './components/Subscription';
import SubQuote from './components/Subquote';
import BookCatalogue from './components/BookCatalogue';
import Press from './components/Press';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Cover/>
      <CoverContent/>
      <Subscription/>
      <SubQuote/>
      <BookCatalogue/>
      <Press/>
      <Footer/>
    </Router>
  );
}

export default App;
