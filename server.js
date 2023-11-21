const express = require('express');
const path = require('path')
const cors = require('cors')
const helmet = require('helmet');

const app = express();
app.use(helmet());
// middleware for diferent ports client and server
app.use(cors());

const server = app.listen('3030', () => {
  console.log('Server is running on port: 3030');
});

app.use(express.static(path.join(__dirname, '/public')))
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')))
app.use(express.urlencoded({ extended: true }));   // x-www-form-urlencoded
app.use(express.json());    // form-data JSON format

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.use((req, res) => {
	res.status(404).json({ message: 'Not found...' })
})

module.exports = server;