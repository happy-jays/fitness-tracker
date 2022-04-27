const path = require('path');
const multer = require('multer')
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth')
const blogRoutes = require('./routes/blog')
const sequelize = require('./util/database');
const Blog = require('./models/blog');
const User = require('./models/user');
require('dotenv').config()
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const fsr = require('file-stream-rotator');
const morgan = require('morgan')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, Math.random().toString() + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const app = express();
app.use(bodyParser.json());
//Using Morgan
let logsinfo = fsr.getStream({ filename: "test.log", frequency: "1h", verbose: true });
app.use(morgan('tiny', { stream: logsinfo }))
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.use('/images', express.static(path.join(__dirname, 'images')))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'))
app.use('/auth', authRoutes)
app.use('/blog', blogRoutes)




sequelize
//.sync({ force: true })
    .sync()
    .then(result => {

        app.listen(8080)
    })