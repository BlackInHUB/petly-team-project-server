require('dotenv').config();

const app = require('./app');
const dbConnection = require('./src/db/dbConnection');

const {PORT} = process.env || 8080;

const start = async () => {
    try {
        await dbConnection();
        console.log('DB connected!');

        app.listen(PORT, () => {
            console.log(`Server running. Use API on port: ${PORT}`);
        })
    } catch (error) {
        console.error(`Failed to launch server with error: ${error.message}`);
    };
};

start();