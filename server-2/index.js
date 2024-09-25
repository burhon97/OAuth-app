const express = require("express");
const cors = require("cors");
const { OAuth2Client } = require("google-auth-library");
const { Config } = require("./config");
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // or '*'
  })
);
app.use(express.json());

const client = new OAuth2Client(
  Config.google.clientId,
  Config.google.clientSecret,
  "http://localhost:5173"
);

app.post("/api/google-auth", async (req, res) => {
  const { code } = req.body;
  try {
    // Exchange authorization code for tokens
    const { tokens } = await client.getToken(code);
    client.setCredentials(tokens);

    // Use tokens to fetch user profile information
    const userInfo = await client.verifyIdToken({
      idToken: tokens.id_token,
      audience: Config.google.clientId,
    });

    const payload = userInfo.getPayload();
    console.log("User info:", payload);

    // Optionally, handle session, or issue your own token (JWT) here

    res.status(200).json({
      accessToken: "your-access-token",
      refrefreshToken: "your-refresh-token",
    });
  } catch (error) {
    console.error("Error exchanging code:", error);
    res.status(400).json({ error: "Failed to exchange authorization code" });
  }
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
