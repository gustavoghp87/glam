const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const access_token = require("../env.json").access_token;
const morgan = require('morgan');
const mercadopago = require('mercadopago');

const mongoose = require("mongoose");
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false, useCreateIndex:true
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan('dev'));

mercadopago.configure({access_token});

app.use('/api/users', require('./routes/users'));
app.use('/api/product', require('./routes/product'));

//app.use(express.static(elPath));
app.use('/uploads', express.static(path.resolve(__dirname, '..', '/uploads')))

if (process.env.NODE_ENV === "production" || require("../env.json").ENV === "prod" ) {
  const pathProd = path.resolve(__dirname, '..', 'client', 'build');
  console.log("PATH PRODUCCIÓN: ", pathProd);
  app.use(express.static(pathProd));

  app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"));
  });
};

const port = process.env.PORT || require('../env.json').PORT_BACKEND;

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});
