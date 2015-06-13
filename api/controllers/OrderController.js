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
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },


  /**
   * `OrderController.create()`
   */
  create: function (req, res) {

    var inPickup = Destination.create({
      client: '12345',
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
    }).exec(function(err,created) { console.log(created) });

    var inDelivery = Destination.create({
      client: '12345',
      location: {
        'lat': 44.456789,
        'lng': 21.234456,
        'details': 'Langa casa din pom2'
      },
      type: '',
      interval: {
        'start': '2015-06-13 12:45:00',
        'end': '2015-06-13 13:45:00'
      }
    }).exec(function(err,created) { console.log(created) });

    console.log(inPickup);


    Order.create({
      pickup: inPickup,
      delivery: inDelivery
    }).exec(function(err,created) { created.save() });

    return res.json({
      todo: 'create() is not implemented yet!'
    });
  },


  /**
   * `OrderController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
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

