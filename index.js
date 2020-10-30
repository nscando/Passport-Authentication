const express = require('express');
const helmet = require('helmet');

const app = express();

const { config } = require('./config/index');

const authApi = require('./routes/auth');
const moviesApi = require('./routes/movies.js');
const userMoviesApi = require('./routes/userMovies');

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');



//body parser middleware
app.use(express.json());
app.use(helmet());

//routes
authApi(app);
moviesApi(app);
userMoviesApi(app);


//Catch 404
app.use(notFoundHandler);

//errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


app.listen(config.port, function () {
     // eslint-disable-next-line no-console
     console.log(`Listening http://localhost:${config.port}`)
})