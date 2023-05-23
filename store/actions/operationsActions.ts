import config from "utils/config";
import { makeRequest } from "utils/https";

export const SET_OPERATIONS_DATA = "SET_OPERATIONS_DATA";

export const getOperationsBalance =
  () => async (dispatch: any, getState: any) => {
    try {
      const userData = getState().UtilsReducer.userData;
      const response = await makeRequest({
        method: "POST",
        url: `${config.operations.url}/operations`,
        body: { userId: userData?.user?.id },
        authToken: userData.token,
      });

      if (response.error) {
        return response.responseBody.body;
      } else {
        const action = dispatch({
          type: SET_OPERATIONS_DATA,
          payload: response.body,
        });
        await dispatch(action);
      }
    } catch (error) {
      return error;
    }
  };
