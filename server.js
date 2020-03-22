// @ts-nocheck
const express = require('express'),
app = express(),
port = process.env.PORT || 5000,
cors = require('cors');
const dotenv = require('dotenv');
const { EventEmitter } = require('events');
const emitter = new EventEmitter();
const exphbs = require('express-handlebars')
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

dotenv.config({ path: './config/config.env' });

const messages = require('./routes/contactForm');

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')

// INit Middleware
app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);// support encoded bodies

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(bodyParser.json());

//Define routes
app.use('/contactform', messages);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')),
  );
}

//Set Max limit
emitter.setMaxListeners(0)


app.get('/', (req, res) => res.json({ msg: 'Welcome to My Portfolio API' }));

app.listen(port, () => console.log(`Listening on port ${port}`));
