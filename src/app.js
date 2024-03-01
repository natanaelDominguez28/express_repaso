const express = require('express');
const app = express();
const path = require('node:path');

//public static
app.use(express.static('public'));

//Para trabajar con el body
app.use(express.urlencoded({extended:false}))
app.use(express.json);

//configuracion de vistas
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'./views'));

//Routes
const mainRoutes = require('./routes/main.routes');
const userRoutes = require('./routes/user.routes'); 

app.use('/', mainRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server up on port http://localhost:${PORT}`));