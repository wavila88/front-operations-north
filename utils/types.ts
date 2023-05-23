export type LoginForm = {
  userName: string;
  password: string;
};

type HttpMethod = "GET" | "POST" | "DELETE" | "PUT";
//Used for Api request params
export type RequestParams = {
  method?: HttpMethod;
  headers?: any;
  body?: any;
  url: string;
  authToken?: string | null;
};

export type EventTargetType = React.ChangeEvent<HTMLInputElement>;

export type TypeTableRecords =
  | Array<{
      operation: {
        type: string;
      };
      operation_response: string;
      amount: number;
      user_balance: number;
      createdAt: string;
    }>
  | [];

export type TypeSort = "ASC" | "DESC";

export type TypeGetRecordsRequest = {
  id: number;
  pageSize: number;
  pageNumber: number;
  order: TypeSort;
};
