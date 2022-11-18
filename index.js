const express = require('express')
const app = express()
const helmet = require("helmet");
const morgan = require('morgan')
const employeesRouter = require('./Router/employees')
app.use(express.json())
app.use(helmet());
// set NODE_ENV=production 
if(app.get('env')==='development'){
    app.use(morgan('tiny'))
}
app.use('/api/employees', employeesRouter);
//app.use(logger)




// app.get('/api/employees/:firstname/:lastname', (req, res) => {

//     res.send(req.params)

// })


// app.get('/api/employees', (req, res) => {

//     res.send(req.query)

// })

// set port=400
const port = process.env.port || 3000
app.listen(port, () => console.log("App working on port" + port + "...")) 





















