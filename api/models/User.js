/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  autoPK: false,

  attributes: {
    id : {
      type : 'integer',
      unique: true,
      autoIncrement: true,
      primaryKey: true
    },

    name : {
      type : 'string',
      size: 50,
      required: true
    },

    type: {
      type : 'string',
      enum: ['driver', 'client'],
      defaultsTo: 'client'
    },

    picture: {
      type : 'string',
      defaultsTo: 'assets/images/defaultUser.png'
    },

    phone: {
      type : 'string',
      required: true,
      size: 10
    },

    email: {
      type: 'email',
      unique: true,
      required: true
    },

    location: {
      type: 'json'
    }

    /*,afterCreate: function (user, callback) {
      User.create({name:user.name, email: 'bogdan@bogdan.com'}).exec(function(error, created){});
      callback();
    },

    afterValidate: function (user, callback) {
      console.log(user);
      callback();
    }*/

  }
};

