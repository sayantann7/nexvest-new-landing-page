import Home from "./pages/Home";
import MutualFunds from "./pages/MutualFunds";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mutual-funds" element={<MutualFunds />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
