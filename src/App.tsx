import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {createContext} from 'react'

export const appContext = createContext(0);

function App() {

  return (
    <appContext.Provider value = {0}>
    <Router>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/about" element={<div>about</div>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </appContext.Provider>
  );
}

export default App;
