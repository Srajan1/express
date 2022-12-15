const express = require('express')
const app = express();

app.use(express.json());

app.use(require('./server/routes/student'))
app.use(require('./server/routes/subject'))

app.get('/', (req, res) =>{
    res.json({msg: "Hello world"})
})

app.listen('3000', () => {
    console.log('Server started');
})
