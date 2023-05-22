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
