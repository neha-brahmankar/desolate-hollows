//Import packages/dependencies
import express from 'express';
import logger from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//Import Routes
import usersRoutes from './routes/users';

// mongoose.connect('mongodb://localhost/apiproject')
mongoose.connect('mongodb://nehab:N3ha%40123@ds219879.mlab.com:19879/apiproject');

//Register express app
const app = express();

//Configure Middleware
app.use(logger('dev'));
app.use(bodyParser.json());

//Configure Routes
app.use('/users', usersRoutes);

//Catch 404 error and forward to error handler function
app.use((req, res, next) => {
    const err = new Error('Access point not Found');
    err.status = 404;
    next(err);
});

//Error Handler
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500; 

    //Response client
    res.status(status).json({
        error: {
            message: error.message
        }
    });

    //Response ourselves
    console.log('Error', err)
});

//Start server
const port = process.env.port || 3003;

app.listen(port, () => console.log(`Server listening on ${port}`)) 