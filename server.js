const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router');
const app = express();
const {PORT} = require('./config');


app.use("/", router);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

let server;

function runServer(port=PORT) {
  return new Promise((resolve, reject) => {
      server = app.listen(port, () => {
        console.log(`Listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        reject(err);
      });
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {app, runServer}