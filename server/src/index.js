import { createServer } from "http";
import express from "express";
import cors from "cors";

import { User } from "./models/index.js";

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    // Generate a salt at level 12 strength
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  const { email, firstName, lastName, sex } = req.body;

  const hashedPassword = await hashPassword(req.body.password);

  const userData = {
    email: email.toLowerCase(),
    firstName,
    lastName,
    password: hashedPassword,
    role: "admin",
  };
});
server.listen(3000);
