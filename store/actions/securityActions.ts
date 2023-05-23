import config from "utils/config";
import { makeRequest } from "utils/https";
import { LoginForm } from "utils/types";
import Router from "next/router";

export const SET_USER = "SET_USER";

export const startSession = (user: LoginForm) => async (dispatch: any) => {
  try {
    const response = await makeRequest({
      method: "POST",
      url: `${config.security.url}/login`,
      body: user,
    });

    if (response.error) {
      return response.responseBody.body;
    } else {
      const action = dispatch({
        type: SET_USER,
        payload: response.body,
      });

      Router.push("/example/records");
      await dispatch(action);
    }
  } catch (error) {
    return error;
  }
};

export const logout = () => async (dispatch: any, getState: any) => {
  try {
    const authToken = getState().UtilsReducer.userData.token;
    const response = await makeRequest({
      method: "POST",
      url: `${config.security.url}/logout`,
      authToken: authToken,
    });
    if (response.error) {
    } else {
      const action = dispatch({
        type: SET_USER,
        payload: {},
      });
      await dispatch(action);
      Router.push("/example/login");
    }
  } catch (error) {
    console.log(error);
  }
};
