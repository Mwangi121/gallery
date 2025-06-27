var config = {}

//MongoDB Atlas connection strings
config.mongoURI = {
    production: 'mongodb+srv://collinsmwangi4:45127Rex@gallery.xhxqb3v.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://collinsmwangi4:45127Rex@gallery.xhxqb3v.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://collinsmwangi4:45127Rex@gallery.xhxqb3v.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}

module.exports = config;
