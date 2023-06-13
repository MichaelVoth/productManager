import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Main from './views/main'; 
import Detail from './components/detail'
import Update from './components/update';


function App() {
  return (
    <div className="App">
      <BrowserRouter> {/* This is the router that will allow us to navigate between pages */}
        <Routes>
          <Route path="/products" element={<Main />} default/> {/* This is the default page that will load when we go to localhost:3000 */}
          <Route path="products/:id" element={<Detail />} /> {/* This is the detail page that will load when we go to localhost:3000/products/:id */}
          <Route path="products/edit/:id" element={<Update />} /> {/* This is the update page that will load when we go to localhost:3000/products/edit/:id */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; // This is the default export for the App component
