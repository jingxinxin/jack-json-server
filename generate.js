/**
 * Created by Jacks on 2016/9/23.
 */
module.exports = function () {
  var faker = require('faker');
  var _ = require('lodash');
  return {
    people: _.times(100, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      }
    })
  }
};