/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getAll: function (request, response) {
    return response.json({
      todo: 'getAll() is not implemented yet!'
    });
  },

  show: function (request, response) {
    return response.json({
      todo: 'show() is not implemented yet!'
    });
  },

  create: function (request, response) {
    var params = request.params.all();

    User.create(params).exec(function (error, created) {});

    return response.json({
      message : 'User created',
      params: params
    });
  },

  edit: function (request, response) {
    return response.json({
      todo: 'edit() is not implemented yet!'
    });
  },

  updateLocation: function (request, response) {
    return response.json({
      todo: 'updateLocation() not implemented yet!'
    });
  },

  delete: function (request, response) {
    return response.json({
      todo: 'delete() is not implemented yet!'
    });
  },

  index: function (request, response) {
    return response.view('userIndex' ,{
      bodyClass: '', layout: 'layoutOrder', pageTitle: 'My Account'
    });
  }

};

