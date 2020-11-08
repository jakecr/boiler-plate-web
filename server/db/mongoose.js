const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    // May need to add values here for bug fix or remove old ones eventually
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    autoIndex: true
}, () => { 
    console.log("Connected to database!")
}).catch(err => console.log(err))