

import { AuthRouter } from "../router/AppRouter";
import "../css/authlayout.scss";

export const AuthLayout = () => {
    return (
        <section className="auth">
            <div className="auth-container">
                <AuthRouter />
            </div>
        </section>
      );
}

