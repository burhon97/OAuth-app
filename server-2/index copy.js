// const express = require("express");
// const cors = require("cors");
// const { OAuth2Client } = require("google-auth-library");
// const client = new OAuth2Client("<YOUR_CLIENT_ID>");
// const app = express();
// app.use(
//   cors({
//     origin: "http://localhost:5173", // or '*'
//   })
// );
// app.use(express.json());

// app.post("/api/google-auth", async (req, res) => {
//   const { token } = req.body;
//   try {
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: "<YOUR_CLIENT_ID>", // Specify the CLIENT_ID of the app
//     });
//     const payload = ticket.getPayload();
//     console.log("Payload:", payload);
//     const userId = payload["sub"];
//     console.log("User ID:", userId);

//     // Optionally, create a session or issue a JWT token for the user
//     res.status(200).json({ message: "User authenticated", userId });
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ error: "Invalid token" });
//   }
// });

// const PORT = process.env.PORT || 5005;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
