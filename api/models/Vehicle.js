/**
* Vehicle.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    type: {
      type: 'string',
      enum: ['car', 'bike', 'whatever'],
      defaultsTo: 'car'
    },

    make: {
      type : 'string'
    },

    license: {
      type: 'string'
    }

  }
};

