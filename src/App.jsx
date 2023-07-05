import { HashRouter, Routes, Route} from "react-router-dom";
import { 
  Layout, 
  Login, 
  Register, 
  AboutScreen,
  ContactScreen,
  PortfolioScreen,
  ServicesScreen,
  SkillsScreen,
  Profile,
  Cruds,
  Gallery,
  Docs,
  AuthLayout,
  DashboardLayout,
} from "./routes";
import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
// import { AuthContext } from "./views/auth/AuthContext";
// import { useEffect, useReducer } from "react";
// import { autReducer } from "./views/auth/authReducer";
import { PrivateRoute } from "./router/PrivateRouter";
import { PublicRoute } from "./router/PublicRouter";
import { store } from "./store/store";



// const init = () =>{
//   return JSON.parse(localStorage.getItem('user')) || {
//     logged: false
//   };
// }

function App() {

  // const [user, dispatch] = useReducer( autReducer, {}, init );
  // console.log(user);

  // useEffect(() =>{
  //     localStorage.setItem( 'user', JSON.stringify(user) );
  // }, [user])

  return (
    // <AuthContext.Provider value={{user, dispatch }}>
   <Provider store={ store }>
    <HashRouter>
      <Routes>
        
      <Route exact path="/auth/*" element={ <PublicRoute>
        <AuthLayout />
      </PublicRoute> } >
          <Route exact path="auth/login" element={<Login />} />
          <Route exact path="auth/register" element={<Register />} />
        </Route>

        <Route exact path="dashboard/*" element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          } >
          <Route exact path="profile" element={<Profile />} />
          <Route exact path="cruds" element={<Cruds />} />
          <Route exact path="gallery" element={<Gallery />} />
          <Route exact path="docs" element={<Docs />} />
        </Route>
        
        
        
        <Route exact path="/*" element={  <Layout /> } >
          <Route exact path="about" element={<AboutScreen />} />
          <Route exact path="services" element={<ServicesScreen />} />
          <Route exact path="portfolio" element={<PortfolioScreen />} />
          <Route exact path="skills" element={<SkillsScreen />} />
          <Route exact path="contact" element={<ContactScreen />} />
        </Route>
      </Routes>
    </HashRouter>
    </Provider>
  /* </AuthContext.Provider> */
  );
}

export default App;
