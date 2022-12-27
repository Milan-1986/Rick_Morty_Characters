import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import { Navbar } from './Component/Navbar';
import Alive from './Component/pages/Alive';
import Any from './Component/pages/Any';
import Dead from './Component/pages/Dead';
import Unknown from './Component/pages/Unknown';

function App() {

  const [search, setSearch] = useState("");
  function handleSearch(event: any) {
    setSearch(event.target.value)
  }

  return (
    <BrowserRouter>
      <div>
        <Header handleSearch={handleSearch}/>
        <Navbar />
        <Routes>
          <Route path="/any" element={<Any search={search}/>}></Route>
          <Route path="alive" element={<Alive search={search}/>}></Route>
          <Route path="dead" element={<Dead search={search}/>}></Route>
          <Route path="unknown" element={<Unknown search={search}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
