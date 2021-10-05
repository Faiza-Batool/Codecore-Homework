const express = require("express");
const path = require('path');
const logger = require('morgan');
const app = express();
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride((req, res) => {
    if (req.body && req.body._method){
      const method = req.body._method;
        
      return method;
    }
  }))
  
app.use(express.static(path.join(__dirname, 'public'))); 

const cohortRouter = require("./routes/cohortRouter");
app.use("/cohorts", cohortRouter)

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/cohorts', (req, res) => {
    res.render('cohorts');
})

app.listen(3000, 'localhost',() => {
    console.log('Server is listening at http://localhost:3000')
})

module.exports = app;
