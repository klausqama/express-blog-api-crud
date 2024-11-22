const express = require('express');
console.log('helloo');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts.js');
const notFound = require('./middlewares/notFoundMiddleware.js');
const handleError = require('./middlewares/handleErrorsMiddleware.js');

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req,res) => {
    console.log('ciaooo'),
    res.send('111')
}),

//C.R.U.D e REST rotte
app.use("/posts", postsRouter);

// middlewares
app.use(handleError)
app.use(notFound)

//ascolto del server
app.listen(port,() =>{
    console.log(`server in listening on port: ${port}`)
})