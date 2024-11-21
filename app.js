const express = require('express');
console.log('helloo');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts.js');

app.use(express.static('public'));

app.get('/', (req,res) => {
    console.log('ciaooo'),
    res.send('111')
}),

//C.R.U.D e REST rotte
app.use("/posts", postsRouter);


app.listen(port,() =>{
    console.log(`server in listening on port: ${port}`)
})