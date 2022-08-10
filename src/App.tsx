import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/home" element={<Home />} />
          <Route path="/wallet" element={<Home />} />
          <Route path="/graphs" element={<Home />} />
          <Route path="/wallet" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
