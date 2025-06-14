import app from "./app";

import mongoose from "mongoose";
import config from "./config/config";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listenhing on port 5000`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
