import { Routes, Route } from "react-router-dom";
import {
    Dashboard,
    Profile,
    Cruds,
    Docs,
    Gallery
   } from "../routes/index";

export const DashboardRouter = () => {


  return (
    <Routes>
        <Route path="/*" element={<Dashboard />} />
            <Route exact path="profile" element={<Profile />} />
            <Route exact path="cruds" element={<Cruds />} />
            <Route exact path="docs" element={<Docs />} />
            <Route exact path="gallery" element={<Gallery />} />
    </Routes>
   
  );
};