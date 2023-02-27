import { HashRouter as Router, Routes, Route } from "react-router-dom";

import {
  // componente global
  // fin componente global
  HomeScreen,
  AboutScreen,
  ContactScreen,
  ServicesScreen,
  PortfolioScreen,
  SkillsScreen,
} from "../../routes/index";

export const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomeScreen />} />
      <Route exact path="/about" element={<AboutScreen />} />
      <Route exact path="/services" element={<ServicesScreen />} />
      <Route exact path="/portfolio" element={<PortfolioScreen />} />
      <Route exact path="/skills" element={<SkillsScreen />} />
      <Route exact path="/contact" element={<ContactScreen />} />
    </Routes>
  );
};
