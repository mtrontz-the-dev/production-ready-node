var User = require('./models/user.js');

var user = {
    name: "Admin User",
    email: "admin@gmail.com",
    password: "admin",
    role: "admin"
}

User.create(user, function(error) {
    if (error) {
        throw error;
    }
});
