import { LOGIN_USER_ERROR, LOGIN_USER_INIT, LOGIN_USER_SUCCESS } from "./types";

export const userLogin = ({ username, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_INIT });

    const loginSuccess = (username) => {    
      dispatch({ type: LOGIN_USER_SUCCESS, payload: username });
    };
    const loginFail = (error) => {
      dispatch({ type: LOGIN_USER_ERROR, payload: error });
    };
    
    try {
      fetch("https://mock-server-dl.herokuapp.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }).then((response)=>{
        return response.json()
      }).then((data)=>{
        if (data.jwt){
          localStorage.jwt=data.jwt
          loginSuccess(username);
        }
        else
          loginFail(data.error);
      })
    } catch (error) {
      loginFail(error);
    }
  };
};

