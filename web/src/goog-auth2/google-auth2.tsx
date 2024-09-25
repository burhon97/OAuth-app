import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

const GoogleLogin = () => {
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      // Send the code to your backend for token exchange
      await fetch("http://localhost:5005/api/google-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: codeResponse.code }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Server Response:", data);
        })
        .catch((error) => console.error("Error:", error));
    },
    flow: "auth-code", // Ensure it's using the auth-code flow for OAuth2
  });

  return <button onClick={() => login()}>Sign in with Google</button>;
};

export default GoogleLogin;
