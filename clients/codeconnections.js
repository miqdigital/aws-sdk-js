require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['codeconnections'] = {};
AWS.CodeConnections = Service.defineService('codeconnections', ['2023-12-01']);
Object.defineProperty(apiLoader.services['codeconnections'], '2023-12-01', {
  get: function get() {
    var model = require('../apis/codeconnections-2023-12-01.min.json');
    model.paginators = require('../apis/codeconnections-2023-12-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CodeConnections;
