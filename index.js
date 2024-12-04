const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, CI/CD!');
});

module.exports = app;

if (require.main === module) {
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
}
