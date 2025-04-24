import Home from "./pages/Home";
import MutualFunds from "./pages/MutualFunds";
import PersonailityTest from "./pages/PersonailityTest";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mutual-funds" element={<MutualFunds />} />
        <Route path="/personality-test" element={<PersonailityTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
