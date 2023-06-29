import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startChecking } from "../actions/auth";

import { AuthRouter } from "../router/AppRouter";
import "../css/authlayout.scss";

export const AuthLayout = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
      dispatch(startChecking());
    }, [dispatch])

    return (
        <section className="auth">
            <div className="auth-container">
                <AuthRouter />
            </div>
        </section>
      );
}

