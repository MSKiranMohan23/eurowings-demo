import express from "express";
import cors from "cors";
import { jsonData } from "./jsonData.js";

const port = process.env.PORT || 8000;
const app = express();
app.use(cors());

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};


app.listen(port, (err) => {
  if (err) {
    console.error(`ERROR: ${err.message}`);
  } else {
    console.log(`Listening on port ${port}`);
  }
});
app.get("/", function (req, res) {
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Date", new Date().toString());
  res.send("hello world 1");
});
app.get("/flight-listing", cors(corsOptions), function (req, res, next) {
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);
  app.disable("etag");
  //res.setHeader("Date", new Date().toString());
  res.send(jsonData);
});
