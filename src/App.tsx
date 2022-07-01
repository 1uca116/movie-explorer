import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import NotFound from "./pages/not-found/NotFound";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <div className="App">
        <Router>
      <Routes>
        <Route index element={<Landing />} />
        {/*<Route path='profile/*' element={<ProfilePage />} />*/}
        <Route path='*' element={<NotFound />} />
      </Routes>
        </Router>
    </div>
  );
}

export default App;
