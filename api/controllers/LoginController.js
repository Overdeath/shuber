/**
 * LoginController
 *
 * @description :: Server-side logic for managing login
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function (request, response) {
    return response.view('login' ,{
      bodyClass: 'login-bg'
    });
  }

};

