const express = require('express')
var cors = require('cors')
const app = express();
app.use(cors())
const port = process.env.PORT || 5000;


const categories = require('./data/categories.json');

app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const course = categories.find(category => category.id == id)
    res.send(course);
})
app.listen(port, () => { console.log('running') })

