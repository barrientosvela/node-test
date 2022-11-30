var reloj = require('./reloj')

var myreloj = new reloj()
myreloj.on('tictac', () => {
    myreloj.theTime()
})