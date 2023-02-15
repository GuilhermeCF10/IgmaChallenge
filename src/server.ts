import express, { Application } from "express";
import cors from "cors";
import { corsOptions } from "./cors";

import { router } from "./Routes/Index.Routes";

const app: Application = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);
app.use(express.urlencoded({ extended: true }));

const port: number = 8080;

app.listen(process.env.PORT || port, () =>
  console.log(`Server HTTP is running on port ${port}`)
);

app.get("/", (req, res) => {
  res.send({
    message: "Server executing",
  });
});
