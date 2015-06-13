/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  driverDetails: function (request, response) {
    return response.send('Hi the11re');
  }

  , create: function (request, response) {
    var params = request.params.all();

    User.create({
      name : "Bogdan",
      email: "bogdan.rancichi@emag.ro"
    }).exec(function createUser(error, created) {
      console.log(error);
      console.log(created);
    });

    return response.json({
      message : 'User created'
    });
  }

};

