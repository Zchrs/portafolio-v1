import { HashRouter as Switch, Route, Router, Routes, HashRouter } from "react-router-dom";
import { 
  Layout, 
  Login, 
  Register, 
  AboutScreen,
  ContactScreen,
  PortfolioScreen,
  ServicesScreen,
  SkillsScreen
} from "./routes";
import AuthLayout from "./layouts/AuthLayout";




function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route exact path="/auth/*" element={<AuthLayout />} >
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
        </Route>
        <Route exact path="/" element={  <Layout /> } >
          <Route exact path="/about" element={<AboutScreen />} />
          <Route exact path="/services" element={<ServicesScreen />} />
          <Route exact path="/portfolio" element={<PortfolioScreen />} />
          <Route exact path="/skills" element={<SkillsScreen />} />
          <Route exact path="/contact" element={<ContactScreen />} />
        </Route>
      </Routes>
    </HashRouter>
  
    </>
  );
}

export default App;
