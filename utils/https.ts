import { RequestParams } from "./types";
import Router from "next/router";

/**
 * Reusable request.
 * @returns
 */
export const makeRequest = async ({
  method = "GET",
  url,
  headers = {
    "Content-Type": "application/json",
  },
  body = {},
  authToken = null,
}: RequestParams) => {
  try {
    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`; // Agregar el token de autenticación en el encabezado
    }

    const response = await fetch(url, {
      method,
      headers,
      body: method === "POST" ? JSON.stringify(body) : null,
    });

    let responseBody = null;
    try {
      responseBody = await response.json();
    } catch {
      // El cuerpo de la respuesta no es un JSON válido
    }

    if (!response.ok) {
      if (response.status === 401) {
        Router.push("/example/login");
      }

      const errorMessage =
        responseBody && responseBody.message
          ? responseBody.message
          : "Algo salió mal";
      return {
        error: true,
        message: errorMessage,
        responseBody: responseBody || {},
      };
    }

    return responseBody || {};
  } catch (error: any) {
    return {
      error: true,
      message: "Error al realizar la solicitud: " + error.message,
    };
  }
};
