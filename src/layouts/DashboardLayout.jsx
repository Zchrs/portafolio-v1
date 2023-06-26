import { DashboardRouter } from "../router/DashboardRouter";
import { NavDashboard } from "../components/NavDashboard";

import "../css/dashblayout.scss";
import { HeaderDashboard } from "../components/HeaderDashboard";

export const DashboardLayout = () =>{
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

          <footer className="dashblayout-footer">
            <h2>Footer</h2>
          </footer>
        </section>
    )
}
