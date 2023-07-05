import { Routes, Route } from "react-router-dom";
import {
    Dashboard,
    Profile,
    Cruds,
    Docs,
    Gallery
   } from "../routes/index";
   import { useDispatch } from "react-redux";
import { startChecking } from "../actions/auth";
import { useEffect } from "react";


export const DashboardRouter = () => {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(startChecking);
  }, [dispatch])



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