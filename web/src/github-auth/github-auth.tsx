import React from "react";

const GITHUB_CLIENT_ID = "Ov23lijOu3xXHX9Xf31U";
const GITHUB_CLIENT_SECRET = "bfd7d6c3e8d55da30ed0b752d767bdb9c384a3c0";
const GITHUB_CALLBACK_URL = "http://localhost:5173/auth/github/callback";
const githubOAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;

const GitHubOAuth = () => {
  const handleLogin = async (code: string) => {
    try {
      // Exchange the code for an access token
      const res = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        body: JSON.stringify({
          client_id: GITHUB_CLIENT_ID,
          client_secret: GITHUB_CLIENT_SECRET,
          code,
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      const data = await res.json();

      const accessToken = data.access_token;
      console.log("Access token:", accessToken);

      // Fetch the user's GitHub profile
      const response = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "User-Agent": "vite-project",
          "Access-Control-Allow-Origin": "*",
        },
      });

      const userProfile = await response.json();
      console.log("User profile:", userProfile);

      // Handle the user profile data (e.g., store it in your database and log the user in)
      console.log(`Welcome, ${userProfile.data.name}!`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGitHubCallback = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");

    if (code) {
      handleLogin(code);
    }
  };

  React.useEffect(() => {
    handleGitHubCallback();
  }, []);

  return (
    <div>
      <a href={githubOAuthURL}>Sign in with GitHub</a>
    </div>
  );
};

export default GitHubOAuth;
