
import { fetchWithToken, fetchWithoutToken } from '../helpers/fetch';
import { types } from '../types/types';


export const login = ( id, displayName ) => ({

        type: types.login,
        payload: {
            id, 
            displayName
        }

})
export const startLogin = (email, password) => {
    return async (dispatch) => {
     
        const res = await fetchWithoutToken('auth', { email, password }, 'POST');
        const body = await res.json();
        console.log(body);
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(loginSuccess({
                id: body.user.id,
                name: body.user.name,
            }));
        } else {
            alert('error', body.msg, 'error')
        }
  

    };
  };

  const loginSuccess = (user) => ({
    type: types.authLogin,
    payload: { user },
  });

  export const startChecking = () => {
    return async (dispatch) => {
     
        const res = await fetchWithToken('auth/renew');
        const body = await res.json();
        console.log(body);
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(loginSuccess({
                id: body.user.id,
                name: body.user.name,
            }));
        } else {
            alert('error', body.msg, 'error')
        }
  

    };
  }

  