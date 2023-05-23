import config from "utils/config";
import { makeRequest } from "utils/https";
import { OperationForm, TypeGetRecordsRequest } from "utils/types";

export const SET_USERS_TABLE = "SET_USERS_TABLE";

export const getRecords =
  (recordRequest: TypeGetRecordsRequest) =>
  async (dispatch: any, getState: any) => {
    try {
      const authToken = getState().UtilsReducer.userData.token;
      const response = await makeRequest({
        method: "POST",
        url: `${config.records.url}`,
        body: recordRequest,
        authToken,
      });

      if (response.error) {
        return response.responseBody.body;
      } else {
        const action = dispatch({
          type: SET_USERS_TABLE,
          payload: response.body,
        });
        await dispatch(action);
      }
    } catch (error) {
      return error;
    }
  };

export const deleteRecord =
  (recordID: number) => async (dispatch: any, getState: any) => {
    try {
      const authToken = getState().UtilsReducer.userData.token;
      const response = await makeRequest({
        url: `${config.records.url}/${recordID}`,
        method: "DELETE",
        authToken,
      });
      if (response.error) {
        return response.responseBody.body;
      }
      return true;
    } catch (error) {}
  };
