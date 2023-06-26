import { types } from "../types/types";



export const login = (name) => {
    return {
      type: types.login,
      payload: {
        name,
    },
    };
  };

  export const logout = () => ({
    type: types.logout,
  });