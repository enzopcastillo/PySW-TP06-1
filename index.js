const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');

var app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.use('/api/libro', require('./routes/libro.routes'));
app.use('/api/transaccion', require('./routes/transaccion.routes'));
app.use('/api/persona', require('./routes/persona.routes'));
app.use('/api/pasaje', require('./routes/pasaje.routes'));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Server started on port', app.get('port'));
});