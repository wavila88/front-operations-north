import Router from "next/router";

export const validateSession = (session: any) =>
  session || Router.push("/example/login");
