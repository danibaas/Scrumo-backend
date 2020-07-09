// The index file, run via "npm run serve";'

import * as typeorm from "./helpers/typeorm";

typeorm.connect().then(() => {
    console.log("Database connection is active.");
});