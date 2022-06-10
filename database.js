const mongoose = require('mongoose');
const URI = 'mongodb://localhost/database_unju';

mongoose.connect(URI)
.then(db => console.log('Database connected.'))
.catch(err => console.error(err));

module.exports = mongoose;