/**
 * OrderController
 *
 * @description :: Server-side logic for managing Orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  /**
   * `OrderController.index()`
   */
  index: function (req, res) {
    Order.find().exec(function (err, orders) {
      return res.json({
        orders: orders
      });
    });
  },

  getPickupOrder: function (order) {
    Destination.find({where: {order: order, mode: 'pickup'}}).exec(function (err, found) {
      return found;
    });
  },
  getDeliveryOrder: function (order) {
    Destination.find({where: {order: order, mode: 'delivery'}}).exec(function (err, found) {
      return found;
    });
  },


  /**
   * `OrderController.create()`
   */
  create: function (req, res) {

    var hasPickup, hasDelivery;
    var that = this;
    var optionsPickup = {
      clientId: 12345,
      location: {
        'lat': 44.456789,
        'lng': 22.234456,
        'details': 'Langa casa din pom'
      },
      type: 'small',
      interval: {
        'start': '2015-06-13 12:45:00',
        'end': '2015-06-13 13:45:00'
      }
    };
    var optionsDelivery = {
      clientId: 12346,
      location: {
        'lat': 44.456789,
        'lng': 21.234456,
        'details': 'Langa casa din pom 2'
      },
      type: '',
      interval: {
        'start': '2015-06-14 12:45:00',
        'end': '2015-06-14 13:45:00'
      }
    };


    Order.create().exec(function (err, created) {
      that.orderAddDestination(created, 'pickup', optionsPickup);
      that.orderAddDestination(created, 'delivery', optionsDelivery);
      return res.json({
        id: created.id
      });
    });
  },


  orderAddDestination: function (order, mode, options) {
    Destination.create({
      client: options.clientId,
      location: {
        'lat': options.location.lat,
        'lng': options.location.lng,
        'details': options.location.details
      },
      type: options.type,
      interval: {
        'start': options.interval.start,
        'end': options.interval.end
      },
      mode: mode,
      order: order.id
    }).exec(function (err, created) {
    });
  },


  /**
   * `OrderController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');

    var ObjectID = require('mongodb').ObjectID;
    var o_id = new ObjectID(id);

    Order.findOne({'_id': o_id})
      .then(function (order) {

        var pickup = Destination.find({order: id, mode: 'pickup'})
          .then(function (allData) {
            return allData;
          });
        var delivery = Destination.find({order: id, mode: 'delivery'})
          .then(function (allData) {
            return allData;
          });
        return [order, pickup, delivery];
      })
      .spread(function (order, pickup, delivery) {

        var newJson = {};
        newJson.order = order;
        newJson.order.pickup = pickup;
        newJson.order.delivery = delivery;
        return res.json({notFound: false, data: newJson});
      })
      .fail(function (err) {
        console.log(err);
        res.json({notFound: true, error: err});
      });
  },


  /**
   * `OrderController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `OrderController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};

