const app = require('./app')

app.listen(app.get('port'));
console.log('server on PORT!', app.get('port'))