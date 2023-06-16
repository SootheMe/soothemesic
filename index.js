const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./config/database');
const musikRoutes = require('./routes/musikroutes.js');
const dotenv = require('dotenv');
dotenv.config();

async function connectToDatabase() {
    try {
      await sequelize.sync();
      console.log('Database Connected');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
connectToDatabase();

app.use(express.json());
app.use('/music', musikRoutes);
app.use(cors({ credentials: true, origin: '0.0.0.0'}))

app.listen(8080, () => {
    console.log(`Server running on port 8080`)
});
