/**
 * Order.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true
    },
    status: {
      type: 'string',
      enum: ['pending', 'assigned', 'inTransit', 'delivered', 'returned'],
      defaultsTo: 'pending'
    },
    driver: {
      type: 'string',
      defaultsTo: ''
    }
  }
};
