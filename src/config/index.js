const {
  resolve
} = require("path");

module.exports = {
  SERVICE_DESK_URL: process.env.SERVICE_DESK_URL,
  username: process.env.SERVICE_DESK_USERNAME,
  password: process.env.SERVICE_DESK_PASSWORD,
  ticketSchemasDir: process.env.SERVICE_DESK_SCHEMAS_DIR || resolve(__dirname, '../schemas/tickets'),
};