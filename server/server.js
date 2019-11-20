const express = require('express');
const app = express();
const path = require('path')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))


app.listen(3000, function(){console.log('listening on port 3000!!!')})