const mongoose = require('mongoose');

function connect() {
   mongoose.connect('mongodb://localhost:27017/api-restful?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false');

   const db = mongoose.conection;

   db.once('open', () => {
      console.log('Connected to Database')
   });
   db.on('error', console.error.bind(console, 'Connection error: '))
};

module.exports = {
   connect
};