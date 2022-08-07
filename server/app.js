const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

//swagger 
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')


app.use(cors());
app.options('*', cors());

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

//Middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(errorHandler);

// Routers
const categoriesRouter = require('./routers/categories');
const menusRouter = require('./routers/menus');
const dishsRouter = require('./routers/dish');
const usersRouter = require('./routers/users');
const ordersRouter = require('./routers/orders');

const api = process.env.API_URL;

app.use(`${api}/orders`, ordersRouter);
app.use(`${api}/menus`, menusRouter);
app.use(`${api}/dishs`, dishsRouter);
app.use(`${api}/categories`, categoriesRouter);
app.use(`${api}/users`, usersRouter)





// Database 
mongoose.connect(process.env.CONNECTION_STRING, { 
      dbName: "maldoo-database-dev",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
.then(() => {
    console.log('Development database');
    console.log("Database Connection is ready...");
})
.catch((err) => {
    console.log(err);
});

const PORT = process.env.PORT || 3000;


// Server
app.listen(PORT, () =>  {
    console.log(api);
    console.log('Server is running http://localhost:'+ PORT);
});


