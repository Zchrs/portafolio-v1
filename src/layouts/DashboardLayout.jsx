import { DashboardRouter } from "../router/DashboardRouter";
import { NavDashboard } from "../components/NavDashboard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startChecking } from "../actions/auth";

import "../css/dashblayout.scss";
import { HeaderDashboard } from "../components/HeaderDashboard";

export const DashboardLayout = () =>{

  
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(startChecking);
  }, [dispatch])
  
    return (
        <section className="dashblayout">
         <header className="dashblayout-header">
            <HeaderDashboard />
         </header>

         <nav className="dashblayout-nav">
          <NavDashboard />
         </nav>
         
          <div className="dashblayout-container">
            <DashboardRouter />
          </div>

          {/* <footer className="dashblayout-footer">
            <h2>Footer</h2>
          </footer> */}
        </section>
    )
}
