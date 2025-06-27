var config = {}

//MongoDB Atlas connection strings
config.mongoURI = {
    production: 'mongodb+srv://collinsmwangi4:45127Rex@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://collinsmwangi4:45127Rex@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://collinsmwangi4:45127Rex@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}

module.exports = config;
