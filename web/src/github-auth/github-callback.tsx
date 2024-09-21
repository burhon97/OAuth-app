import React, { useEffect } from "react";
import axios from "axios"; // Or use fetch

const GitHubCallback = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      // Exchange the code for an access token
      axios
        .post(
          `https://github.com/login/oauth/access_token`,
          {
            client_id: "Ov23lijOu3xXHX9Xf31U",
            client_secret: "bfd7d6c3e8d55da30ed0b752d767bdb9c384a3c0", // This should ideally be handled by your backend for security
            code,
          },
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then((response) => {
          const accessToken = response.data.access_token;
          // You can now use this access token to fetch user data from GitHub API
          console.log("GitHub Access Token:", accessToken);
          fetchGitHubUser(accessToken);
        })
        .catch((error) => {
          console.error("Error getting access token:", error);
        });
    }
  }, []);

  return <div>GitHub Callback</div>;
};

const fetchGitHubUser = (accessToken: string) => {
  axios
    .get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      console.log("GitHub User:", response.data);
    })
    .catch((error) => {
      console.error("Error fetching GitHub user:", error);
    });
};

export default GitHubCallback;
