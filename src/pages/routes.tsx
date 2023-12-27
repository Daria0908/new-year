import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dasha from "../components/Dasha";
import Danya from "../components/Danya";
import Start from "./start";
import Fail from "./fail";
import Home from "./home";
import Egor from "../components/Egor";
import Kir from "../components/Kir";
import Lyuda from "../components/Lyuda";
import Marik from "../components/Marik";
import Pepa from "../components/Pepa";
import Roma from "../components/Roma";
import Vasya from "../components/Vasya";

const RoutesComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/danya" element={<Danya />} />
        <Route path="/dasha" element={<Dasha />} />
        <Route path="/egor" element={<Egor />} />
        <Route path="/kir" element={<Kir />} />
        <Route path="/lyuda" element={<Lyuda />} />
        <Route path="/marik" element={<Marik />} />
        <Route path="/pepa" element={<Pepa />} />
        <Route path="/roma" element={<Roma />} />
        <Route path="/vasya" element={<Vasya />} />
        <Route path="/start" element={<Start />} />
        <Route path="/fail" element={<Fail />} />
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
