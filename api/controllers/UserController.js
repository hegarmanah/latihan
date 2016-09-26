/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var UserController = {
     // View aja
    index: function(req, res) {
        res.view('list');
    },

    // Menampilkan 10 user
    list: function(req, res) {
        User.findAll().limit(10).sort('createdAt ASC').done(function(err, users) {
                if (err) {
                    return console.log(err);
                } else {
                    console.log("Users found:", users);
                    res.view({
                        user: user
                    });
                }
            });
    },

    // Memasukkan data user baru
    create: function(req, res) {
        user.create({
            nama: req.body.nama,
            mobil: req.body.mobil
        }).done(function(err, user) {
                if (err) {
                    return console.log(err);
                }else {
                    console.log("User created:", user);
                    res.view('list');
                }
            });
    },

};

module.exports = UserController;