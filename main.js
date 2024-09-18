// required libraries
const express = require('express');

// importing all Routers
const json_middleware = require("./middleware/json.middleware")
const open_json_controller = require("./api/open.controller")

// the service's Port
const PORT = process.env.PORT;

// defining the json based router
const json_router = express.Router();
json_router.use(express.json())

// attaching open json endpoint middleware
json_router.use(json_middleware)
// attaching all the required controllers to the json endpoint
json_router.use("/public",open_json_controller)
// json_router.use("/private",closed_json_controller)


app = express();
app.use("/api",json_router)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});