import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./content/pages/LoginForm";
import MainPage from "./content/pages/MainPage";


//stylesheets
import './App.css';


function App() {
  return (
      <BrowserRouter>
      <Routes>
          <Route index element={<LoginForm />} />
          <Route path='/home' element={<teste />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;