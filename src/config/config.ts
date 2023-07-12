/* eslint-disable sonarjs/no-duplicate-string */

const env = process.env;

export default{
    "local": {
        "dbUrl": env.dbUrl,
        "port": 80,
    },
};
