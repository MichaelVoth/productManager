import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/main';
import Detail from './components/detail'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Main />} default/>
          <Route path="products/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
