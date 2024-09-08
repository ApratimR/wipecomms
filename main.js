// required libraries
const express = require('express');

// importing all Routers
const global_api_middleware = require("./global.json.middleware")
const sql_module_router = require("./api/module1/sql.controller")

// the service's Port
const PORT = process.env.PORT;

// defining the global api Router
const global_api_router = express.Router();

// defining the decoder to be used by global api router
global_api_router.use(express.json())

// attaching global middlewares
global_api_router.use(global_api_middleware)

// attaching all the required routers
global_api_router.use("/module1",sql_module_router)

app = express();
app.use("/api",express.json(),global_api_router)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});