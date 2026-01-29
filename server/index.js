require("reflect-metadata");
const express = require("express");
const cors = require("cors");
const { MikroORM } = require("@mikro-orm/core");
const config = require("./mikro-orm.config");

const requestRoutes = require("./routes/requestRoutes");

const app = express();
app.use(cors());
app.use(express.json());

(async () => {
  const orm = await MikroORM.init(config);
  await orm.schema.updateSchema();

  // Middleware to attach request-scoped EntityManager
  app.use((req, res, next) => {
    req.em = orm.em.fork();
    next();
  });

  // Routes
  app.use(requestRoutes);

  app.listen(5000, () => console.log("Server running on http://localhost:5000"));
})();
