
const app = require('./app');
const { connnectDatabase } = require('./config/db');
const { serverPort } = require('./secret')



app.listen(serverPort, async () => {
    console.log(`Server running at http://localhost:${serverPort}`);
    await connnectDatabase();
})
