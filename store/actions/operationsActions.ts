import config from "utils/config";
import { homologateAction } from "utils/generalUtils";
import { makeRequest } from "utils/https";
import { OperationForm } from "utils/types";

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

export const executeOperations =
  (operation: OperationForm) => async (dispatch: any, getState: any) => {
    try {
      const userData = getState().UtilsReducer.userData;
      const response = await makeRequest({
        url: `${config.operations.url}/${
          homologateAction[
            operation.operation.element.type as keyof typeof homologateAction
          ] as any
        }`,
        method: "POST",
        authToken: userData.token,
        body: {
          userId: userData?.user?.id,
          numbers: [operation.number1?.element, operation.number2?.element],
        },
      });
      if (response.error) {
        return response.responseBody.body;
      }
      return response.body;
    } catch (error) {}
  };
