import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home/Home";
import Tasbih from "./Components/Tasbih/Tasbih";
import Countdown from "./Components/Countdown/Countdown";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink> <br />
          <NavLink to="/Tasbih">Tasbih</NavLink> <br />
          <NavLink to="/Countdown">IftarCountdown</NavLink> <br />
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tasbih" element={<Tasbih />} />
          <Route path="/Countdown" element={<Countdown />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
