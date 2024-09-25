import { useEffect } from "react";

const GoogleLogin = () => {
  // useEffect(() => {
  //   /* global google */
  //   // @ts-ignore
  //   google.accounts.id.initialize({
  //     client_id: "818739922119-kndd1ri9pqo2i85mo9l49e5ikl73c8qq.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });
  //   // @ts-ignore
  //   google.accounts.id.renderButton(
  //     document.getElementById("googleSignInDiv"),
  //     { theme: "outline", size: "large" }
  //   );
  // }, []);

  // const handleCallbackResponse = (response: any) => {
  //   console.log("Encoded JWT ID token: " + response.credential);
  //   // Send this token to your Node.js backend
  //   fetch("http://localhost:5005/api/google-auth", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ token: response.credential }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error("Error:", error));
  // };

  return <div id="googleSignInDiv"></div>;
};

export default GoogleLogin;
