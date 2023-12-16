const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next)=>{
    res.send('<form action = "/product" method = "POST"><input type = "text" name ="title"><input type = "number" name ="Size of Product"><button type="submit">Submit</form>')
});

app.post('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/add-product');
});

app.use('/', (req, res, next)=>{
    res.send('<h1>From Data in console</h1>')
});

app.listen(4000);