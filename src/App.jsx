import { Routes, Route } from "react-router-dom";

import Calculator from "./components/Calculator";
import ConvertionOptions from "./components/ConvertionOptions";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-lime-100 text-lime-950 font-karla w-full h-screen select-none">
      <Navbar />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/converter" element={<ConvertionOptions />} />
      </Routes>
    </div>
  );
};

export default App;
