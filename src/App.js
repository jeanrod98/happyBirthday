import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Index from './components/Index'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/happyBirthday" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
