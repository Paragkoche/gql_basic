import app from "./app";
import { DB_client } from "./db/client.db";
app.listen(8080, async () => {
  await DB_client.$connect();
  console.log("server start at PORT 8080");
});
