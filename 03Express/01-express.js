const express = require('express')
const app = express()
const port = 3005


//Motor de plantillas
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

//Middleware
app.use(express.static(__dirname+'/public'));

//Peticiones básicas HTTP
app.get('/', (req, res) => {
    res.render("index", {titulo : "mi titulo dinamico"})
  })

app.get('/contacto', (req, res) => {
    res.render("contacto", {tituloContacto : "mi titulo dinamico de contacto"})
})

app.use((req,res) => {
    res.status(404).render("404", {
        titulo: "Error 404 d",
        descripcion: "Not found :d"
    })
   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
