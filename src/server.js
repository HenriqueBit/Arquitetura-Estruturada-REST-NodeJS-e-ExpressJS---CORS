const express = require('express');
const cors = require('cors');

const routes = require('./routes/routes');
const db = require('./database/db');

const app = express();

db.connect();

const allowedOrigins = [
   'http://localhost:8080'
];

// Habilitando o CORS
app.use(cors({
   origin: function(origin, callback) {
      let allowed = true;

      // permite app mobile
      if (!origin) allowed = true;
      if (!allowedOrigins.includes(origin)) allowed = false;

      callback(null, allowed);
   }
}));

// Habilita o servidor para obter dados em JSON
app.use(express.json());

// Define rotas
app.use('/api', routes)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
   console.log('Running on port ' + PORT);
});