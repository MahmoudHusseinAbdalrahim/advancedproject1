import express from 'express';
import routes from './routes/index';

//  Create express object
const app = express();
const port = 3000;

//  Get method send response connect to ensure server work
app.get('/api', (req, res) => {
    res.send('CONNECTED');
});

app.listen(port, () => {
    console.log(`Server started at localhost: ${port}`);
});

//  Using routes
app.use('/api', routes);

export default app;
