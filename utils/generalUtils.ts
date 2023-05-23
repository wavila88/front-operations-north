import Router from "next/router";

export const validateSession = (session: any) =>
  session || Router.push("/example/login");

export const capitalizeFirstLetter = (frase: string): string => {
  return frase.charAt(0).toUpperCase() + frase.slice(1);
};

export const validateSubmitForm = (obj: any) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key].isInvalid) {
      return false;
    }
  }
  return true;
};

export const homologateAction = {
  addition: "add",
  subtraction: "sub",
  multiplication: "mul",
  division: "div",
  square_root: "sq",
  random_string: "ran",
};
