
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Cards from './components/Cards'
import CardsDetails from './components/CardDetails'



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
      </Routes>
    </>
  );
}

export default App;
