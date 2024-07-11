const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Data', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Define a simple schema and model
const dataSchema = new mongoose.Schema({
  name: String,
  email: String
});

const Data = mongoose.model('store', dataSchema);

// Define routes
app.post('/api/data', async (req, res) => {
  try {
    const newData = new Data(req.body);
    await newData.save();
    res.status(201).send(newData);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
