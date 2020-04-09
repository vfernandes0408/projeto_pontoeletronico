module.exports = {

    currentEnv() {
        let envPath;

        switch (process.env.NODE_ENV) {
            case "development":
                envPath = ".development";
                break
            case "staging":
                envPath = "..staging";
                break;
            case "production":
                envPath = ".production";
                break;
        }
        return envPath;
    }
}