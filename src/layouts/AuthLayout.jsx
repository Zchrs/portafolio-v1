

import { AuthRouter } from "../router/AppRouter";
import "../css/authlayout.scss";

function AuthLayout() {
    return (
        <section className="auth">
            <div className="auth-container">
                <AuthRouter />
            </div>
        </section>
      );
}

export default AuthLayout;