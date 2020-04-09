const app = require('./app'),
    dotenv = require("dotenv"),
    envPath = require('../helper/env')

let enviroment = envPath.currentEnv();

dotenv.config({ path: `env/.env${enviroment}` })

app.listen(process.env.PORT)