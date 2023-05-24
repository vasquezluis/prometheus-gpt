import { PORT, sequelizeConfig } from "./config/config";
import app from "./app";

import "./models/users.model";

async function main() {
  try {
    // aunthenticate database
    await sequelizeConfig.authenticate();

    //database sync
    await sequelizeConfig.sync({ force: false });

    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

main();
