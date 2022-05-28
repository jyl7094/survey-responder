const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const indexRoutes = require('./routes/index');
const mcdonaldsRoutes = require('./routes/mcdonalds');
// const pandaExpressRoutes = require('./routes/panda-express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/mcdonalds', mcdonaldsRoutes);
// app.use('/panda-express', pandaExpressRoutes);
app.use(indexRoutes);

app.listen(process.env.PORT || 3000);